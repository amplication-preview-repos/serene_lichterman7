import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VIAGEM_TITLE_FIELD } from "../viagem/ViagemTitle";

export const PontoDeEntregaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PontoDeEntregas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
