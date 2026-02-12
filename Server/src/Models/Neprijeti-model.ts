import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UchazecVolba } from "./Uchazec_volba-model";

@Entity({name: "neprijeti_duvod"})
export class Neprijeti{
    @PrimaryGeneratedColumn({
        name: "id",
        type:"bigint"
    })
    id!:number

    @Column({unique:true})
    duvod!:string

    @OneToMany(()=>UchazecVolba, volba=>volba.neprijeti_join)
    volba_join!:UchazecVolba[]
}