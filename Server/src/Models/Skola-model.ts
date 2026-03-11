
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { UchazecVolba } from './Uchazec_volba-model';
import { Kraj } from './Kraj-model';

@Entity({ name: 'skola' })
export class Skola {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id!: number;

  @Column({ type: 'text', nullable: true, name: 'red_izo' })
  red_izo!: string;

  @Column({ type: 'text', nullable: true, name: 'ico' })
  ico!: string;

  @Column({ type: 'text', nullable: true, name: 'Zřizovatel' })
  zrizovatel!: string;

  @Column({ type: 'text', nullable: true, name: 'Území' })
  uzemi!: string;

  @Column({ type: 'bigint', nullable: true, name: 'kraj_id' })
  kraj_id!: number; 

  @Column({ type: 'text', nullable: true, name: 'Okres/Obvod' })
  okresObvod!: string;

  @Column({ type: 'text', nullable: true, name: 'Správní úřad' })
  spravniUrad!: string;

  @Column({ type: 'text', nullable: true, name: 'ORP' })
  orp!: string;

  @Column({ type: 'text', nullable: true, name: 'Název ORP' })
  nazevOrp!: string;

  @Column({ type: 'text', nullable: true, name: 'plny_nazev' })
  plnyNazev!: string;

  @Column({ type: 'text', nullable: true, name: 'Zkrácený název' })
  zkracenyNazev!: string;

  @Column({ type: 'text', nullable: true, name: 'Ulice' })
  ulice!: string;

  @Column({ type: 'text', nullable: true, name: 'Č. p.' })
  cisloPopisne!: string;

  @Column({ type: 'text', nullable: true, name: 'Č. or.' })
  cisloOrientacni!: string;

  @Column({ type: 'text', nullable: true, name: 'Část obce' })
  castObce!: string;

  @Column({ type: 'text', nullable: true, name: 'PSČ' })
  psc!: string;

  @Column({ type: 'text', nullable: true, name: 'misto' })
  misto!: string;

  @Column({ type: 'text', nullable: true, name: 'Telefon' })
  telefon!: string;

  @Column({ type: 'text', nullable: true, name: 'Fax' })
  fax!: string;

  @Column({ type: 'text', nullable: true, name: 'Email 1' })
  email1!: string;

  @Column({ type: 'text', nullable: true, name: 'Email 2' })
  email2!: string;

  @Column({ type: 'text', nullable: true, name: 'WWW' })
  www!: string;


  @Column({ type: 'text', nullable: true, name: 'Ředitel' })
  reditel!: string;

  @Column({ type: 'text', nullable: true, name: 'je OVM' })
  jeOvm!: string;

  @Column({ type: 'text', nullable: true, name: 'ZUJ' })
  zuj!: string;

  @Column({ type: 'text', nullable: true, name: 'Email zřizovatele' })
  emailZrizovatele!: string;

  @Column({ type: 'text', nullable: true, name: 'Právní forma ředitelství' })
  pravniFormaReditelstvi!: string;

  @Column({ type: 'text', nullable: true, name: 'Datum zápisu' })
  datumZapisu!: string;


  @OneToMany(() => UchazecVolba, (volba) => volba.skola_join)
  volba_join!: UchazecVolba[];

  @ManyToOne(() => Kraj, (kraj) => kraj.skola_join)
  @JoinColumn({ name: 'kraj_id' }) 
  kraj_join!: Kraj;

}