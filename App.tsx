import { StatusBar } from 'expo-status-bar';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import { View, Text, Button } from 'react-native';

export default function App() {
  return (
    <Background>
      <StatusBar backgroundColor="transparent" />
      <Routes />
    </Background>
  );
}
