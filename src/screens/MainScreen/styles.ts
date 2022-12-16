import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/index';


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 6,
    },
    centralContainer: {
        flex: 2
    },
    containerMenu: {
        textAlign: 'center',
        minWidth: 450,
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        flexWrap: "wrap",
        paddingRight: 20,
        paddingLeft: 20,

    },
    imageButton: {
        margin: 30,
        width: 120,
        height: 120,
    },
    textButton: {
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 20,
        marginTop: -25,
    },
    titleText: {
        marginTop: 20,
        width: 300,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: THEME.FONT_SIZE.LG,
    },
    containerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: THEME.COLORS.WHITE,
        paddingRight: 10,
        paddingLeft: 10,
    },
    imageButtonBottom: {
        width: 60,
        height: 60,
        margin: 15,
    },

});
