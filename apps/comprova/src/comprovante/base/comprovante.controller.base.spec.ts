import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ComprovanteController } from "../comprovante.controller";
import { ComprovanteService } from "../comprovante.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  analisadoEm: new Date(),
  aprovadoEm: new Date(),
  createdAt: new Date(),
  deletadoEm: new Date(),
  id: "exampleId",
  idExterno: "exampleIdExterno",
  rejeitadoEm: new Date(),
  resultadoAnalise: 42,
  tipoComprovante: "exampleTipoComprovante",
  updatedAt: new Date(),
  urlComprovante: "exampleUrlComprovante",
};
const CREATE_RESULT = {
  analisadoEm: new Date(),
  aprovadoEm: new Date(),
  createdAt: new Date(),
  deletadoEm: new Date(),
  id: "exampleId",
  idExterno: "exampleIdExterno",
  rejeitadoEm: new Date(),
  resultadoAnalise: 42,
  tipoComprovante: "exampleTipoComprovante",
  updatedAt: new Date(),
  urlComprovante: "exampleUrlComprovante",
};
const FIND_MANY_RESULT = [
  {
    analisadoEm: new Date(),
    aprovadoEm: new Date(),
    createdAt: new Date(),
    deletadoEm: new Date(),
    id: "exampleId",
    idExterno: "exampleIdExterno",
    rejeitadoEm: new Date(),
    resultadoAnalise: 42,
    tipoComprovante: "exampleTipoComprovante",
    updatedAt: new Date(),
    urlComprovante: "exampleUrlComprovante",
  },
];
const FIND_ONE_RESULT = {
  analisadoEm: new Date(),
  aprovadoEm: new Date(),
  createdAt: new Date(),
  deletadoEm: new Date(),
  id: "exampleId",
  idExterno: "exampleIdExterno",
  rejeitadoEm: new Date(),
  resultadoAnalise: 42,
  tipoComprovante: "exampleTipoComprovante",
  updatedAt: new Date(),
  urlComprovante: "exampleUrlComprovante",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Comprovante", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ComprovanteService,
          useValue: service,
        },
      ],
      controllers: [ComprovanteController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /comprovantes", async () => {
    await request(app.getHttpServer())
      .post("/comprovantes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        analisadoEm: CREATE_RESULT.analisadoEm.toISOString(),
        aprovadoEm: CREATE_RESULT.aprovadoEm.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletadoEm: CREATE_RESULT.deletadoEm.toISOString(),
        rejeitadoEm: CREATE_RESULT.rejeitadoEm.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /comprovantes", async () => {
    await request(app.getHttpServer())
      .get("/comprovantes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          analisadoEm: FIND_MANY_RESULT[0].analisadoEm.toISOString(),
          aprovadoEm: FIND_MANY_RESULT[0].aprovadoEm.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          deletadoEm: FIND_MANY_RESULT[0].deletadoEm.toISOString(),
          rejeitadoEm: FIND_MANY_RESULT[0].rejeitadoEm.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /comprovantes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/comprovantes"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /comprovantes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/comprovantes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        analisadoEm: FIND_ONE_RESULT.analisadoEm.toISOString(),
        aprovadoEm: FIND_ONE_RESULT.aprovadoEm.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        deletadoEm: FIND_ONE_RESULT.deletadoEm.toISOString(),
        rejeitadoEm: FIND_ONE_RESULT.rejeitadoEm.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /comprovantes existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/comprovantes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        analisadoEm: CREATE_RESULT.analisadoEm.toISOString(),
        aprovadoEm: CREATE_RESULT.aprovadoEm.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        deletadoEm: CREATE_RESULT.deletadoEm.toISOString(),
        rejeitadoEm: CREATE_RESULT.rejeitadoEm.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/comprovantes")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
