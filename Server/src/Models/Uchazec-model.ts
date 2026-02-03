import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import {UchazecVolba} from "./Uchazec_volba-model"

@Entity("uchazec")
export class Uchazec {
    @PrimaryGeneratedColumn({
        type: "bigint",
        name: "id"

    })
    id!: number

    @Column()
    rok!: number;

    @Column()
    kolo!: number;

    @Column()
    m_procentni_skor!: number;

    @Column()
    c_procentni_skor!: number;  

    //backwards lookup
    @OneToMany(()=> UchazecVolba, (volba) => volba.uchazec_join)
    volba_join!: UchazecVolba[]
}