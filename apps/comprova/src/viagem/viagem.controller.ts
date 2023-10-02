import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ViagemService } from "./viagem.service";
import { ViagemControllerBase } from "./base/viagem.controller.base";

@swagger.ApiTags("viagems")
@common.Controller("viagems")
export class ViagemController extends ViagemControllerBase {
  constructor(
    protected readonly service: ViagemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
