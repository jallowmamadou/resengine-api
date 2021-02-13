import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";
import { BookingStatusEnum } from '../enums/booking-status-enum';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  bookingCode: string;

  @Column({ type: "varchar" })
  hotelId: string;

  @Column({ type: "varchar" })
  mainGuestEmail: string;

  @Column({ type: "varchar" })
  mainGuestName: string;

  @Column({
    type: "enum",
    enum: BookingStatusEnum,
    default: BookingStatusEnum.Pending,
  })
  status: BookingStatusEnum;

  @Column({ type: "timestamp" })
  arrivalDate: string;

  @Column({ type: "timestamp", default: null }) deletedAt: string;
  @Column()
  departureDate: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: string;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: string;
}
