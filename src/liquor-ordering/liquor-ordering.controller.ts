import { Controller, Post, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderDto } from './dto/create-order.dto'; // Asegúrate de importar tu DTO

@Controller('liquor-ordering')
export class LiquorOrderingController {
  constructor(@Inject('LIQUOR_SERVICE') private readonly liquorClient: ClientProxy) {}

  @Post('orders')
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    // Envía la solicitud de crear una orden al microservicio de Liquor Ordering a través de NATS
    return this.liquorClient.send({ cmd: 'createOrder' }, createOrderDto);
  }

  
}
