import { Module } from '@nestjs/common';
import { NotificacionesController } from './controller/notificaciones/notificaciones.controller';
import { NotificacionesService } from './services/notificaciones/notificaciones.service';

@Module({
  controllers: [NotificacionesController],
  providers: [NotificacionesService]
})
export class NotificacionesModule {}
