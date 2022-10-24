import { Background } from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { UserHeader } from '../../components/UserHeader';
import { BottomMenu } from '../../components/BottomMenu';



export function MainScreen() {
    return (
            <View style={styles.container}>
                <UserHeader />
            <BottomMenu />
            </View>
    );
}

/*
  
 <View
                style={{
                    backgroundColor: 'red',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 20,
                    marginBottom: 40,
                }}
            >
            </View>

*/