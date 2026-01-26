import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Uchazec } from './Uchazec-model';
import { Obor } from './Obor-model';

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

    @Column({ nullable: true })
    kkov!: string;

    @Column({ nullable: true })
    forma!: string;

    @Column({ nullable: true })
    zkraceno!: string;

    @Column({ nullable: true })
    prijat!: boolean;

    @Column({ type: 'int', nullable: true })
    duvod_neprijeti!: number; 

    // Definice vztahu zpět na uchazeče
    @ManyToOne(() => Uchazec, (uchazec) => uchazec.id, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'uchazec_id' })
    uchazec!:Uchazec;

    @ManyToOne(() => Obor, (obor) => obor.volba, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'obor' })
    obor!:Obor
}
