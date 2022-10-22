import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

interface BackgroundProps {
  children: React.ReactNode
}

export function Background({ children }: BackgroundProps) {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  )
}
