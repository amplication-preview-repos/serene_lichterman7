import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ViagemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Aprovada Em" source="aprovadaEm" />
        <SelectInput
          source="comprovantes_enviados"
          label="Comprovantes Enviados"
          choices={[
            { label: "PENDENTE", value: "PENDENTE" },
            { label: "ENVIO_PARCIAL", value: "ENVIO_PARCIAL" },
            { label: "ENVIADOS", value: "ENVIADOS" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Criado Em" source="criadoEm" />
        <DateTimeInput label="Deletado Em" source="deletadoEm" />
        <BooleanInput label="Envio Concluido" source="envioConcluido" />
        <TextInput label="Id Externo" source="idExterno" />
        <BooleanInput label="Manifestado" source="manifestado" />
        <DateTimeInput label="Rejeitada Em" source="rejeitadaEm" />
      </SimpleForm>
    </Create>
  );
};
