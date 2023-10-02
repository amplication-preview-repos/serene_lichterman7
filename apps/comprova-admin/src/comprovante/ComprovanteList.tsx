import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { VIAGEM_TITLE_FIELD } from "../viagem/ViagemTitle";

export const ComprovanteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"comprovantes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Analisado Em" source="analisadoEm" />
        <TextField label="Aprovado Em" source="aprovadoEm" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Deletado Em" source="deletadoEm" />
        <TextField label="ID" source="id" />
        <TextField label="Id Externo" source="idExterno" />
        <TextField label="Rejeitado Em" source="rejeitadoEm" />
        <TextField label="Resultado Analise" source="resultadoAnalise" />
        <TextField label="Tipo Comprovante" source="tipoComprovante" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Url Comprovante" source="urlComprovante" />
        <ReferenceField label="Viagem Id" source="viagem.id" reference="Viagem">
          <TextField source={VIAGEM_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
