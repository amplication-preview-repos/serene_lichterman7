import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComprovanteModuleBase } from "./base/comprovante.module.base";
import { ComprovanteService } from "./comprovante.service";
import { ComprovanteController } from "./comprovante.controller";
import { ComprovanteResolver } from "./comprovante.resolver";

@Module({
  imports: [ComprovanteModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComprovanteController],
  providers: [ComprovanteService, ComprovanteResolver],
  exports: [ComprovanteService],
})
export class ComprovanteModule {}
