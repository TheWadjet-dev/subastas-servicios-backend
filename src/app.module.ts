import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SubastasModule } from './subastas/subastas.module';
import { ServiciosModule } from './servicios/servicios.module';
import { VerificacionModule } from './verificacion/verificacion.module';
import { PagosModule } from './pagos/pagos.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';

@Module({
  imports: [UsuariosModule, SubastasModule, ServiciosModule, VerificacionModule, PagosModule, NotificacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
