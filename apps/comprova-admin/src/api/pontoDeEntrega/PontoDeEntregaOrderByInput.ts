import { SortOrder } from "../../util/SortOrder";

export type PontoDeEntregaOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  idPontoEntrega?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  nomePonto?: SortOrder;
  updatedAt?: SortOrder;
  viagem_id?: SortOrder;
};
