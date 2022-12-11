import { Background } from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { TouchableHighlight } from 'react-native'
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { UserHeader } from '../../components/UserHeader';
import { BottomMenu } from '../../components/BottomMenu';

import meusDados from '../../assets/buttons-icons/meus-dados.png';
import internacoes from '../../assets/buttons-icons/internacoes.png';
import consultas from '../../assets/buttons-icons/consultas.png';
import prontoSocorro from '../../assets/buttons-icons/pronto-socorro.png';
import exames from '../../assets/buttons-icons/exames.png';
import ajuda from '../../assets/buttons-icons/ajuda.png';

export function MainScreen({ route, navigation }) {
    const userData = route.params.data;

    function handleExams() {
        navigation.navigate('exam', {data: userData});
    }
    function handleConsults() {
        navigation.navigate('consult', {data: userData});
    }

    return (
            <View style={styles.container}>
            <UserHeader username={userData['userName']}/>
            <View style={styles.centralContainer}>
                <View style={styles.containerMenu}>
                    <Text style={styles.titleText}>{"O que voce precisa hoje?"}</Text>
                    <TouchableOpacity>
                        <Image source={meusDados} style={styles.imageButton} />
                        <Text style={styles.textButton}>{"Meus Dados"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={internacoes} style={styles.imageButton} />
                        <Text style={styles.textButton}>{"internacoes"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleConsults}>
                        <Image source={consultas} style={styles.imageButton} />
                        <Text style={styles.textButton}>{"consultas"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={prontoSocorro} style={styles.imageButton} />
                        <Text style={styles.textButton}>{"pronto\nsocorro"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleExams}>
                        <Image source={exames} style={styles.imageButton} />
                        <Text style={styles.textButton}>{"exames"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={ajuda} style={styles.imageButton} />
                        <Text style={styles.textButton}>{"ajuda"}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <BottomMenu />
            </View>
    );
}