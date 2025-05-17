import { Module } from '@nestjs/common';
import { UsuariosController } from './controllers/usuarios/usuarios.controller';
import { UsuariosService } from './services/usuarios/usuarios.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
