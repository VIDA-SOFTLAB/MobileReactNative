import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';

import { styles } from './styles';
import loginImg from '../../assets/login-image.png';
import logoImg from '../../assets/logo-rededor.png';

export function Login() {
  return (
    <Background secondary>
      <Heading title="Apenas nos informe seu CPF abaixo:" />

      <Image source={loginImg} style={styles.loginImage} />
      <SafeAreaView style={styles.container}>
        <Input placeholder="CPF:" keyboardType="number-pad" maxLength={11} />
        <Button text="Entrar" />
      </SafeAreaView>

      <Image source={logoImg} style={styles.logoImage} />
    </Background>
  );
}
