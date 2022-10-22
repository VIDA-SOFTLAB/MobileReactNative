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
      <Heading title="Bora trazer seus dados para a Rede D'or?" />

      <SafeAreaView style={styles.buttonsContainer}>
        <Button text="Bora!" onPress={handleLogin} />
        <Button text="Já tenho conta!" secondary onPress={handleMainScreen} />
      </SafeAreaView>

      <Image source={coverImg} style={styles.coverImage} />
    </Background>
  );
}
