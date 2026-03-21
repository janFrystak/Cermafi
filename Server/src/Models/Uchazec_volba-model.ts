import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Uchazec } from './Uchazec-model';
import { Obor } from './Obor-model';
import { Neprijeti } from './Neprijeti-model';
import { Skola } from './Skola-model';

@Entity('uchazec_volba')
export class UchazecVolba {
    @PrimaryColumn()
    uchazec_id!: number;

    @PrimaryColumn()
    priorita!: number; 

    @Column({ nullable: true })
    redizo!: string;

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

    
    @ManyToOne(() => Uchazec, (uchazec) => uchazec.volba_join, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'uchazec_id'})
    uchazec_join!:Uchazec;

    @ManyToOne(() => Obor, (obor) => obor.volba_join)
    @JoinColumn({ name: 'obor_kod', referencedColumnName: 'kod' })
    obor_join!:Obor

    @ManyToOne(()=> Neprijeti,(neprijeti) => neprijeti.volba_join)
    @JoinColumn({name: 'duvod_neprijeti_id'})
    neprijeti_join!:Neprijeti

    @ManyToOne(()=> Skola, (skola) => skola.volba_join)
    @JoinColumn({name: 'redizo', referencedColumnName:'red_izo'})
    skola_join!:Skola
    
    
}
