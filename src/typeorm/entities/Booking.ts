import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';
import { Room } from './Room';

@Entity({ name: 'bookings' })
export class Booking {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: User;

    @ManyToOne(() => Room)
    @JoinColumn({ name: 'roomId' })
    room: Room;

    @Column()
    date: Date;

    @Column({ type: 'time' })
    startTime: string;
    
    @Column({ nullable: true }) // Make sure endTime is nullable if it's optional
    endTime?: string;

    @Column()
    userId: number;

    @Column()
    roomId: number;



    @Column({ type: 'time' })
    duration: string;
}
