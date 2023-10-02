import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PontoDeEntregaService } from "./pontoDeEntrega.service";
import { PontoDeEntregaControllerBase } from "./base/pontoDeEntrega.controller.base";

@swagger.ApiTags("pontoDeEntregas")
@common.Controller("pontoDeEntregas")
export class PontoDeEntregaController extends PontoDeEntregaControllerBase {
  constructor(
    protected readonly service: PontoDeEntregaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
