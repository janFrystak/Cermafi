
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { UchazecVolba } from './Uchazec_volba-model';
import { Kraj } from './Kraj-model';
import { Zrizovatel } from './Zrizovatel-model';

@Entity({ name: 'skola' })
export class Skola {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id!: number;

  @Column({ type: 'text', nullable: true, name: 'red_izo' })
  red_izo!: string;

  @Column({ type: 'text', nullable: true, name: 'ico' })
  ico!: string;

  @Column({ type: 'text', nullable: true, name: 'zrizovatel' })
  zrizovatel!: string;

  @Column({ type: 'text', nullable: true, name: 'uzemi' })
  uzemi!: string;

  @Column({ type: 'bigint', nullable: true, name: 'kraj_id' })
  kraj_id!: number; 

  @Column({ type: 'text', nullable: true, name: 'okres' })
  okresObvod!: string;

  @Column({ type: 'text', nullable: true, name: 'orp' })
  orp!: string;

  @Column({ type: 'text', nullable: true, name: 'plny_nazev' })
  plnyNazev!: string;

  @Column({ type: 'text', nullable: true, name: 'zkraceny_nazev' })
  zkracenyNazev!: string;

  @Column({ type: 'text', nullable: true, name: 'ulice' })
  ulice!: string;

  @Column({ type: 'text', nullable: true, name: 'cislo_popisne' })
  cisloPopisne!: string;



  @Column({ type: 'text', nullable: true, name: 'cast_obce' })
  castObce!: string;

  @Column({ type: 'text', nullable: true, name: 'psc' })
  psc!: string;

  @Column({ type: 'text', nullable: true, name: 'ruian' })
  ruian!: string;

  @Column({ type: 'text', nullable: true, name: 'telefon' })
  telefon!: string;

  @Column({ type: 'text', nullable: true, name: 'fax' })
  fax!: string;

  @Column({ type: 'text', nullable: true, name: 'email_1' })
  email1!: string;

  @Column({ type: 'text', nullable: true, name: 'email_2' })
  email2!: string;

  @Column({ type: 'text', nullable: true, name: 'web' })
  www!: string;

  @Column({ type: 'text', nullable: true, name: 'reditel' })
  reditel!: string;

  @Column({ type: 'text', nullable: true, name: 'izo' })
  izo!: string;

  @Column({ type: 'text', nullable: true, name: 'druh' })
  druh!: string;

  @Column({ type: 'text', nullable: true, name: 'datum_zahajeni' })
  datumZahajeni!: string;

  @Column({ type: 'text', nullable: true, name: 'budova' })
  budova!: string;

  @Column({ type: 'text', nullable: true, name: 'kapacita' })
  kapacita!: string;


  @OneToMany(() => UchazecVolba, (volba) => volba.skolaJoin)
  volbaJoin!: UchazecVolba[];

  @ManyToOne(() => Kraj, (kraj) => kraj.skolaJoin)
  @JoinColumn({ name: 'kraj_id' }) 
  krajJoin!: Kraj;

  

}