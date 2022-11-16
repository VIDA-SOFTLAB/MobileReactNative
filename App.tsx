import { StatusBar } from 'expo-status-bar';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import { View, Text, Button } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider>
            <Background>
                <StatusBar backgroundColor="transparent" />
                <Routes />
            </Background>
        </SafeAreaProvider>
  );
}
