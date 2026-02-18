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
        app.get("/region/:id", async (req: Request, res: Response)=>{
            const id = parseInt(req.params.id)
            try {
                const uchazecData = await uchazecRepository.createQueryBuilder('uchazec')
                    .leftJoinAndSelect('uchazec.volba_join', 'volba')
                    .leftJoinAndSelect('volba.obor_join', 'obor')
                    .leftJoinAndSelect('volba.neprijeti_join', 'neprijeti')
                    .leftJoinAndSelect('volba.skola_join', 'skola')
                    .leftJoinAndSelect('skola.kraj_join', 'kraj')
                    .where('kraj.id = :regionId', { regionId: Number(id) })
                    .getMany();

                    if (!uchazecData) {
                        return res.status(404).json({ message: "Uchazec not found" });
                    }
                    res.json(uchazecData);
            } catch (err){
                console.error;
                res.status(404).json({message: "Internal server error"})
            }
            
        })
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
        app.get("/uchazec-count/:year", async (req: Request, res: Response) => {
            
            const year = parseInt(req.params.year);
            

            console.log("year: ", year, " -- kolo: ");

            try {
                const total_round1 = await uchazecRepository.count({
                    where: { rok: year, kolo: 1 }
                });
                const total_round2 = await uchazecRepository.count({
                    where: {rok: year, kolo: 2}
                })

               
                return res.json({ labels: ["Počet uchazečů"], value_round1: [total_round1], value_round2: [total_round2] });
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
                const countPromises_Round1 = years.map(async (y) => {
                    return uchazecRepository.count({ where: { rok: y, kolo: 1} });
                });
                const countPromises_Round2 = years.map(async (y) =>{
                    return uchazecRepository.count({where: {rok: y, kolo: 2}})
                })

                const count_round1 = await Promise.all(countPromises_Round1);
                const count_round2 = await Promise.all(countPromises_Round2);

                return res.json({ labels: years.map(String), value_round1: count_round1, value_round2: count_round2 });
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

    

