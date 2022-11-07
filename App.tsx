import { StatusBar } from 'expo-status-bar';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import { View, Text, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor="transparent" />
      <Routes />
    </View>
  );
}
