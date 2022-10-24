import { View, Text, Image } from 'react-native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { TouchableHighlight } from 'react-native'
import { styles } from './styles';
import homeIcon from '../../assets/buttons-icons/home.png';
import meusDados from '../../assets/buttons-icons/meus-dados.png';
import internacoes from '../../assets/buttons-icons/internacoes.png';
import consultas from '../../assets/buttons-icons/consultas.png';
import prontoSocorro from '../../assets/buttons-icons/pronto-socorro.png';
import exames from '../../assets/buttons-icons/exames.png';
import ajuda from '../../assets/buttons-icons/ajuda.png';
import { Heading } from '../Heading';

export function MainMenu() {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{"O que voce precisa hoje?"}</Text>
            <TouchableOpacity>
                <Image source={meusDados} style={styles.imageButton} />
                <Text style={styles.textButton}>{"Meus Dados"}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={internacoes} style={styles.imageButton} />
                <Text style={styles.textButton}>{"internacoes"}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={consultas} style={styles.imageButton} />
                <Text style={styles.textButton}>{"consultas"}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={prontoSocorro} style={styles.imageButton} />
                <Text style={styles.textButton}>{"pronto\nsocorro"}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={exames} style={styles.imageButton} />
                <Text style={styles.textButton}>{"exames"}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={ajuda} style={styles.imageButton} />
                <Text style={styles.textButton}>{"ajuda"}</Text>
            </TouchableOpacity>
        </View>
  )
}