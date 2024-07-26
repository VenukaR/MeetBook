import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from 'typeorm'
import { Profile } from './profile';

@Entity({name:'users'})
export class User{

    @PrimaryGeneratedColumn({type: 'bigint'})
    id:number;

    @Column({unique:true})
    name:string;

    @Column({unique:true})
    email:string;

    @Column()
    createdAt:Date;

    @Column({nullable: true})
    role: string;

    @OneToOne(() => Profile) //linking using forign key
    @JoinColumn()
    profile:Profile
}