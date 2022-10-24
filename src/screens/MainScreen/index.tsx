import { Background } from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { UserHeader } from '../../components/UserHeader';


export function MainScreen() {
    return (
        <Background>
                <UserHeader />
        </Background>
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