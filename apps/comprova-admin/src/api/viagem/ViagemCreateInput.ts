import { ComprovanteWhereUniqueInput } from "../comprovante/ComprovanteWhereUniqueInput";
import { PontoDeEntregaWhereUniqueInput } from "../pontoDeEntrega/PontoDeEntregaWhereUniqueInput";

export type ViagemCreateInput = {
  aprovadaEm?: Date | null;
  comprovantes?: ComprovanteWhereUniqueInput | null;
  comprovantes_enviados: "PENDENTE" | "ENVIO_PARCIAL" | "ENVIADOS";
  criadoEm: Date;
  deletadoEm?: Date | null;
  envioConcluido: boolean;
  idExterno?: string | null;
  manifestado: boolean;
  pontoDeEntregas?: PontoDeEntregaWhereUniqueInput | null;
  rejeitadaEm?: Date | null;
};
