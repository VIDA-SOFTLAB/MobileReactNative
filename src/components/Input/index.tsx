import { TextInput, TextInputProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

interface NewTextInputProps extends TextInputProps{
    user?: boolean;
    cpf?: boolean;
    birth?: boolean;
    select?: boolean;
}

export function Input({ dark, ...rest }: NewTextInputProps) {
  return (
    <SafeAreaView>
          <TextInput style={[styles.input, dark ? styles.darkInput : styles.whiteInput]} {...rest} />
    </SafeAreaView>
  );
}
