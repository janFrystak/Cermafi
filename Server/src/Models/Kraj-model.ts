import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Skola } from './Skola-model'; // Předpokládaný název entity pro školy

@Entity('kraj')
export class Kraj {
  @PrimaryColumn()
  id!: number; 

  @Column({ type: 'varchar', length: 100 })
  name!: string; 

  @Column({ type: 'varchar', length: 10, unique: true })
  name_short!: string; 


  @OneToMany(() => Skola, skola => skola.kraj_join)
  skola_join!: Skola[];
}