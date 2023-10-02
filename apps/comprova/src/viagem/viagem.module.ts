import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ViagemModuleBase } from "./base/viagem.module.base";
import { ViagemService } from "./viagem.service";
import { ViagemController } from "./viagem.controller";
import { ViagemResolver } from "./viagem.resolver";

@Module({
  imports: [ViagemModuleBase, forwardRef(() => AuthModule)],
  controllers: [ViagemController],
  providers: [ViagemService, ViagemResolver],
  exports: [ViagemService],
})
export class ViagemModule {}
