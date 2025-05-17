import { Module } from '@nestjs/common';
import { PagosController } from './controllers/pagos/pagos.controller';
import { PagosService } from './services/pagos/pagos.service';

@Module({
  controllers: [PagosController],
  providers: [PagosService]
})
export class PagosModule {}
