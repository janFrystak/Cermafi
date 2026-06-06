import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import { spawn } from 'child_process';
import fs, { appendFile } from 'fs';
import bcrypt from 'bcrypt';
import { Admin } from '../Models/Admin-model';


export const adminRouter = Router();
const upload = multer({ 
    dest: 'uploads/',
    limits :{ fileSize: 50 * 1024 * 1024}
 });
const SALT_ROUNDS = 12;
const adminRepository = AppDataSource.getRepository(Admin)

//middleWare checking if the logged in admins permissionLevel
const rootOnly = (req: Request, res: Response, next: NextFunction) => {
    const userId = (req as any).user.id;
    adminRepository.findOne({ where: { id: userId } }).then(admin => {
        if (!admin || admin.permissionLevel !== 0) {
            return res.status(403).json({ message: 'Root access required' });
        }
        next();
    });
};

//middleWare checking the cookies token for wherever is is valid and correct
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, String(process.env.JWT_SECRET));
        (req as any).user = decoded; // work around for making req.user an additional global variable, no, dont understand
        next();
    } catch {
        res.status(401).json({ message: 'Invalid token' });
    }
};

// Attempt login
adminRouter.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    /* console.log("Logn attempt: " + username + " : " + password) */
    const user = await adminRepository.findOne({
        where: { username }
    })

    if (!user || !(await bcrypt.compare(password, user.passHash))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
        { id: user.id, permissionLevel: user.permissionLevel}, 
        String(process.env.JWT_SECRET), 
        { expiresIn: '8h' }
    );

    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 8 * 60 * 60 * 1000 //8 Hours

    });
    res.json({ success: true });
});


adminRouter.use(authMiddleware)

//logout of admin account
adminRouter.post('/logout', (req: Request, res: Response) => {
    res.clearCookie('token', { 
        httpOnly: true, 
        secure: true,
        sameSite: 'none' 
    });
    res.json({ success: true });
});

//check active cookies
adminRouter.get('/me', (req, res) => {
    const user = (req as any).user;
    res.json({ success: true, permissionLevel: user.permissionLevel });
});


//try to upload new data using the ImportToDB.py script
adminRouter.post("/upload",
    (req: Request, res: Response, next: any) => {
        upload.array('file')(req, res, (err) => {
            if (err) {
                console.error("Multer error: ", err);
                return res.status(400).json({ message: "Chyba při nahrávání souboru", details: err.message });
            }
            next();
        });
    },
    async (req: Request, res: Response) => {
        try {
            const appendOption: string = req.body.appendData === 'true' ? 'true' : 'false';
            const files: Express.Multer.File[] = req.files as Express.Multer.File[];
            const filePaths: string[] = files.map(file => file.path);
            const scriptPath = path.join(__dirname, '../../scripts/ImportToDB.py');

            if (!filePaths || filePaths.length === 0) {
                console.error("No files found in request");
                return res.status(400).json({ message: "No files uploaded" });
            }

            const pythonProcess = spawn('python3', [
                scriptPath,
                appendOption,
                ...filePaths,
            ]);

            res.status(202).json({ message: "Import spuštěn, může trvat několik minut." });

            let pythonStderr = '';
            let pythonStdout = '';

            pythonProcess.stdout.on('data', (data) => {
                pythonStdout += data.toString();
            });

            pythonProcess.stderr.on('data', (data) => {
                pythonStderr += data.toString();
            });

            pythonProcess.on('close', (code) => {
                filePaths.forEach(p => {
                    try { fs.unlinkSync(p); } catch {}
                });
                if (code === 0) {
                    console.log("Import úspěšný:", pythonStdout);
                } else {
                    console.error("Import selhal:", pythonStderr);
                }
            });

        } catch (err) {
            console.log("Import error: " + err);
        }
    }
);


// get list of all accounts
adminRouter.get('/accounts', rootOnly, async (req: Request, res: Response) => {
    try {
        const user = await adminRepository.find({
            select: ['id', 'username', 'permissionLevel'],
            order: { id: 'ASC' }
        })
        res.json(user);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// create admin account
adminRouter.post('/account',  rootOnly, async (req: Request, res: Response) => {
    const { username, password, permissionLevel = 1 } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const existing = await adminRepository.findOne({
            where: { username }
        })
        if (existing) {
            return res.status(409).json({ message: 'Username already exists' });
        }

        const hash = await bcrypt.hash(password, SALT_ROUNDS);
        const saved = await adminRepository.save({
            username, passHash: hash, permissionLevel
        })
        res.status(201).json({ 
            id: saved.id, 
            username: saved.username,
            permissionLevel: saved.permissionLevel
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// delete admin account
adminRouter.delete('/account/:id', rootOnly, async (req: Request, res: Response) => {
    const { id } = req.params;
    const myId  = (req as any).user.id;

    if (id == myId){
        return res.status(403).json({ message: 'Cannot delete your own account', case: 3}); //case 3 - dont have to compare strings on received
    }

    try {
        const result = await adminRepository.delete(id)

        if (result.affected === 0) {
            return res.status(404).json({ message: 'Admin not found' , case: 2});
        }

        res.json({ success: true });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error', case: 1});
    }
});

// change password
adminRouter.patch('/account/:id/password', rootOnly, async (req: Request, res: Response) => {
    const { id } = req.params;
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }

    try {
        const hash = await bcrypt.hash(password, SALT_ROUNDS);
        const result = await adminRepository.update(id, { passHash: hash })

        if (result.affected === 0) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.json({ success: true });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
});
