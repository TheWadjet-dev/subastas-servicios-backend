import { Module } from '@nestjs/common';
import { ServiciosController } from './controllers/servicios.controller';
import { ServiciosService } from './services/servicios.service';

@Module({
  controllers: [ServiciosController],
  providers: [ServiciosService],
})
export class ServiciosModule {}
