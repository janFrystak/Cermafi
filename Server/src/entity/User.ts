import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    rok: string;

    @Column()
    kolo: string;

    @Column()
    ss1_redizo: number;

    @Column()
    ss2_redizo: number;

    @Column()
    ss3_redizo: number;

    @Column()
    ss4_redizo: number;

    @Column()
    ss5_redizo: number;

    @Column()
    ss1_zrizovatel: number;

    @Column()
    ss2_zrizovatel: number;

    @Column()
    ss3_zrizovatel: number;

    @Column()
    ss4_zrizovatel: number;

    @Column()
    ss5_zrizovatel: number;

    @Column()
    ss1_kkov: string;

    @Column()
    ss2_kkov: string;

    @Column()
    ss3_kkov: string;

    @Column()
    ss4_kkov: string;

    @Column()
    ss5_kkov: string;

    @Column()
    ss1_forma: string;

    @Column()
    ss2_forma: string;

    @Column()
    ss3_forma: string;

    @Column()
    ss4_forma: string;

    @Column()
    ss5_forma: string;

    @Column()
    ss1_zkraceno: number;

    @Column()
    ss2_zkraceno: number;

    @Column()
    ss3_zkraceno: number;

    @Column()
    ss4_zkraceno: number;

    @Column()
    ss5_zkraceno: number;

    @Column()
    ss1_prijat: number;

    @Column()
    ss2_prijat: number;

    @Column()
    ss3_prijat: number;

    @Column()
    ss4_prijat: number;

    @Column()
    ss5_prijat: number;

    @Column()
    ss1_duvod_neprijeti: string;

    @Column()
    ss2_duvod_neprijeti: string;

    @Column()
    ss3_duvod_neprijeti: string;

    @Column()
    ss4_duvod_neprijeti: string;

    @Column()
    ss5_duvod_neprijeti: string;

    @Column()
    c_m_procentni_skor: number;

    @Column()
    c_procentni_skor: number;

    @Column()
    m_procentni_skor: number;

}

rok
bigint
kolo
bigint
ss1_redizo
double precision
ss2_redizo
double precision
ss3_redizo
double precision
ss4_redizo
double precision
ss5_redizo
double precision
ss1_zrizovatel
double precision
ss2_zrizovatel
double precision
ss3_zrizovatel
double precision
ss4_zrizovatel
double precision
ss5_zrizovatel
double precision
ss1_kkov
text
ss2_kkov
text
ss3_kkov
text
ss4_kkov
text
ss5_kkov
text
ss1_forma
text
ss2_forma
text
ss3_forma
text
ss4_forma
text
ss5_forma
text
ss1_zkraceno
double precision
ss2_zkraceno
double precision
ss3_zkraceno
double precision
ss4_zkraceno
double precision
ss5_zkraceno
double precision
ss1_prijat
double precision
ss2_prijat
double precision
ss3_prijat
double precision
ss4_prijat
double precision
ss5_prijat
double precision
ss1_duvod_neprijeti
text
ss2_duvod_neprijeti
text
ss3_duvod_neprijeti
text
ss4_duvod_neprijeti
text
ss5_duvod_neprijeti
text
c_m_procentni_skor
double precision
c_procentni_skor
double precision
m_procentni_skor
double precision
