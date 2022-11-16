import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 48,
        marginTop: 12,
        padding: 10,
        fontWeight: 'bold',
        fontSize: THEME.FONT_SIZE.MD,
    },
    inputImage: {
        padding: 10,
        margin: 5,
        height: 30,
        width: 30,
        resizeMode: 'stretch',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: THEME.FONT_SIZE.MD,
    },
    select: {
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 4,
        color: THEME.COLORS.WHITE,
        borderBottomColor: THEME.COLORS.WHITE,
        backgroundColor: "#b1d4e0",
        height: 48,
        margin: 10,
        fontWeight: 'bold',
        fontSize: THEME.FONT_SIZE.MD,
    },
    selectItem: {

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 4,
        borderBottomColor: '#FFF',
        height: 48,
        borderRadius: 5,
        margin: 10,
    }
});
