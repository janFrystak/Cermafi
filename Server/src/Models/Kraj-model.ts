import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Skola } from './Skola-model'; 

@Entity('kraj')
export class Kraj {
  @PrimaryColumn()
  id!: number; 

  @Column({ type: 'varchar', name:"nazev"})
  name!: string; 

  @Column({ type: 'varchar', name:"nazev_kratky"})
  shortName!: string; 

  @OneToMany(() => Skola, skola => skola.krajJoin)
  skolaJoin!: Skola[];
}