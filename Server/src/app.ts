import 'reflect-metadata';
import {Request, Response} from "express";
import express from "express";
import helmet from 'helmet';
import cors from 'cors';
import { AppDataSource } from "./data-source";
import { Uchazec } from "./Models/Uchazec-model";
import { UchazecVolba } from './Models/Uchazec_volba-model';

const app = express();

app.use(helmet());
app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        const volbaRepository = AppDataSource.getRepository(UchazecVolba);
        const uchazecRepository = AppDataSource.getRepository(Uchazec)
        

       
        app.use(cors());
        app.get("/uchazec-single/:id", async (req: Request, res: Response) => {
            const id = parseInt(req.params.id);
            console.log("id: ",id)
            try {
                const uchazec = await uchazecRepository.findOne({
                    where: {id},
                    
                    relations:{
                        volba_join:{
                            obor_join:true,
                            neprijeti_join:true,
                            skola_join:true
                        }
                    },
                order: {
                    volba_join:{
                        poradi:"ASC"
                    }
                }
                
            });
                if (!uchazec) {
                    return res.status(404).json({ message: "Uchazec not found" });
                }
                res.json(uchazec);
            } catch (err) {
                console.error(err);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        app.get("/uchazec-count/:year/:round", async (req: Request, res: Response) => {
            
            const year = parseInt(req.params.year);
            const round = parseInt(req.params.round);

            console.log("year: ", year, " -- kolo: ", round);

            try {
                const total = await uchazecRepository.count({
                    where: { rok: year, kolo: round }
                });

               
                return res.json({ labels: ["Počet uchazečů"], values: [total] });
            } catch (err) {
                console.error(err);
                return res.status(500).json({ message: "Internal server error" });
            }
        });

        // Aggregated counts across a range of year
        app.get('/uchazec/years', async (req: Request, res: Response) => {
            const startRaw = req.query.start?.toString();
            const endRaw = req.query.end?.toString();
            const round = Number(req.query.round ?? '1');

            const start = Number(startRaw);
            const end = Number(endRaw);

            if (!Number.isInteger(start) || !Number.isInteger(end) || start > end) {
                return res.status(400).json({ message: 'Invalid start/end query parameters. Use integer years and start <= end.' });
            }

            const maxYearRange = 50; 
            if (end - start + 1 > maxYearRange) {
                return res.status(400).json({ message: `Range too large; max ${maxYearRange} years allowed.`});
            }

            const years: number[] = [];
            for (let y = start; y <= end; y++) years.push(y);

            try {
                const countPromises = years.map(async (y) => {
                    return uchazecRepository.count({ where: { rok: y, kolo: round} });
                });

                const counts = await Promise.all(countPromises);

                return res.json({ labels: years.map(String), values: counts });
            } catch (err) {
                console.error(err);
                return res.status(500).json({ message: 'Internal server error' });
            }
        });

        app.get("/uchazec", async (_req: Request, res: Response) => {
            try {
                const all = await uchazecRepository.find(
                    {
                        relations:{
                            volba_join:{
                                skola_join: true,
                                obor_join: true,
                                neprijeti_join:true
                            }
                        }
                    }
                );
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

    

