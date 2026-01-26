import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Uchazec {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("bigint")
    rok!: string;

    @Column("bigint")
    kolo!: string;
    
    @Column()
    ss1_redizo!: number;
    @Column()
    ss2_redizo!: number;
    @Column()
    ss3_redizo!: number;
    @Column()
    ss4_redizo!: number;
    @Column()
    ss5_redizo!: number;

    @Column()
    ss1_zrizovatel!: number;
    @Column()
    ss2_zrizovatel!: number;
    @Column()
    ss3_zrizovatel!: number;
    @Column()
    ss4_zrizovatel!: number;
    @Column()
    ss5_zrizovatel!: number;

    @Column("text")
    ss1_kkov!: string;
    @Column("text")
    ss2_kkov!: string;
    @Column("text")
    ss3_kkov!: string;
    @Column("text")
    ss4_kkov!: string;
    @Column("text")
    ss5_kkov!: string;

    @Column("text")
    ss1_forma!: string;
    @Column("text")
    ss2_forma!: string;
    @Column("text")
    ss3_forma!: string;
    @Column("text")
    ss4_forma!: string;
    @Column("text")
    ss5_forma!: string;

    @Column()
    ss1_zkraceno!: number;
    @Column()
    ss2_zkraceno!: number;
    @Column()
    ss3_zkraceno!: number;
    @Column()
    ss4_zkraceno!: number;
    @Column()
    ss5_zkraceno!: number;

    @Column()
    ss1_prijat!: number;
    @Column()
    ss2_prijat!: number;
    @Column()
    ss3_prijat!: number;
    @Column()
    ss4_prijat!: number;
    @Column()
    ss5_prijat!: number;

    @Column("text")
    ss1_duvod_neprijeti!: string;
    @Column("text")
    ss2_duvod_neprijeti!: string;
    @Column("text")
    ss3_duvod_neprijeti!: string;
    @Column("text")
    ss4_duvod_neprijeti!: string;
    @Column("text")
    ss5_duvod_neprijeti!: string;

    @Column()
    c_m_procentni_skor!: number;
    @Column()
    c_procentni_skor!: number;
    @Column()
    m_procentni_skor!: number;
}
