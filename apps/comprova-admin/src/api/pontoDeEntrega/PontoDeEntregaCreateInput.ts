import { ViagemWhereUniqueInput } from "../viagem/ViagemWhereUniqueInput";

export type PontoDeEntregaCreateInput = {
  idPontoEntrega: string;
  latitude: string;
  longitude: string;
  nomePonto?: string | null;
  viagemId: ViagemWhereUniqueInput;
};
