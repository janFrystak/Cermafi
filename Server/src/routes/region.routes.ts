import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source';

export const regionRouter = Router();

// GET /region/summary/:id/:year
regionRouter.get('/summary/:id/:year', async (req: Request, res: Response) => {
    const regionId = req.params.id;
    const year = parseInt(req.params.year);

    try {
        const [statsRes, topFields, topSchools] = await Promise.all([
            AppDataSource.query(`
                WITH temp_region AS (
                    SELECT uv.*, u.rok, s.kraj_id
                    FROM public.uchazec_volba uv
                    JOIN public.uchazec u ON uv.uchazec_id = u.id
                    JOIN public.skola s ON uv.redizo = s.red_izo
                    WHERE s.kraj_id = $1 AND u.rok = $2 AND u.kolo = 1 
                )
                SELECT 
                    $1 as "id",
                    k.nazev as "regionName", 
                    COUNT(DISTINCT tr.uchazec_id) as "totalApps",
                    ROUND(AVG(CASE WHEN tr.prijat = 1 THEN 100 ELSE 0 END) 
                        FILTER (WHERE tr.priorita = '1'), 2) as "firstChoiceSuccessRate",
                    ROUND(AVG(CASE WHEN tr.prijat = 1 THEN 100 ELSE 0 END) 
                        FILTER (WHERE tr.priorita = '2'), 2) as "secondChoiceSuccessRate",
                    (SELECT ROUND(COUNT(*) FILTER (WHERE best_result > 1 OR best_result IS NULL) * 100.0 / NULLIF(COUNT(*), 0), 2)
                    FROM (
                        SELECT MIN(prijat) as best_result
                        FROM temp_region 
                        GROUP BY uchazec_id
                    ) sub
                    ) as "failRate"
                FROM public.kraj k
                LEFT JOIN temp_region tr ON k.id = tr.kraj_id
                WHERE k.id = $1
                GROUP BY k.id, k.nazev, k.nazev_kratky  
            `, [regionId, year]),

            AppDataSource.query(`
                SELECT 
                    o.nazev as name, 
                    COUNT(*) as count, 
                    o.kod as code
                FROM public.uchazec_volba uv
                JOIN public.uchazec u ON uv.uchazec_id = u.id
                JOIN public.obor o ON uv.obor_kod = o.kod
                JOIN public.skola s ON uv.redizo = s.red_izo
                WHERE 
                    s.kraj_id = $1 AND u.rok = $2 AND uv.priorita = '1'
                GROUP BY o.nazev, o.kod
                ORDER BY count DESC
                LIMIT 5
            `, [regionId, year]),

            AppDataSource.query(`
                SELECT 
                    s.plny_nazev as full_name, 
                    s.zkraceny_nazev as short_name,
                    COUNT(*) as count,
                    s.red_izo as redizo,
                    s.misto as place,
                    s.id as id
                FROM public.uchazec_volba uv
                JOIN public.uchazec u ON uv.uchazec_id = u.id
                JOIN public.skola s ON uv.redizo = s.red_izo
                WHERE 
                    s.kraj_id = $1 AND uv.priorita = '1' AND u.rok = $2
                GROUP BY full_name, short_name, s.red_izo, place, s.id
                ORDER BY count DESC
                LIMIT 5                        
            `, [regionId, year])
        ]);

        res.json({
            ...statsRes[0],
            topFields,
            topSchools
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /region/summary/:id
regionRouter.get('/summary/:id', async (req: Request, res: Response) => {
    const regionId = parseInt(req.params.id);

    try {
        const [stats, topFields, topSchools] = await Promise.all([
            AppDataSource.query(`
                WITH temp_region AS (
                    SELECT uv.*, u.rok, s.kraj_id
                    FROM public.uchazec_volba uv
                    JOIN public.uchazec u ON uv.uchazec_id = u.id
                    JOIN public.skola s ON uv.redizo = s.red_izo
                    WHERE s.kraj_id = $1 AND u.kolo = 1 
                )
                SELECT 
                    $1 as "id",
                    k.nazev as "regionName", 
                    COUNT(DISTINCT tr.uchazec_id) as "totalApps",
                    ROUND(AVG(CASE WHEN tr.prijat = 1 THEN 100 ELSE 0 END) 
                        FILTER (WHERE tr.priorita = '1'), 2) as "firstChoiceSuccessRate",
                    ROUND(AVG(CASE WHEN tr.prijat = 1 THEN 100 ELSE 0 END) 
                        FILTER (WHERE tr.priorita = '2'), 2) as "secondChoiceSuccessRate",
                    (SELECT ROUND(COUNT(*) FILTER (WHERE best_result > 1 OR best_result IS NULL) * 100.0 / NULLIF(COUNT(*), 0), 2)
                    FROM (
                        SELECT MIN(prijat) as best_result
                        FROM temp_region 
                        GROUP BY uchazec_id
                    ) sub
                    ) as "failRate"
                FROM public.kraj k
                LEFT JOIN temp_region tr ON k.id = tr.kraj_id
                WHERE k.id = $1
                GROUP BY k.id, k.nazev, k.nazev_kratky  
            `, [regionId]),

            AppDataSource.query(`
                SELECT 
                    o.nazev as name, 
                    COUNT(*) as count, 
                    o.kod as code
                FROM public.uchazec_volba uv
                JOIN public.obor o ON uv.obor_kod = o.kod
                JOIN public.skola s ON uv.redizo = s.red_izo
                WHERE s.kraj_id = $1 AND uv.priorita = '1'
                GROUP BY o.nazev, o.kod
                ORDER BY count DESC
                LIMIT 5
            `, [regionId]),

            AppDataSource.query(`
                SELECT 
                    s.zkraceny_nazev as short_name,
                    s.plny_nazev as full_name,
                    COUNT(*) as count,
                    s.red_izo as redizo,
                    s.misto as place,
                    s.id as id
                FROM public.uchazec_volba uv
                JOIN public.uchazec u ON uv.uchazec_id = u.id
                JOIN public.skola s ON uv.redizo = s.red_izo
                WHERE s.kraj_id = $1 AND uv.priorita = '1'
                GROUP BY short_name, full_name, s.red_izo, place, s.id
                ORDER BY count DESC
                LIMIT 5
            `, [regionId])
        ]);

        res.json({
            ...stats[0],
            topFields,
            topSchools
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});