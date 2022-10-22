import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

import { styles } from './styles';
import loginImg from '../../assets/login-image.png';
import logoImg from '../../assets/logo-rededor.png';

export function Logado() {
  const navigation = useNavigation();

  function handleMainScreen() {
    navigation.navigate('mainScreen');
  }

  return (
    <Background secondary>
      <SafeAreaView style={styles.container}>
        <Heading title="Oba! Seus dados já foram sincronizados 😉" />

        <SafeAreaView>
          <Image source={loginImg} style={styles.loginImage} />
          <Button text="Entrar" onPress={handleMainScreen} />
        </SafeAreaView>

        <Image source={logoImg} style={styles.logoImage} />
      </SafeAreaView>
    </Background>
  );
}
