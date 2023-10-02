import { ViagemWhereInput } from "./ViagemWhereInput";
import { ViagemOrderByInput } from "./ViagemOrderByInput";

export type ViagemFindManyArgs = {
  where?: ViagemWhereInput;
  orderBy?: Array<ViagemOrderByInput>;
  skip?: number;
  take?: number;
};
