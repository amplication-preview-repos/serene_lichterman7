import { Viagem as TViagem } from "../api/viagem/Viagem";

export const VIAGEM_TITLE_FIELD = "idExterno";

export const ViagemTitle = (record: TViagem): string => {
  return record.idExterno?.toString() || String(record.id);
};
