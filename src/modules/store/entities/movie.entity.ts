import {Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()

export class Movie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 60})
    title: string

    @Column()
    year: number

}