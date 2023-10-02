import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PontoDeEntregaModuleBase } from "./base/pontoDeEntrega.module.base";
import { PontoDeEntregaService } from "./pontoDeEntrega.service";
import { PontoDeEntregaController } from "./pontoDeEntrega.controller";
import { PontoDeEntregaResolver } from "./pontoDeEntrega.resolver";

@Module({
  imports: [PontoDeEntregaModuleBase, forwardRef(() => AuthModule)],
  controllers: [PontoDeEntregaController],
  providers: [PontoDeEntregaService, PontoDeEntregaResolver],
  exports: [PontoDeEntregaService],
})
export class PontoDeEntregaModule {}
