import "reflect-metadata";
import { DataSource } from "typeorm";
import { Uchazec } from "./Models/Uchazec-model";
import * as dotenv from 'dotenv';
dotenv.config()
const cf = process.env
console.log("from data-source.js, line 7: " + cf);
export const AppDataSource = new DataSource({
    type: "postgres",
    host: cf["HOST"],
    port: 5432,
    username: cf["DB_USER"],
    password: cf["DB_PSWD"],
    database: cf["DB_NAME"],
    synchronize: false,
    logging: false,
    entities: [Uchazec],
    migrations: [],
    subscribers: [],
})



