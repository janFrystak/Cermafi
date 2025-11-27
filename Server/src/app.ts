import 'reflect-metadata';
import {Request, Response} from "express";
import express from "express";
import helmet from 'helmet';
import { AppDataSource } from "./data-source";
import { Uchazec } from "./Models/Uchazec-model";

const app = express();



app.use(helmet());
app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        const uchazecRepository = AppDataSource.getRepository(Uchazec);

        // Register routes first
        app.get("/api/uchazec-single/:id", async (req: Request, res: Response) => {
            const id = parseInt(req.params.id);
            try {
                const uchazec = await uchazecRepository.findOneBy({ id });
                if (!uchazec) {
                    return res.status(404).json({ message: "Uchazec not found" });
                }
                res.json(uchazec);
            } catch (err) {
                console.error(err);
                res.status(500).json({ message: "Internal server error" });
            }
        });

        app.get("/api/uchazec", async (_req: Request, res: Response) => {
            try {
                const all = await uchazecRepository.find();
                if (!all){
                    return res.status(404).json({message: "Empty :("})
                }
                res.json(all);
            } catch (err) {
                console.error(err);
                res.status(500).json({message: "Internal server error."});
            }}
        );

        // Then start server
        app.listen(8080, () => {
            console.log("Listening on http://localhost:8080");
        });
    })
    .catch((err) => {
        console.error("DataSource initialization error:", err);
    });

    

