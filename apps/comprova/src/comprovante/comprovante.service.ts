import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComprovanteServiceBase } from "./base/comprovante.service.base";

@Injectable()
export class ComprovanteService extends ComprovanteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
