import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { VIAGEM_TITLE_FIELD } from "../viagem/ViagemTitle";

export const PontoDeEntregaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="ID Ponto Entrega" source="idPontoEntrega" />
        <TextField label="Latitude" source="latitude" />
        <TextField label="Longitude" source="longitude" />
        <TextField label="Nome Ponto" source="nomePonto" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Viagem Id" source="viagem.id" reference="Viagem">
          <TextField source={VIAGEM_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
