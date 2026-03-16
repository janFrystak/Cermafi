import "reflect-metadata";
import { DataSource } from "typeorm";
import { Uchazec } from "./Models/Uchazec-model";
import dotenv from 'dotenv';
import { UchazecVolba } from "./Models/Uchazec_volba-model";
import { Neprijeti } from "./Models/Neprijeti-model";
import { Obor } from "./Models/Obor-model";
import { Skola } from "./Models/Skola-model";
import { Kraj } from "./Models/Kraj-model";
import { Admin } from "./Models/Admin-model";


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
    logging: ["error", "schema", "warn"],
    entities: [Uchazec, UchazecVolba, Neprijeti, Obor, Skola, Kraj, Admin],
    migrations: [],
    subscribers: [],
})



