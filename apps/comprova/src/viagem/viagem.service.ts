import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ViagemServiceBase } from "./base/viagem.service.base";

@Injectable()
export class ViagemService extends ViagemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
