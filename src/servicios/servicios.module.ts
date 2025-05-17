import { Module } from '@nestjs/common';
import { ServiciosController } from './controller/servicios/servicios.controller';
import { ServiciosController } from './controllers/servicios.controller';
import { ServiciosService } from './services/servicios/servicios.service';
import { ServiciosController } from './controllers/servicios.controller';

@Module({
  controllers: [ServiciosController],
  providers: [ServiciosService]
})
export class ServiciosModule {}
