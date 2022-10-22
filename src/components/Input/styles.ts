import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  input: {
    width: 320,
    height: 48,
    marginTop: 12,
    padding: 10,
    borderRadius: 8,

    fontSize: THEME.FONT_SIZE.MD,
    backgroundColor: THEME.COLORS.WHITE,
  },
});
