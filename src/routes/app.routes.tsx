import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../screens/Welcome';
import { Login } from '../screens/Login';
import { Logado } from '../screens/Logado';
import { MainScreen } from '../screens/MainScreen';
import { Cadastro } from '../screens/Cadastro';
import { Exame } from '../screens/Exame';
import { Consulta } from '../screens/Consulta';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="welcome" component={Welcome} />
      <Screen name="login" component={Login} />
      <Screen name="logado" component={Logado} />
      <Screen name="mainScreen" component={MainScreen} />
      <Screen name="cadastro" component={Cadastro} />
      <Screen name="exam" component={Exame} />
      <Screen name="consult" component={Consulta} />
    </Navigator>
  );
}
