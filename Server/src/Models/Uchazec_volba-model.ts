import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Uchazec } from './Uchazec-model';
import { Obor } from './Obor-model';
import { Neprijeti } from './Neprijeti-model';

@Entity('uchazec_volba_t')
export class UchazecVolba {
    @PrimaryColumn()
    uchazec_id!: number;

    @PrimaryColumn()
    poradi!: number; 

    @Column({ nullable: true })
    redizo!: string;

    @Column({ nullable: true })
    zrizovatel!: string;

    @Column({ nullable: true})
    obor_kod!: string;

    @Column({ nullable: true })
    forma!: string;

    @Column({ nullable: true })
    zkraceno!: string;

    @Column({ nullable: true })
    prijat!: boolean;

    @Column({ type: 'int', nullable: true, name: 'duvod_neprijeti_id'})
    duvod_neprijeti!: number; 

    
    @ManyToOne(() => Uchazec, (uchazec) => uchazec.volba, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'uchazec_id'})
    uchazec!:Uchazec;

    @ManyToOne(() => Obor, (obor) => obor.volba)
    @JoinColumn({ name: 'obor_kod', referencedColumnName: 'kod_kkov' })
    obor!:Obor

    @ManyToOne(()=> Neprijeti,(neprijeti) => neprijeti.volba)
    @JoinColumn({name: 'duvod_neprijeti_id'})
    neprijeti!:Neprijeti
    
}
