import { User } from './User';
import { Room } from './Room';
export declare class Booking {
    id: number;
    user: User;
    room: Room;
    date: Date;
    startTime: string;
    endTime?: string;
    userId: number;
    roomId: number;
    duration: string;
}
