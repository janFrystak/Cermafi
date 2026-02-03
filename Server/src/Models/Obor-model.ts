import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { UchazecVolba } from "./Uchazec_volba-model";


@Entity({name: "obor"})
export class Obor {
    @PrimaryGeneratedColumn()
    id!:number

    @Column({name:'kod'})
    kod!:string

    @Column()
    nazev!:string

    @Column()
    zkracenyNazev!:string

    @OneToMany(()=>UchazecVolba, volba=>volba.obor_join)
    volba_join!: UchazecVolba
}