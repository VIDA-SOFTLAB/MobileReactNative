import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';

import { styles } from './styles';
import loginImg from '../../assets/login-image.png';
import logoImg from '../../assets/logo-rededor.png';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import {login} from '../../helper/firebase'

export function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin() {
    const loginResult = await login(email, senha)

    if (loginResult['status']){
      navigation.navigate('logado');
    }
    else{
      if (loginResult.errorCode == 'auth/wrong-password'){
        console.log('errou a senha')
      }
      
      if (loginResult.errorCode == 'auth/user-not-found') {
        console.log('usuario nao encontrado')
      }
    }
  }

  return (
    <Background secondary>
      <SafeAreaView style={styles.container}>
        <Heading title="Apenas nos informe seu CPF abaixo:" />

        <SafeAreaView>
          <Image source={loginImg} style={styles.loginImage} />

          <Input placeholder="Email:" 
                 onChangeText={newEmail => setEmail(newEmail)} 
                 defaultValue={email}
          />

          <Input placeholder="Senha:" 
                 onChangeText={newSenha => setSenha(newSenha)} 
                 defaultValue={senha} 
                 secureTextEntry={true}
          />

          <Button text="Entrar" onPress={handleLogin} />
        </SafeAreaView>

        <Image source={logoImg} style={styles.logoImage} />
      </SafeAreaView>
    </Background>
  );
}
