import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Uchazec } from '../Models/Uchazec-model';

export const uchazecRouter = Router();

const uchazecRepository = AppDataSource.getRepository(Uchazec);

// GET /uchazec/single/:id
uchazecRouter.get('/single/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const uchazec = await uchazecRepository.findOne({
            where: { id },
            relations: {
                volba_join: {
                    obor_join: true,
                    neprijeti_join: true,
                    skola_join: true
                }
            },
            order: {
                volba_join: {
                    priorita: 'ASC'
                }
            }
        });
        if (!uchazec) {
            return res.status(404).json({ message: 'Uchazec not found' });
        }
        res.json(uchazec);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /uchazec/count/:year
uchazecRouter.get('/count/:year', async (req: Request, res: Response) => {
    const year = parseInt(req.params.year);
    try {
        const [total_round1, total_round2] = await Promise.all([
            uchazecRepository.count({ where: { rok: year, kolo: 1 } }),
            uchazecRepository.count({ where: { rok: year, kolo: 2 } })
        ]);
        return res.json({
            labels: ['Počet uchazečů'],
            value_round1: [total_round1],
            value_round2: [total_round2]
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /uchazec/years?start=X&end=Y
uchazecRouter.get('/years', async (req: Request, res: Response) => {
    const start = parseInt(req.query.start?.toString() || '');
    const end = parseInt(req.query.end?.toString() || '');
    const maxYearRange = 20;

    if (isNaN(start) || isNaN(end) || start > end) {
        return res.status(400).json({ message: 'Invalid start/end years.' });
    }
    if (end - start + 1 > maxYearRange) {
        return res.status(400).json({ message: `Range too large; max ${maxYearRange} years allowed.` });
    }

    try {
        const rawData = await uchazecRepository
            .createQueryBuilder('u')
            .select('u.rok', 'year')
            .addSelect('u.kolo', 'round')
            .addSelect('COUNT(u.id)', 'count')
            .where('u.rok BETWEEN :start AND :end', { start, end })
            .groupBy('u.rok')
            .addGroupBy('u.kolo')
            .orderBy('u.rok', 'ASC')
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

// GET /uchazec/available-years
uchazecRouter.get('/available-years', async (req: Request, res: Response) => {
    try {
        const years = await uchazecRepository
            .createQueryBuilder('u')
            .select('DISTINCT u.rok', 'rok')
            .getRawMany();
        return res.json(years.map(y => y.rok));
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /uchazec (all with relations — use carefully)
uchazecRouter.get('/', async (req: Request, res: Response) => {
    try {
        const all = await uchazecRepository.find({
            relations: {
                volba_join: {
                    skola_join: true,
                    obor_join: true,
                    neprijeti_join: true
                }
            }
        });
        if (!all) {
            return res.status(404).json({ message: 'No objects found' });
        }
        res.json(all);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error.' });
    }
});