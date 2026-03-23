import 'reflect-metadata';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { AppDataSource } from './data-source';
import { fieldRouter } from './routes/field.routes';
import { adminRouter } from './routes/admin.routes';
import { regionRouter } from './routes/region.routes';
import { uchazecRouter } from './routes/uchazec.routes';
import { statsRouter } from './routes/stats.routes';
import { schoolRouter } from './routes/school.routes';
import path from 'path';

const port = Number(process.env.PORT)
const domain = process.env.DOMAIN
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

app.use(cookieParser());
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.json());

// Mount routers
app.use('/field', fieldRouter);
app.use('/admin', adminRouter);
app.use('/region', regionRouter);
app.use('/uchazec', uchazecRouter);
app.use('/stats', statsRouter);
app.use('/school', schoolRouter);

AppDataSource.initialize()
    .then(() => {
        app.listen(port, () => {
            console.log('Listening on: ', domain);
        });
    })
    .catch((err) => {
        console.error('DataSource initialization error:', err);
    });