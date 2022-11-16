import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

interface BackgroundProps {
  children: React.ReactNode;
  secondary?: boolean;
}

export function Background({ secondary, children }: BackgroundProps) {
    return (
    <SafeAreaProvider>
        <SafeAreaView style={[styles.container, secondary ? styles.secondaryBackground : styles.primaryBackground]}>
            {children}
        </SafeAreaView>
    </SafeAreaProvider>
  );
}
