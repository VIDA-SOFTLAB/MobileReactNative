import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';

import { styles } from './styles';
import bgCadastro from '../../assets/background-cadastro.png';
import footer from '../../assets/footer-cadastro.png';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

import {login} from '../../helper/firebase'

export function Cadastro() {
  const navigation = useNavigation();

  async function handleCadastro() {
    
  }

  return (
    <Background secondary>
              <Image source={bgCadastro} style={styles.bgCadastro} />
              <SafeAreaView style={styles.container}>
                  <Heading title="Cadastro" style={styles.titleCadastro} />
              

                <SafeAreaView>
                          <Input placeholder="CPF" placeholderTextColor="#BBB" dark />

                  <Input placeholder="Senha" placeholderTextColor="#BBB" dark/>

                  <Button text="Entrar" onPress={handleCadastro} clear/>
              </SafeAreaView>
              
          </SafeAreaView>
          <Image source={footer} style={styles.footerImg} />
    </Background>
  );
}
