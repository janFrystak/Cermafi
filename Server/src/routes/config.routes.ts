import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { authMiddleware } from './admin.routes';

export const configRouter = Router();

configRouter.get('/countdown', async (req: Request, res: Response) => {
    try {
        const result = await AppDataSource.query(
            `SELECT target_date AS "targetDate" FROM public.countdown_config WHERE id = 1`
        );
        res.json({ date: result[0]?.targetDate ?? null });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

configRouter.post('/countdown', authMiddleware, async (req: Request, res: Response) => {
    const { date } = req.body;
    try {
        await AppDataSource.query(
            `UPDATE public.countdown_config SET target_date = $1 WHERE id = 1`,
            [date ?? null]
        );
        res.json({ message: 'OK' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
});