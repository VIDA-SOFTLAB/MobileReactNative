import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    text: string;
    secondary?: boolean;
    alert?: boolean;
    clear?: boolean;
}

export function Button({ text, secondary, alert, clear, ...rest }: ButtonProps) {
  return (
      <TouchableOpacity style={[styles.button, alert ? styles.colorAlert : (secondary ? styles.colorSecondary : styles.colorPrimary), clear ? styles.colorClear : null]} {...rest}>
          <Text style={[(clear ? styles.textClear : styles.text), (alert ? styles.textAlert : null)]}>{text}</Text>
    </TouchableOpacity>
  );
}
