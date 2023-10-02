import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ComprovanteResolverBase } from "./base/comprovante.resolver.base";
import { Comprovante } from "./base/Comprovante";
import { ComprovanteService } from "./comprovante.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Comprovante)
export class ComprovanteResolver extends ComprovanteResolverBase {
  constructor(
    protected readonly service: ComprovanteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
