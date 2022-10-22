import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

import { styles } from './styles';
import coverImg from '../../assets/login-cover.png';
import { Background } from '../../components/Background';

export function Login() {
  return (
    <Background>
      <Heading title="Bora trazer seus dados para a Rede D'or?" />

      <SafeAreaView style={styles.buttonsContainer}>
        <Button text="Bora!" />
        <Button text="Já tenho conta!" secondary />
      </SafeAreaView>

      <Image source={coverImg} style={styles.coverImage} />
    </Background>
  );
}
