import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/index';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: THEME.COLORS.WHITE,
        paddingRight: 10,
        paddingLeft: 10,
    },

    imageButton: {
        width: 60,
        height: 60,
        margin: 15,
    },
});
