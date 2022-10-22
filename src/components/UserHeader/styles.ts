import { StyleSheet } from 'react-native';

import { THEME } from '../../theme/index';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#2e266d',
    display: 'flex';
      
  },
  title: {
    fontSize: THEME.FONT_SIZE.XL,
    textAlign: 'center',
    },
});
