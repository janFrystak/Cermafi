import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'redizo' })
export class Redizo {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id!: number

  @Column({ type: 'text', nullable: true })
  red_izo!: string;

  @Column({ type: 'text', nullable: true })
  izo!: string;

  @Column({ type: 'text', nullable: true })
  zar_pln!: string;

  @Column({ type: 'text', nullable: true })
  zar_zkr!: string;

  @Column({ type: 'text', nullable: true })
  misto!: string;

  @Column({ type: 'text', nullable: true })
  ulice!: string;

  @Column({ type: 'text', nullable: true })
  psc!: string;

  @Column({ type: 'text', nullable: true })
  vusc!: string;

  @Column({ type: 'text', nullable: true })
  obor!: string;

  @Column({ type: 'text', name: 'obor_naz', nullable: true })
  oborNaz!: string;

  @Column({ type: 'text', name: 'pln_naz', nullable: true })
  plnNaz!: string;
}
