import { StatusBar } from 'expo-status-bar';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {
  return (
    <Background>
      <StatusBar backgroundColor="transparent" />
      <Routes />
    </Background>
  );
}
