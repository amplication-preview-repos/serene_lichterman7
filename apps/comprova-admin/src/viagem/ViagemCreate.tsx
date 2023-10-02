import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { ComprovanteTitle } from "../comprovante/ComprovanteTitle";
import { PontoDeEntregaTitle } from "../pontoDeEntrega/PontoDeEntregaTitle";

export const ViagemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Aprovada Em" source="aprovadaEm" />
        <ReferenceInput
          source="comprovantes.id"
          reference="Comprovante"
          label="comprovantes"
        >
          <SelectInput optionText={ComprovanteTitle} />
        </ReferenceInput>
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
        <ReferenceInput
          source="pontoDeEntregas.id"
          reference="PontoDeEntrega"
          label="PontoDeEntregas"
        >
          <SelectInput optionText={PontoDeEntregaTitle} />
        </ReferenceInput>
        <DateTimeInput label="Rejeitada Em" source="rejeitadaEm" />
      </SimpleForm>
    </Create>
  );
};
