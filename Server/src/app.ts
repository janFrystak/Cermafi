import 'reflect-metadata';
import {Request, Response} from "express";
import express from "express";
import helmet from 'helmet';
import cors from 'cors';
import { AppDataSource } from "./data-source";
import { Uchazec } from "./Models/Uchazec-model";
import { UchazecVolba } from './Models/Uchazec_volba-model';
import { Obor } from './Models/Obor-model';

const app = express();

app.use(helmet());
app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        const volbaRepository = AppDataSource.getRepository(UchazecVolba);
        const uchazecRepository = AppDataSource.getRepository(Uchazec)
        const fieldRepository = AppDataSource.getRepository(Obor)
        

       
        app.use(cors());
        app.get("/region/summary/:id/:year", async(req: Request, res: Response) => {
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
                            k.region_nazev as "regionName", 
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
                        GROUP BY k.id, k.region_nazev, k.region_nazev_kratky  
                    `, [regionId, year]),

                    AppDataSource.query(`
                        SELECT 
                            o.nazev as name, 
                            COUNT(*) as count, 
                            o.kod as code
                        FROM public.uchazec_volba uv
                        JOIN public.uchazec u 
                            ON uv.uchazec_id = u.id
                        JOIN public.obor o 
                            ON uv.obor_kod = o.kod
                        JOIN public.skola s 
                            ON uv.redizo = s.red_izo
                        WHERE 
                            s.kraj_id = $1 
                            AND 
                            u.rok = $2 
                            AND 
                            uv.priorita = '1'
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
                        JOIN public.uchazec u 
                            ON uv.uchazec_id = u.id
                        JOIN public.skola s 
                            ON uv.redizo = s.red_izo
                        WHERE 
                            s.kraj_id = $1 
                            AND 
                            uv.priorita = '1'
                            AND
                            u.rok = $2
                        GROUP BY full_name, short_name, s.red_izo, place, s.id
                        ORDER BY count DESC
                        LIMIT 5                        
                    `, [regionId, year])
                ]);
                

            res.json({
                ...statsRes[0],
                topFields: topFields,
                topSchools: topSchools

            })
        } catch(e){
            res.status(500).json({message: "Internal server error"})
        }
        })

        app.get("/region/summary/:id", async (req: Request, res: Response) => {
            const regionId = parseInt(req.params.id);

            try {
                const stats = await AppDataSource.query(`
                WITH temp_region AS (
                    SELECT uv.*, u.rok , s.kraj_id
                    FROM public.uchazec_volba uv
                    JOIN public.uchazec u ON uv.uchazec_id = u.id
                    JOIN public.skola s ON uv.redizo = s.red_izo
                    WHERE s.kraj_id = $1 AND u.kolo = 1 
                )
                SELECT 
                    $1 as "id",
                    k.region_nazev as "regionName", 
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
                GROUP BY k.id, k.region_nazev, k.region_nazev_kratky  
            `, [regionId]);

                
                const topFields = await AppDataSource.query(`
                    SELECT 
                        o.nazev as name, 
                        COUNT(*) as count, 
                        o.kod as code
                    FROM public.uchazec_volba uv
                    JOIN public.obor o 
                        ON uv.obor_kod = o.kod
                    JOIN public.skola s 
                        ON uv.redizo = s.red_izo
                    WHERE 
                        s.kraj_id = $1 
                        AND 
                        uv.priorita = '1'
                    GROUP BY o.nazev, o.kod
                    ORDER BY count DESC
                    LIMIT 5
                `, [regionId]);

                const topSchools = await AppDataSource.query(`
                    SELECT 
                        s.zkraceny_nazev as short_name,
                        s.plny_nazev as full_name,
                        COUNT(*) as count,
                        s.red_izo as redizo,
                        s.misto as place,
                        s.id as id
                    FROM public.uchazec_volba uv
                    JOIN public.uchazec u 
                        ON uv.uchazec_id = u.id
                    JOIN public.skola s 
                        ON uv.redizo = s.red_izo
                    WHERE 
                        s.kraj_id = $1 
                        AND 
                        uv.priorita = '1'
                    GROUP BY short_name,full_name, s.red_izo, place, s.id
                    ORDER BY count DESC
                    LIMIT 5
                `, [regionId]);

                res.json({
                    ...stats[0],
                    topFields: topFields,
                    topSchools: topSchools
                });

            } catch (err) {
                console.error(err);
                res.status(500).json({ message: "Internal server error" });
            }
        });    
                
        app.get("/uchazec-single/:id", async (req: Request, res: Response) => {
            const id = parseInt(req.params.id);
            console.log("id: ",id)
            try {
                const uchazec = await uchazecRepository.findOne({
                    where: {id},
                    
                    relations:{
                        volba_join:{
                            obor_join:true,
                            neprijeti_join:true,
                            skola_join:true
                        }
                    },
                order: {
                    volba_join:{
                        priorita:"ASC"
                    }
                }
                
            });
                if (!uchazec) {
                    return res.status(404).json({ message: "Uchazec not found" });
                }
                res.json(uchazec);
            } catch (err) {
                console.error(err);
                res.status(500).json({ message: "Internal server error" });
            }
        });
        app.get("/uchazec-count/:year", async (req: Request, res: Response) => {
            const year = parseInt(req.params.year);
            console.log("year: ", year, " -- kolo: ");
            
            try {
                const total_round1 = await uchazecRepository.count({
                    where: { rok: year, kolo: 1 }
                });
                const total_round2 = await uchazecRepository.count({
                    where: {rok: year, kolo: 2}
                })

                return res.json({ 
                    labels: ["Počet uchazečů"], 
                    value_round1: [total_round1], 
                    value_round2: [total_round2] 
                });
            } catch (err) {
                console.error(err);
                return res.status(500).json({ message: "Internal server error" });
            }
        });

        
        app.get('/years', async (req: Request, res: Response)=>{
            try {
                const years = await uchazecRepository
                .createQueryBuilder("u")
                .select("DISTINCT u.rok", "rok")
                .getRawMany();
                
                const list = years.map(y => y.rok);
                console.log ("YEARS HERE: ", list)
                return res.json(list);
                
            } catch (err) {
                console.error(err);
                return res.status(500).json({ message: "Internal server error" });
            }
        })
        app.get('/uchazec/years', async (req: Request, res: Response) => {
            const start = parseInt(req.query.start?.toString() || "" );
            const end = parseInt(req.query.end?.toString() || "");
            const maxYearRange = 20; 

           
            if (isNaN(start) || isNaN(end) || start > end) {
                return res.status(400).json({ message: 'Invalid start/end years.'});
            }

            if (end - start + 1 > maxYearRange) {
                return res.status(400).json({ message: `Range too large; max ${maxYearRange} years allowed.`});
            }

            try {
               const rawData = await uchazecRepository
                .createQueryBuilder("u")
                .select("u.rok", "year")
                .addSelect("u.kolo", "round")
                .addSelect("COUNT(u.id)", "count")
                .where("u.rok BETWEEN :start AND :end", { start, end })
                .groupBy("u.rok")
                .addGroupBy("u.kolo")
                .orderBy("u.rok", "ASC")
                .getRawMany();

                
            const yearsRange = Array.from({ length: end - start + 1 }, (_, i) => start + i);
            const value_round1 = yearsRange.map(y => {
                const entry = rawData.find(d => Number(d.year) === y && Number(d.round) === 1);
                return entry ? Number(entry.count) : 0;
            });
            const value_round2 = yearsRange.map(y => {
                const entry = rawData.find(d => Number(d.year) === y && Number(d.round) === 2);
                return entry ? Number(entry.count) : 0;
            });

            return res.json({ 
                labels: yearsRange.map(String), 
                value_round1, 
                value_round2 
            });
            } catch (err) {
                console.error(err);
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
        app.get("/fields", async(req: Request, res: Response)=>{
            try {
                const all = await fieldRepository
                .createQueryBuilder("u")
                .addSelect("u.id", "id")
                .select("u.kod", "code")
                .addSelect("u.nazev", "name")
                .getRawMany();
                
                if (!all || all.length === 0) {
                    return res.status(404).json({ message: "No fields found." });
                }
                return res.json(all)
            }
            catch(err){
                console.error(err);
                return res.status(500).json({message: 'Internal server error'})
            }
            
        })
        app.get("/uchazec", async (req: Request, res: Response) => {
            try {
                const all = await uchazecRepository.find(
                    {
                        relations:{
                            volba_join:{
                                skola_join: true,
                                obor_join: true,
                                neprijeti_join:true
                            }
                        }
                    }
                );
                if (!all){
                    return res.status(404).json({message: "No objects found"})
                }
                res.json(all); 
            } catch (err) {
                console.error(err);
                res.status(500).json({message: "Internal server error."});
            }}
        );

        // Then start server
        app.listen(8080, () => {
            console.log("Listening on http://localhost:8080");
        });
    })
    .catch((err) => {
        console.error("DataSource initialization error:", err);
    });

    

