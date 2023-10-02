import { Viagem } from "../viagem/Viagem";

export type PontoDeEntrega = {
  createdAt: Date;
  id: string;
  idPontoEntrega: string;
  latitude: string;
  longitude: string;
  nomePonto: string | null;
  updatedAt: Date;
  viagemId?: Viagem;
};
