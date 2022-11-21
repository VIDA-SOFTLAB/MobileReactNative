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

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');



  function maskCpf(cpf:string) {
    cpf = cpf.replace(/\D/g, "")

    cpf = cpf.slice(0, 11)

    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

    return cpf
  }

  function handleCpfMask(event:any){
    setCpf(maskCpf(event))
  }

  async function handleLogin() {
    const loginResult = await login(cpf, senha)

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

                  <Input placeholder="CPF" placeholderTextColor="#BBB"
                  onChangeText={handleCpfMask}
                  defaultValue={cpf}
                  value={cpf}
                  dark
          />

          <Input placeholder="Senha" placeholderTextColor="#BBB"
                 onChangeText={newSenha => setSenha(newSenha)} 
                 defaultValue={senha} 
                 secureTextEntry={true}
                 dark
          />

          <Button text="Entrar" onPress={handleLogin} clear/>
        </SafeAreaView>

        <Image source={logoImg} style={styles.logoImage} />
      </SafeAreaView>
    </Background>
  );
}
