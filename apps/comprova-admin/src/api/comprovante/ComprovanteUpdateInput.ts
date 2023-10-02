import { ViagemWhereUniqueInput } from "../viagem/ViagemWhereUniqueInput";

export type ComprovanteUpdateInput = {
  analisadoEm?: Date | null;
  aprovadoEm?: Date | null;
  deletadoEm?: Date | null;
  idExterno?: string | null;
  rejeitadoEm?: Date | null;
  resultadoAnalise?: number | null;
  tipoComprovante?: string | null;
  urlComprovante?: string | null;
  viagemId?: ViagemWhereUniqueInput;
};
