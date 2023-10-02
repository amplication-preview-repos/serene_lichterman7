import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComprovanteService } from "./comprovante.service";
import { ComprovanteControllerBase } from "./base/comprovante.controller.base";

@swagger.ApiTags("comprovantes")
@common.Controller("comprovantes")
export class ComprovanteController extends ComprovanteControllerBase {
  constructor(
    protected readonly service: ComprovanteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
