import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ViagemTitle } from "../viagem/ViagemTitle";

export const PontoDeEntregaCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ID Ponto Entrega" source="idPontoEntrega" />
        <TextInput label="Latitude" source="latitude" />
        <TextInput label="Longitude" source="longitude" />
        <TextInput label="Nome Ponto" source="nomePonto" />
        <ReferenceInput
          source="viagemId.id"
          reference="Viagem"
          label="Viagem Id"
        >
          <SelectInput optionText={ViagemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
