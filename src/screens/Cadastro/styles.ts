import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '50%',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: '45%',
    },
    bg: {
        paddingBottom: 350,
        backgroundColor: THEME.COLORS.SECONDARY,
    },
    flexSelect: {
        display: "flex",
        flexDirection: "row",
    },
    bgCadastro: {
        width: '100%',
        height: '50%',
        zIndex: -2,
        position: 'absolute',
    },
    footerImg: {
        width: '100%',
        height: '21%',
        zIndex: -2,
        position: 'absolute',
        bottom: 0,
    },
    titleCadastro: {
        
    },
    logoImage: {
        width: 200,
        height: 46,
        marginBottom: 24,
    }    
});
