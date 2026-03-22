import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Skola } from '../Models/Skola-model';

export const schoolRouter = Router();

const schoolRepository = AppDataSource.getRepository(Skola);

// GET /school/all
schoolRouter.get('/all', async (req: Request, res: Response) => {
    try {
        const all = await schoolRepository
            .createQueryBuilder('s')
            .select('s.id', 'id')
            .addSelect('s.plnyNazev', 'fullName')
            .addSelect('s.zkracenyNazev', 'shortName')
            .addSelect('s.misto', 'misto')
            .getRawMany();

        if (!all || all.length === 0) {
            return res.status(404).json({ message: 'No schools found.' });
        }
        return res.json(all);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});