import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ViagemWhereUniqueInput } from "../viagem/ViagemWhereUniqueInput";

export type PontoDeEntregaWhereInput = {
  id?: StringFilter;
  idPontoEntrega?: StringFilter;
  latitude?: StringFilter;
  longitude?: StringFilter;
  nomePonto?: StringNullableFilter;
  viagemId?: ViagemWhereUniqueInput;
};
