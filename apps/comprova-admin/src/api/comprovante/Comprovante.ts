import { Viagem } from "../viagem/Viagem";

export type Comprovante = {
  analisadoEm: Date | null;
  aprovadoEm: Date | null;
  createdAt: Date;
  deletadoEm: Date | null;
  id: string;
  idExterno: string | null;
  rejeitadoEm: Date | null;
  resultadoAnalise: number | null;
  tipoComprovante: string | null;
  updatedAt: Date;
  urlComprovante: string | null;
  viagemId?: Viagem;
};
