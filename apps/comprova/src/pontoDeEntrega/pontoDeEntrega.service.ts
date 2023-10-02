import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PontoDeEntregaServiceBase } from "./base/pontoDeEntrega.service.base";

@Injectable()
export class PontoDeEntregaService extends PontoDeEntregaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
