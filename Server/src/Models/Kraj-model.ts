import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Skola } from './Skola-model'; // Předpokládaný název entity pro školy

@Entity('regions')
export class Kraj {
  @PrimaryColumn()
  id!: number; 

  @Column({ type: 'varchar', length: 100 })
  region_nazev!: string; 

  @Column({ type: 'varchar', length: 10, unique: true })
  region_nazev_kratky!: string; 

  // Definice vztahu 1:N (Jeden kraj má mnoho škol)
  @OneToMany(() => Skola, (skola) => skola.kraj_join)
  skola_join!: Skola[];
}