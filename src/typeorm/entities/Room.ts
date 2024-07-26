import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'rooms' })
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    capacity: number;

    @Column({ type: 'time', nullable: true })
    bookingDuration: string | null;
}
