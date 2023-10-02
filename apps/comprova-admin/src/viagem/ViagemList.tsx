import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPROVANTE_TITLE_FIELD } from "../comprovante/ComprovanteTitle";
import { PONTODEENTREGA_TITLE_FIELD } from "../pontoDeEntrega/PontoDeEntregaTitle";

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
        <ReferenceField
          label="comprovantes"
          source="comprovante.id"
          reference="Comprovante"
        >
          <TextField source={COMPROVANTE_TITLE_FIELD} />
        </ReferenceField>
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
        <ReferenceField
          label="PontoDeEntregas"
          source="pontodeentrega.id"
          reference="PontoDeEntrega"
        >
          <TextField source={PONTODEENTREGA_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Rejeitada Em" source="rejeitadaEm" />
      </Datagrid>
    </List>
  );
};
