import { Image, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

import { styles } from './styles';
import coverImg from '../../assets/welcome-image.png';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function Welcome() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('login');
  }

  function handleMainScreen() {
    navigation.navigate('mainScreen');
    }

    function handleCadastro() {
        navigation.navigate('cadastro');
    }

    return (
        
    <Background>
      <SafeAreaView style={styles.container}>
                <Heading title={"Bora trazer seus dados" + '\n' + "para a Rede D'or?"}/>

        <SafeAreaView>
            <Button text="Se Cadastrar" onPress={handleCadastro} />
            <Button text="Já tenho conta!" secondary onPress={handleLogin} />
                    <Button text="AJUDA" alert onPress={handleMainScreen}/>
        </SafeAreaView>

                <SafeAreaView><Image source={coverImg} style={styles.coverImage} /></SafeAreaView>
      </SafeAreaView>
    </Background>
            
  );
}
