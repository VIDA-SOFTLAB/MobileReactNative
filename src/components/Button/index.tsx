import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  secondary?: boolean;
}

export function Button({ text, secondary, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, secondary ? styles.colorSecondary : styles.colorPrimary]} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
