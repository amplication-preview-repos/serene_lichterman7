import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ViagemList } from "./viagem/ViagemList";
import { ViagemCreate } from "./viagem/ViagemCreate";
import { ViagemEdit } from "./viagem/ViagemEdit";
import { ViagemShow } from "./viagem/ViagemShow";
import { ComprovanteList } from "./comprovante/ComprovanteList";
import { ComprovanteCreate } from "./comprovante/ComprovanteCreate";
import { ComprovanteEdit } from "./comprovante/ComprovanteEdit";
import { ComprovanteShow } from "./comprovante/ComprovanteShow";
import { PontoDeEntregaList } from "./pontoDeEntrega/PontoDeEntregaList";
import { PontoDeEntregaCreate } from "./pontoDeEntrega/PontoDeEntregaCreate";
import { PontoDeEntregaEdit } from "./pontoDeEntrega/PontoDeEntregaEdit";
import { PontoDeEntregaShow } from "./pontoDeEntrega/PontoDeEntregaShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"comprova"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Viagem"
          list={ViagemList}
          edit={ViagemEdit}
          create={ViagemCreate}
          show={ViagemShow}
        />
        <Resource
          name="Comprovante"
          list={ComprovanteList}
          edit={ComprovanteEdit}
          create={ComprovanteCreate}
          show={ComprovanteShow}
        />
        <Resource
          name="PontoDeEntrega"
          list={PontoDeEntregaList}
          edit={PontoDeEntregaEdit}
          create={PontoDeEntregaCreate}
          show={PontoDeEntregaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
