import { StatusBar } from 'expo-status-bar';
import { Background } from './src/components/Background';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <Background>
      <StatusBar backgroundColor="transparent" />
      <Login />
    </Background>
  );
}
