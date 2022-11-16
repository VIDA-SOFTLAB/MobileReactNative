import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { TransparentInput } from '../../components/TransparentInput';

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
                  <TransparentInput placeholder="Digite seu nome" user/>
                  <TransparentInput placeholder="Digite seu CPF" cpf/>
                  <TransparentInput placeholder="Data de Nascimento" birth/>
                  <SafeAreaView style={styles.flexSelect}>
                      <View style={{width:"55%"}}><TransparentInput placeholder="Data de Nascimento" select options={["Convênio", "exemp2", "exemp3"]} /></View>
                      <View style={{ width: "40%" }}><TransparentInput placeholder="Data de Nascimento" select options={["Plano", "exemp2", "exemp3"]} /></View>
                  </SafeAreaView>
                  <Button text="Entrar" onPress={handleCadastro}/>
              </SafeAreaView>
              
          </SafeAreaView>
          <Image source={footer} style={styles.footerImg} />
    </Background>
  );
}
