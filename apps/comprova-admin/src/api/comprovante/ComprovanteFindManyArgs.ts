import { ComprovanteWhereInput } from "./ComprovanteWhereInput";
import { ComprovanteOrderByInput } from "./ComprovanteOrderByInput";

export type ComprovanteFindManyArgs = {
  where?: ComprovanteWhereInput;
  orderBy?: Array<ComprovanteOrderByInput>;
  skip?: number;
  take?: number;
};
