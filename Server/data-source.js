"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Uchazec_model_1 = require("./Models/Uchazec-model");
var dotenv = require("dotenv");
dotenv.config();
var cf = process.env;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: cf["HOST"],
    port: 5432,
    username: cf["DB_USER"],
    password: cf["DB_PSWD"],
    database: cf["DB_NAME"],
    synchronize: true,
    logging: false,
    entities: [Uchazec_model_1.Uchazec],
    migrations: [],
    subscribers: [],
});
