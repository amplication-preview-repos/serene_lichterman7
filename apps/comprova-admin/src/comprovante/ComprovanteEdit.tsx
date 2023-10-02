import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ViagemTitle } from "../viagem/ViagemTitle";

export const ComprovanteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Analisado Em" source="analisadoEm" />
        <DateTimeInput label="Aprovado Em" source="aprovadoEm" />
        <DateTimeInput label="Deletado Em" source="deletadoEm" />
        <TextInput label="Id Externo" source="idExterno" />
        <DateTimeInput label="Rejeitado Em" source="rejeitadoEm" />
        <NumberInput
          step={1}
          label="Resultado Analise"
          source="resultadoAnalise"
        />
        <TextInput label="Tipo Comprovante" source="tipoComprovante" />
        <TextInput label="Url Comprovante" source="urlComprovante" />
        <ReferenceInput
          source="viagemId.id"
          reference="Viagem"
          label="Viagem Id"
        >
          <SelectInput optionText={ViagemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
