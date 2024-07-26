export type CreateRoomParam = {
    roomName: string;
    roomCapacity: number;
    bookingDuration: string; 
}

export type UpdateRoomParam = {
    bookingDuration: string; 
}
