import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "admin"})
export class Admin{
    @PrimaryGeneratedColumn({
        name: "id",
        type:"bigint"
    })
    id!:number

    @Column({unique:true, name: 'username'})
    username!:string

    @Column({ type: 'int', default: 1, name: 'permission_level' })
    permissionLevel!: number;

    @Column({unique:true, name: 'password_hash'})
    passHash!:string

}