import { SortOrder } from "../../util/SortOrder";

export type ViagemOrderByInput = {
  aprovadaEm?: SortOrder;
  comprovantes_enviados?: SortOrder;
  criadoEm?: SortOrder;
  deletadoEm?: SortOrder;
  envioConcluido?: SortOrder;
  id?: SortOrder;
  idExterno?: SortOrder;
  manifestado?: SortOrder;
  rejeitadaEm?: SortOrder;
};
