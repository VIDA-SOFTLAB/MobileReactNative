import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/index';

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignContent: 'space-around',
        backgroundColor: THEME.COLORS.PRIMARY,
    },

    userIcon: {
        width: 60,
        height: 60,
        margin: 15,
        alignSelf: 'flex-start'
    },

    userInfo: {
        color: THEME.COLORS.WHITE,
        fontSize: THEME.FONT_SIZE.LG,
        textAlignVertical: "center",
        marginLeft: 15
    },
});
