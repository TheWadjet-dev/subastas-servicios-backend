import { Injectable } from '@nestjs/common';
import { VerificarDto } from '../dto/verificacion.dto';
import { verifyProof } from '@worldcoin/idkit';
import { PrismaService } from '../../shared/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class VerificacionService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async verificar(dto: VerificarDto) {
    const { merkle_root, nullifier_hash, proof, credential_type, action } = dto;

    const isHuman = await verifyProof({
      app_id: process.env.WORLD_ID_APP_ID,
      action,
      credential_type,
      nullifier_hash,
      merkle_root,
      proof,
    });

    if (!isHuman.success) return null;

    // Busca o crea usuario
    let usuario = await this.prisma.usuario.findUnique({
      where: { nullifierHash: nullifier_hash },
    });

    if (!usuario) {
      usuario = await this.prisma.usuario.create({
        data: { nullifierHash: nullifier_hash },
      });
    }

    // Token JWT
    const token = this.jwtService.sign({
      sub: usuario.id,
      nullifier: usuario.nullifierHash,
    });

    return { token };
  }
}
