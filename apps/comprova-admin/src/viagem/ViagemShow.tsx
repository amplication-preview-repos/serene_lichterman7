import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const ViagemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Aprovada Em" source="aprovadaEm" />
        <TextField
          label="Comprovantes Enviados"
          source="comprovantes_enviados"
        />
        <TextField label="Criado Em" source="criadoEm" />
        <TextField label="Deletado Em" source="deletadoEm" />
        <BooleanField label="Envio Concluido" source="envioConcluido" />
        <TextField label="Id" source="id" />
        <TextField label="Id Externo" source="idExterno" />
        <BooleanField label="Manifestado" source="manifestado" />
        <TextField label="Rejeitada Em" source="rejeitadaEm" />
      </SimpleShowLayout>
    </Show>
  );
};
