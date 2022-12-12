import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import userIcon from '../../assets/user-icon-default.png';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { Heading } from '../Heading';
import { TextInput, TextProps } from 'react-native';


interface NewTextInputProps extends TextProps{
    username?: string;
}

function UserInfos({ username }: NewTextInputProps) {
    return (
        <Text style={styles.userInfo}>
            <br />
                {"Ola, " + username['username']}
            </Text>
    )
}

export function UserHeader(username:string) {
  return (
      <View style={styles.header}>
          <Image source={userIcon} style={styles.userIcon} />
          <UserInfos username={username}/>
      </View>
  )
}