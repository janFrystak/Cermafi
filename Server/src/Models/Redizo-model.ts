import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'redizo' })
export class Redizo {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id!: string; // bigint → string in JS/TS

  @Column({ type: 'bigint', name: 'red_izo', nullable: true })
  redIzo!: string;

  @Column({ type: 'bigint', name: 'izo', nullable: true })
  izo!: string;

  @Column({ type: 'text', name: 'zar_pln', nullable: true })
  zarPln!: string;

  @Column({ type: 'text', name: 'zar_zkr', nullable: true })
  zarZkr!: string;

  @Column({ type: 'text', name: 'misto', nullable: true })
  misto!: string;

  @Column({ type: 'text', name: 'ulice', nullable: true })
  ulice!: string;

  @Column({ type: 'bigint', name: 'psc', nullable: true })
  psc!: string;

  @Column({ type: 'text', name: 'vusc', nullable: true })
  vusc!: string;

  @Column({ type: 'text', name: 'obor', nullable: true })
  obor!: string;

  @Column({ type: 'text', name: 'obor_naz', nullable: true })
  oborNaz!: string;

  @Column({ type: 'text', name: 'pln_naz', nullable: true })
  plnNaz!: string;
}
