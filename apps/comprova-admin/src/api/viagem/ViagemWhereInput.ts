import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ViagemWhereInput = {
  aprovadaEm?: DateTimeNullableFilter;
  comprovantes_enviados?: "PENDENTE" | "ENVIO_PARCIAL" | "ENVIADOS";
  criadoEm?: DateTimeFilter;
  deletadoEm?: DateTimeNullableFilter;
  envioConcluido?: BooleanFilter;
  id?: IntFilter;
  idExterno?: StringNullableFilter;
  manifestado?: BooleanFilter;
  rejeitadaEm?: DateTimeNullableFilter;
};
