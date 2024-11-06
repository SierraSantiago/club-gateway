import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('booking')
export class BookingController {
  constructor(@Inject('BOOKING_SERVICE') private readonly bookingClient: ClientProxy) {}

  @Get('reservations')
  getReservations() {
    // Envía una solicitud al microservicio de Booking a través de NATS
    return this.bookingClient.send({ cmd: 'get_reservations' }, {});
  }
}
