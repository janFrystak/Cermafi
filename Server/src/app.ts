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
    .then(() =>{
        const uchazecRepository = AppDataSource.getRepository(Uchazec);

        app.listen(8080, ()=>{
            console.log("Listening on localhost:8080")
            
        });

        app.get("/api/uchazec-single/:id", async(req:Request, res:Response)=>{
            const id = parseInt(req.params["id"]);
            try {
                const uchazec = await uchazecRepository.findOneBy({id});
                if (!uchazec) {
                    return res.status(404).json({message: "Uchazec not found"});
                }
                res.json(uchazec);
                console.log(uchazec);
            } catch (err) {
                console.error(err);
                res.status(500).json({message: "Internal server error"});
            }
            
        });

        
    })
    

