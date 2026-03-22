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

  
    
}