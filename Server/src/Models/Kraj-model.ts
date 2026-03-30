import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Skola } from './Skola-model'; 

@Entity('kraj')
export class Kraj {
  @PrimaryColumn()
  id!: number; 

  @Column({ type: 'varchar', name:"nazev"})
  namev!: string; 

  @Column({ type: 'varchar', name:"nazev_kratky"})
  short_name!: string; 


  @OneToMany(() => Skola, skola => skola.kraj_join)
  skola_join!: Skola[];
}