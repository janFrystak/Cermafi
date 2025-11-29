import "reflect-metadata";
import { DataSource } from "typeorm";
import { Uchazec } from "./Models/Uchazec-model";
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: '../.env'})

console.log("from data-source.js, line 7: " + String(process.env.DB_USER));

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: String(process.env.DB_USER),
    password: String(process.env.DB_PSWD),
    database: process.env.DB_NAME,
    synchronize: false,
    logging: false,
    entities: [Uchazec],
    migrations: [],
    subscribers: [],
})



