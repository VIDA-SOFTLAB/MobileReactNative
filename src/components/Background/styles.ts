import { StyleSheet } from 'react-native';

import { THEME } from '../../theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_WHITE,
  },
  primaryBackground: {
    backgroundColor: THEME.COLORS.BACKGROUND_WHITE,
  },
  secondaryBackground: {
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
});
