import { StyleSheet } from 'react-native';

import { THEME } from '../../theme/index';

export const styles = StyleSheet.create({
  button: {
    width: 320,
    height: 48,
    marginVertical: 12,
    borderRadius: 8,

    justifyContent: 'center',
    alignItems: 'center',
  },
  colorPrimary: {
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  colorSecondary: {
    backgroundColor: THEME.COLORS.SECONDARY,
  },
  text: {
    color: THEME.COLORS.WHITE,
    fontSize: THEME.FONT_SIZE.MD,
  },
});
