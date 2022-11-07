import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

import { styles } from './styles';
import coverImg from '../../assets/welcome-image.png';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function Welcome() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('login');
  }

  function handleMainScreen() {
    navigation.navigate('mainScreen');
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Heading title="Bora trazer seus dados para a Rede D'or?" />

        <SafeAreaView>
          <Button text="Bora!" onPress={handleMainScreen} />
          <Button text="Já tenho conta!" secondary onPress={handleLogin} />
        </SafeAreaView>

        <Image source={coverImg} style={styles.coverImage} />
      </SafeAreaView>
    </Background>
  );
}
