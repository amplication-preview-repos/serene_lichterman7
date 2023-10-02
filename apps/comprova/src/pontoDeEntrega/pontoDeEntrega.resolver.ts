import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PontoDeEntregaResolverBase } from "./base/pontoDeEntrega.resolver.base";
import { PontoDeEntrega } from "./base/PontoDeEntrega";
import { PontoDeEntregaService } from "./pontoDeEntrega.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PontoDeEntrega)
export class PontoDeEntregaResolver extends PontoDeEntregaResolverBase {
  constructor(
    protected readonly service: PontoDeEntregaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
