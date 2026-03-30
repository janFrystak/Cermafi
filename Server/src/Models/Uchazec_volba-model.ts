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

    
    @ManyToOne(() => Uchazec, (uchazec) => uchazec.volbaJoin, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'uchazec_id'})
    uchazecJoin!:Uchazec;

    @ManyToOne(() => Obor, (obor) => obor.volbaJoin)
    @JoinColumn({ name: 'obor_kod', referencedColumnName: 'kod' })
    oborJoin!:Obor

    @ManyToOne(()=> Neprijeti,(neprijeti) => neprijeti.volbaJoin)
    @JoinColumn({name: 'duvod_neprijeti_id'})
    neprijetiJoin!:Neprijeti

    @ManyToOne(()=> Skola, (skola) => skola.volbaJoin)
    @JoinColumn({name: 'redizo', referencedColumnName:'red_izo'})
    skolaJoin!:Skola
    
    
}
