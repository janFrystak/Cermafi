import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Obor } from '../Models/Obor-model';

export const fieldRouter = Router();
const fieldRepository = AppDataSource.getRepository(Obor)

fieldRouter.get('/all', async (req: Request, res: Response) =>{
    try {
        const fields = await fieldRepository.find({
            select: ['kod', 'nazev', 'zkracenyNazev'],
            order: {id: 'ASC'}
        })
        res.json(fields.map(field =>({
            id: field.id,
            code: field.kod,
            name: field.nazev,
        })
    ))
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
})
/* this.searchItems.set(fields.map(f => ({
        id: f.id,
        h1: f.name,
        h2: f.code
      }))); */
fieldRouter.get('/detail/:id/meta', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await AppDataSource.query(`
            SELECT
                o.id,
                o.kod AS "code",
                o.nazev AS "name",
                o.zkraceny_nazev AS "shortName",
                COUNT(DISTINCT uv.redizo) AS "schoolCount",
                ROUND(AVG(CASE WHEN uv.prijat = 1 THEN 100 ELSE 0 END)
                    FILTER (WHERE uv.priorita = '1'), 2) AS "avgAcceptanceRate",
                ROUND(
                    (SELECT COUNT(*) FILTER (WHERE best = 2 OR best IS NULL) * 100.0 
                    / NULLIF(COUNT(*), 0)
                FROM (
                    SELECT MIN(prijat) as best
                    FROM public.uchazec_volba uv2
                    JOIN public.uchazec u2 ON uv2.uchazec_id = u2.id
                    WHERE uv2.obor_kod = o.kod AND u2.kolo = 1
                    GROUP BY uv2.uchazec_id
                ) sub
                ), 2) AS "failRate"
            FROM public.obor o
            JOIN public.uchazec_volba uv ON uv.obor_kod = o.kod
            JOIN public.uchazec u ON uv.uchazec_id = u.id
            WHERE o.id = $1 AND u.kolo = 1
            GROUP BY o.id, o.kod, o.nazev, o.zkraceny_nazev
        `, [id]);
        res.json(result[0]);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

fieldRouter.get('/detail/:id/trend', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await AppDataSource.query(`
            SELECT
                u.rok AS "year",
                COUNT(*) FILTER (WHERE u.kolo = 1) AS "round1",
                COUNT(*) FILTER (WHERE u.kolo = 2) AS "round2"
            FROM public.uchazec_volba uv
            JOIN public.obor o ON uv.obor_kod = o.kod
            JOIN public.uchazec u ON uv.uchazec_id = u.id
            WHERE o.id = $1
            GROUP BY u.rok
            ORDER BY u.rok ASC
        `, [id]);
        res.json(result);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

fieldRouter.get('/detail/:id/priority-split', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await AppDataSource.query(`
            SELECT
                ROUND(COUNT(*) FILTER (WHERE uv.priorita = '1') * 100.0
                    / NULLIF(COUNT(*), 0), 1) AS "p1",
                ROUND(COUNT(*) FILTER (WHERE uv.priorita = '2') * 100.0
                    / NULLIF(COUNT(*), 0), 1) AS "p2",
                ROUND(COUNT(*) FILTER (WHERE uv.priorita = '3') * 100.0
                    / NULLIF(COUNT(*), 0), 1) AS "p3"
            FROM public.uchazec_volba uv
            JOIN public.obor o ON uv.obor_kod = o.kod
            JOIN public.uchazec u ON uv.uchazec_id = u.id
            WHERE o.id = $1 AND u.kolo = 1
        `, [id]);
        res.json(result[0]);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

fieldRouter.get('/detail/:id/by-region', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await AppDataSource.query(`
            SELECT
                k.nazev AS "name",
                COUNT(*) AS "count"
            FROM public.uchazec_volba uv
            JOIN public.obor o   ON uv.obor_kod = o.kod
            JOIN public.uchazec u ON uv.uchazec_id = u.id
            JOIN public.skola s  ON uv.redizo = s.red_izo
            JOIN public.kraj k   ON s.kraj_id = k.id
            WHERE o.id = $1 AND uv.priorita = '1' AND u.kolo = 1
            GROUP BY k.id, k.nazev
            ORDER BY count DESC
        `, [id]);
        res.json(result);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

fieldRouter.get('/detail/:id/schools', async (req, res) => {
  const { id } = req.params;
  const limit = parseInt(req.query['limit'] as string) || 50;
  const offset = parseInt(req.query['offset'] as string) || 0;
  const kraj = req.query['kraj'] as string | undefined;

  const result = await AppDataSource.query(`
    SELECT
        s.id,
        s.zkraceny_nazev AS "shortName",
        s.misto AS "place",
        k.nazev AS "kraj",
        COUNT(*) FILTER (WHERE uv.priorita = '1') AS "appCount",
        ROUND(AVG(CASE WHEN uv.prijat = 1 THEN 100 ELSE 0 END)
            FILTER (WHERE uv.priorita = '1'), 1) AS "acceptanceRate"
    FROM public.uchazec_volba uv
    JOIN public.obor o   ON uv.obor_kod = o.kod
    JOIN public.uchazec u ON uv.uchazec_id = u.id
    JOIN public.skola s  ON uv.redizo = s.red_izo
    JOIN public.kraj k   ON s.kraj_id = k.id
    WHERE o.id = $1
      AND u.kolo = 1
      ${kraj ? `AND k.nazev = $4` : ''}
    GROUP BY s.id, s.zkraceny_nazev, s.misto, k.nazev
    ORDER BY "appCount" DESC
    LIMIT $2 OFFSET $3
  `, kraj ? [id, limit, offset, kraj] : [id, limit, offset]);

  res.json(result);
});