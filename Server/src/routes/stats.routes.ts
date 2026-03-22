import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source';

export const statsRouter = Router();

// GET /stats/summary
statsRouter.get('/summary', async (req: Request, res: Response) => {
    try {
        const [uchazecCount, acceptanceRate] = await Promise.all([
            AppDataSource.query(`SELECT COUNT(*) as count FROM public.uchazec`),
            AppDataSource.query(`
                SELECT ROUND(AVG(CASE WHEN uv.prijat = 1 THEN 100 ELSE 0 END), 1) as rate
                FROM public.uchazec_volba uv
                JOIN public.uchazec u ON uv.uchazec_id = u.id
                WHERE u.rok = (SELECT MAX(rok) FROM public.uchazec)
                AND uv.priorita = '1'
                AND u.kolo = 1
            `)
        ]);

        res.json({
            uchazecCount: Number(uchazecCount[0].count),
            acceptanceRate: Number(acceptanceRate[0].rate)
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});