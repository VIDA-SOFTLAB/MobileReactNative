import { TextInput, TextInputProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

export function Input({ ...rest }: TextInputProps) {
  return (
    <SafeAreaView>
      <TextInput style={styles.input} {...rest} />
    </SafeAreaView>
  );
}
