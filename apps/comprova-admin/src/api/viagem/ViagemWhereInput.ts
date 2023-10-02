import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ComprovanteWhereUniqueInput } from "../comprovante/ComprovanteWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PontoDeEntregaWhereUniqueInput } from "../pontoDeEntrega/PontoDeEntregaWhereUniqueInput";

export type ViagemWhereInput = {
  aprovadaEm?: DateTimeNullableFilter;
  comprovantes?: ComprovanteWhereUniqueInput;
  comprovantes_enviados?: "PENDENTE" | "ENVIO_PARCIAL" | "ENVIADOS";
  criadoEm?: DateTimeFilter;
  deletadoEm?: DateTimeNullableFilter;
  envioConcluido?: BooleanFilter;
  id?: IntFilter;
  idExterno?: StringNullableFilter;
  manifestado?: BooleanFilter;
  pontoDeEntregas?: PontoDeEntregaWhereUniqueInput;
  rejeitadaEm?: DateTimeNullableFilter;
};
