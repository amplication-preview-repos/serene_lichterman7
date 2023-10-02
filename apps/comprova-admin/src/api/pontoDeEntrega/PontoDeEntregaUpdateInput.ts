import { ViagemWhereUniqueInput } from "../viagem/ViagemWhereUniqueInput";

export type PontoDeEntregaUpdateInput = {
  idPontoEntrega?: string;
  latitude?: string;
  longitude?: string;
  nomePonto?: string | null;
  viagemId?: ViagemWhereUniqueInput;
};
