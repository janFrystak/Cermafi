import "reflect-metadata";
import { DataSource } from "typeorm";
import { Uchazec } from "./Models/Uchazec-model";
import dotenv from 'dotenv';
import { UchazecVolba } from "./Models/Uchazec_volba-model";
import { Neprijeti } from "./Models/Neprijeti-model";
import { Obor } from "./Models/Obor-model";
import { Redizo } from "./Models/Skola-model";

dotenv.config({path: '../.env'})

console.log("logging in as user: " + String(process.env.DB_USER));

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: String(process.env.DB_USER),
    password: String(process.env.DB_PSWD),
    database: process.env.DB_NAME,
    synchronize: false,
    logging: ["query", "error", "schema", "warn"],
    entities: [Uchazec, UchazecVolba, Neprijeti, Obor, Redizo],
    migrations: [],
    subscribers: [],
})



