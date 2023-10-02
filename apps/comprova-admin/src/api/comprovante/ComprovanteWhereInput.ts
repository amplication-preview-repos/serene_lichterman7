import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ViagemWhereUniqueInput } from "../viagem/ViagemWhereUniqueInput";

export type ComprovanteWhereInput = {
  analisadoEm?: DateTimeNullableFilter;
  aprovadoEm?: DateTimeNullableFilter;
  deletadoEm?: DateTimeNullableFilter;
  id?: StringFilter;
  idExterno?: StringNullableFilter;
  rejeitadoEm?: DateTimeNullableFilter;
  resultadoAnalise?: IntNullableFilter;
  tipoComprovante?: StringNullableFilter;
  urlComprovante?: StringNullableFilter;
  viagemId?: ViagemWhereUniqueInput;
};
