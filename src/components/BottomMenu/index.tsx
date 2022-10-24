import { View, Text, Image } from 'react-native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import homeIcon from '../../assets/buttons-icons/home.png';
import calendarIcon from '../../assets/buttons-icons/calendar.png';
import optionsIcon from '../../assets/buttons-icons/more-options.png';
import { Heading } from '../Heading';

export function BottomMenu() {
    return (
        <View style={styles.container}>
            <Image source={homeIcon} style={styles.imageButton} />
            <Image source={calendarIcon} style={styles.imageButton} />
            <Image source={optionsIcon} style={styles.imageButton} />
        </View>
  )
}