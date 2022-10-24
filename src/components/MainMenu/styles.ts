import { StyleSheet } from 'react-native';
import { THEME } from '../../theme/index';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    }
});
