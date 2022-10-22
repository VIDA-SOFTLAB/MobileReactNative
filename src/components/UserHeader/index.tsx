import { Text } from 'react-native';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

import { styles } from './styles';

interface HeadingProps extends SafeAreaViewProps {
  title: string;
}

export function Heading({ title, ...rest }: HeadingProps) {
  return (
    <SafeAreaView style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </SafeAreaView>
  )
}