import "reflect-metadata";
import {Request, Response} from "express";
const express = require('express');
const helmet = require("helmet");
const app = express();
import { AppDataSource } from "../data-source";
import { Uchazec } from "../Models/Uchazec-model";


app.use(helmet());


AppDataSource.initialize()
    .then(() =>{
        const uchazecRepository = AppDataSource.getRepository(Uchazec);
        app.listen(8080, ()=>{
            console.log("Listening")
            
        });

        app.get("/:id", async(req:Request, res:Response)=>{
            const id = parseInt(req.params["id"]);
            const uchazec = await uchazecRepository.findOneBy({id});
       
            console.log(uchazec);
        });

        
    })
    .catch(error => {
        console.log(error);
    })

