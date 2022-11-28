import { TextInput, TextInputProps, Picker } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import userImg from '../../assets/user-input.png';
import calendarImg from '../../assets/calendar-input.png';
import cpfInput from '../../assets/cpf-input.png';
import { TransparentInputStyles } from './styles';

interface NewTextInputProps extends TextInputProps {
    user?: boolean;
    cpf?: boolean;
    birth?: boolean;
    select?: boolean;
    options?: string[];
}

export function TransparentInput({ user, cpf, birth, select, options, ...rest }: NewTextInputProps) {
    if (!select && (user || cpf || birth)) {
        return (
            <SafeAreaView style={TransparentInputStyles.container}>
                <Image source={user ? userImg : (cpf ? cpfInput : (birth ? calendarImg : null))} style={TransparentInputStyles.inputImage} />
                <TextInput placeholderTextColor="#FFF" style={TransparentInputStyles.input} {...rest} />
            </SafeAreaView>
        );
    } else if (select) {
        /*onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}*/
        /*selectedValue={selectedValue}*/
        return (
            <Picker
                style={TransparentInputStyles.select}>
                {options?.map(item => (<Picker.Item label={item} />))}
            </Picker>
            )
    }
    return (
        <SafeAreaView style={TransparentInputStyles.container}>
            <TextInput placeholderTextColor="#FFF" style={TransparentInputStyles.input} {...rest} />
        </SafeAreaView>
        )
}
