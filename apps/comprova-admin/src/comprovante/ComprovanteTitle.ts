import { Comprovante as TComprovante } from "../api/comprovante/Comprovante";

export const COMPROVANTE_TITLE_FIELD = "idExterno";

export const ComprovanteTitle = (record: TComprovante): string => {
  return record.idExterno?.toString() || String(record.id);
};
