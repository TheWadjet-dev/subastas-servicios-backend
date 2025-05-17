import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { VerificacionService } from '../services/verificacion.service';	
import { VerificarDto } from '../dto/verificacion.dto';


@Controller('verificacion')
export class VerificacionController {
    constructor(private readonly verificacionService: VerificacionService) {}

    @Post('verificar')
    async verificarUsuario(@Body() verificacionDto: VerificarDto) {
        const result = await this.verificacionService.verificar(verificacionDto);

        if (!result) {
            throw new UnauthorizedException('Token inválido o ID no encontrado');
        }

        return result;
    }
}
