import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ViagemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"viagens"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
