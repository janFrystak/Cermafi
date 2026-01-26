import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { UchazecVolba } from "./Uchazec_volba-model";


@Entity({name: "obor"})
export class Obor {
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    kod_kkov!:string

    @Column()
    nazev!:string

    @Column()
    zkracenyNazev!:string

    @OneToMany(()=>UchazecVolba, kod=>kod.obor)
    volba!: UchazecVolba
}