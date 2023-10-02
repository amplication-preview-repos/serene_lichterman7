export type Viagem = {
  aprovadaEm: Date | null;
  comprovantes_enviados?: "PENDENTE" | "ENVIO_PARCIAL" | "ENVIADOS";
  criadoEm: Date;
  deletadoEm: Date | null;
  envioConcluido: boolean;
  id: number;
  idExterno: string | null;
  manifestado: boolean;
  rejeitadaEm: Date | null;
};
