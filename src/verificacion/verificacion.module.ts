import { Module } from '@nestjs/common';
import { VerificacionController } from './controllers/verificacion.controller';
import { VerificacionService } from './controllers/verificacion/verificacion.service';
import { VerificacionService } from './services/verificacion/verificacion.service';

@Module({
  controllers: [VerificacionController],
  providers: [VerificacionService]
})
export class VerificacionModule {}
