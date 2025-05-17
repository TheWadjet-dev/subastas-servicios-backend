import { Module } from '@nestjs/common';
import { SubastasController } from './controllers/subastas/subastas.controller';
import { SubastasService } from './services/subastas/subastas.service';

@Module({
  controllers: [SubastasController],
  providers: [SubastasService]
})
export class SubastasModule {}
