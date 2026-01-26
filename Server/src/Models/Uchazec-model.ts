import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import {UchazecVolba} from "./Uchazec_volba-model"

@Entity("uchazec_t")
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

    @OneToMany(()=> UchazecVolba, (volba) => volba.obor)
    volba!: UchazecVolba
}