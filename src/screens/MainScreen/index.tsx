import { Background } from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { TouchableHighlight } from 'react-native'
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { UserHeader } from '../../components/UserHeader';
import { BottomMenu } from '../../components/BottomMenu';

import homeIcon from '../../assets/buttons-icons/home.png';
import calendarIcon from '../../assets/buttons-icons/calendar.png';
import optionsIcon from '../../assets/buttons-icons/more-options.png';

import meusDados from '../../assets/buttons-icons/meus-dados.png';
import internacoes from '../../assets/buttons-icons/internacoes.png';
import consultas from '../../assets/buttons-icons/consultas.png';
import prontoSocorro from '../../assets/buttons-icons/pronto-socorro.png';
import exames from '../../assets/buttons-icons/exames.png';
import ajuda from '../../assets/buttons-icons/ajuda.png';

import {getExamsByCpf, getConsultsByCpf} from '../../helper/db'

export function MainScreen({ route, navigation }) {
    const userData = route.params.data;

    async function getSchedules(cpf:string) {
        const exams = JSON.parse(await getExamsByCpf(cpf))

        const consults = JSON.parse(await getConsultsByCpf(cpf))
    
        return exams.concat(consults)
    }

    async function handleExams() {
        navigation.navigate('exam', {data: userData});
    }
    function handleConsults() {
        navigation.navigate('consult', {data: userData});
    }
    async function handleSchedule() {
        navigation.navigate('schedule', {data: userData, schedules: await getSchedules(userData.cpf)});
    }

    return (
            <View style={styles.container}>
            <UserHeader username={userData['userName']}/>
            <View style={styles.centralContainer}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.titleText}>{"O que voce precisa hoje?"}</Text></View>
                <View style={styles.containerMenu}>
                    
                    <TouchableOpacity >
                        <Image source={meusDados} style={styles.imageButton} />
                        <Text style={styles.textButton}>{"Meus Dados"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={internacoes} style={styles.imageButton} />
                        <Text style={styles.textButton}>{"internacoes"}</Text>
                    </TouchableOpacity>

                </View><View style={styles.containerMenu}>
                        


                    <TouchableOpacity onPress={handleConsults}>
                        <Image source={consultas} style={styles.imageButton} />
                        <Text style={styles.textButton}>{"consultas"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={prontoSocorro} style={styles.imageButton} />
                        <Text style={styles.textButton}>{"pronto\nsocorro"}</Text>
                    </TouchableOpacity>

                </View><View style={styles.containerMenu}>
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
            <View style={styles.containerBottom}>
                <TouchableOpacity><Image source={homeIcon} style={styles.imageButtonBottom} /></TouchableOpacity>
                <TouchableOpacity onPress={handleSchedule}><Image source={calendarIcon} style={styles.imageButtonBottom} /></TouchableOpacity>
                <TouchableOpacity><Image source={optionsIcon} style={styles.imageButtonBottom} /></TouchableOpacity>
            </View>
            </View>
    );
}