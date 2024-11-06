// src/dto/create-booking.dto.ts
import { IsString, IsInt, IsDate, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  @IsNotEmpty()
  customerName: string;

  @IsEmail()
  @IsNotEmpty()
  customerEmail: string;

  @IsString()
  @IsNotEmpty()
  bookingType: string;  // Por ejemplo: 'Hotel', 'Flight', 'Event', etc.

  @IsDate()
  @IsNotEmpty()
  bookingDate: Date;

  @IsInt()
  @IsNotEmpty()
  numberOfPeople: number;

  @IsString()
  @IsOptional()
  specialRequests?: string;  // Peticiones especiales, si las hay

  @IsString()
  @IsNotEmpty()
  paymentStatus: string;  // Estado del pago, como 'Paid', 'Pending', etc.

  @IsDate()
  @IsNotEmpty()
  checkInDate: Date; // Fecha de entrada si es una reserva de hotel, por ejemplo.

  @IsDate()
  @IsOptional()
  checkOutDate?: Date; // Fecha de salida si es una reserva de hotel
}
