import { Background } from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { UserHeader } from '../../components/UserHeader';
import { BottomMenu } from '../../components/BottomMenu';
import { MainMenu } from '../../components/MainMenu';



export function MainScreen() {
    return (
            <View style={styles.container}>
            <UserHeader />
            <View style={styles.centralContainer}>
                <MainMenu />
            </View>
            <BottomMenu />
            </View>
    );
}