import { PontoDeEntrega as TPontoDeEntrega } from "../api/pontoDeEntrega/PontoDeEntrega";

export const PONTODEENTREGA_TITLE_FIELD = "idPontoEntrega";

export const PontoDeEntregaTitle = (record: TPontoDeEntrega): string => {
  return record.idPontoEntrega?.toString() || String(record.id);
};
