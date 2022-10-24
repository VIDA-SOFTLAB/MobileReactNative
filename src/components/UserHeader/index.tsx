import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import userIcon from '../../assets/user-icon-default.png';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { Heading } from '../Heading';


function UserInfos() {
    return (
            <Text style={styles.userInfo}>
            {"Ola, usuario"}
            {"\n"}
            {"Cartao SUS: 000000"}
            </Text>
    )
}

export function UserHeader() {
  return (
      <View style={styles.header}>
          <Image source={userIcon} style={styles.userIcon} />
          <UserInfos />
      </View>
  )
}