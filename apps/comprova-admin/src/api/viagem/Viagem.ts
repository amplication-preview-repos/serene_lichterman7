import { Comprovante } from "../comprovante/Comprovante";
import { PontoDeEntrega } from "../pontoDeEntrega/PontoDeEntrega";

export type Viagem = {
  aprovadaEm: Date | null;
  comprovantes?: Comprovante | null;
  comprovantes_enviados?: "PENDENTE" | "ENVIO_PARCIAL" | "ENVIADOS";
  criadoEm: Date;
  deletadoEm: Date | null;
  envioConcluido: boolean;
  id: number;
  idExterno: string | null;
  manifestado: boolean;
  pontoDeEntregas?: PontoDeEntrega | null;
  rejeitadaEm: Date | null;
};
