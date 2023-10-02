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
import { ViagemController } from "../viagem.controller";
import { ViagemService } from "../viagem.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  aprovadaEm: new Date(),
  criadoEm: new Date(),
  deletadoEm: new Date(),
  envioConcluido: "true",
  id: 42,
  idExterno: "exampleIdExterno",
  manifestado: "true",
  rejeitadaEm: new Date(),
};
const CREATE_RESULT = {
  aprovadaEm: new Date(),
  criadoEm: new Date(),
  deletadoEm: new Date(),
  envioConcluido: "true",
  id: 42,
  idExterno: "exampleIdExterno",
  manifestado: "true",
  rejeitadaEm: new Date(),
};
const FIND_MANY_RESULT = [
  {
    aprovadaEm: new Date(),
    criadoEm: new Date(),
    deletadoEm: new Date(),
    envioConcluido: "true",
    id: 42,
    idExterno: "exampleIdExterno",
    manifestado: "true",
    rejeitadaEm: new Date(),
  },
];
const FIND_ONE_RESULT = {
  aprovadaEm: new Date(),
  criadoEm: new Date(),
  deletadoEm: new Date(),
  envioConcluido: "true",
  id: 42,
  idExterno: "exampleIdExterno",
  manifestado: "true",
  rejeitadaEm: new Date(),
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

describe("Viagem", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ViagemService,
          useValue: service,
        },
      ],
      controllers: [ViagemController],
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

  test("POST /viagems", async () => {
    await request(app.getHttpServer())
      .post("/viagems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        aprovadaEm: CREATE_RESULT.aprovadaEm.toISOString(),
        criadoEm: CREATE_RESULT.criadoEm.toISOString(),
        deletadoEm: CREATE_RESULT.deletadoEm.toISOString(),
        rejeitadaEm: CREATE_RESULT.rejeitadaEm.toISOString(),
      });
  });

  test("GET /viagems", async () => {
    await request(app.getHttpServer())
      .get("/viagems")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          aprovadaEm: FIND_MANY_RESULT[0].aprovadaEm.toISOString(),
          criadoEm: FIND_MANY_RESULT[0].criadoEm.toISOString(),
          deletadoEm: FIND_MANY_RESULT[0].deletadoEm.toISOString(),
          rejeitadaEm: FIND_MANY_RESULT[0].rejeitadaEm.toISOString(),
        },
      ]);
  });

  test("GET /viagems/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/viagems"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /viagems/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/viagems"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        aprovadaEm: FIND_ONE_RESULT.aprovadaEm.toISOString(),
        criadoEm: FIND_ONE_RESULT.criadoEm.toISOString(),
        deletadoEm: FIND_ONE_RESULT.deletadoEm.toISOString(),
        rejeitadaEm: FIND_ONE_RESULT.rejeitadaEm.toISOString(),
      });
  });

  test("POST /viagems existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/viagems")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        aprovadaEm: CREATE_RESULT.aprovadaEm.toISOString(),
        criadoEm: CREATE_RESULT.criadoEm.toISOString(),
        deletadoEm: CREATE_RESULT.deletadoEm.toISOString(),
        rejeitadaEm: CREATE_RESULT.rejeitadaEm.toISOString(),
      })
      .then(function () {
        agent
          .post("/viagems")
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
