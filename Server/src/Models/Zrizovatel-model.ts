import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Skola } from "./Skola-model";


@Entity({name: "zrizovatel"})
export class Zrizovatel {
    @PrimaryGeneratedColumn()
    id!:number

    @Column({name:'kod'})
    kod!:string

    @Column()
    nazev!:string

    @Column({name: 'zkraceny_zazev'})
    nazevZkraceny!:string

    @Column({name: 'specifikace'})
    specifikace!:string

    @Column({name: 'platnost_od'})
    platnostOd!:string

    @Column({name: 'platnost_do'})
    platnostDo!:string

    @Column({name: 'poznamka'})
    poznamka!:string

    @OneToMany(() => Skola, skola => skola.kraj_join)
    skola_join!: Skola[];
    
}