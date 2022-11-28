import { Image, View, Picker } from 'react-native';
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

import { TransparentInputStyles } from '../../components/TransparentInput/styles';

import {cadastrar} from '../../helper/db'

export function Cadastro() {
  const navigation = useNavigation();

  const convenioOptions=["Convenio", "Conv1", "Conv2"]
  const planoOptions=["Plano", "Plano1", "Plano2"]

  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [birth, setBirth] = useState('');
  const [convenio, setConvenio] = useState('');
  const [plano, setPlano] = useState('');

  async function handleCadastro() {
    console.log(name, email, cpf, senha, birth, convenio, plano)

    const result = cadastrar({
      'username'        : name,
      'cpf'             : cpf,
      'email'           : email,
      'password'        : senha,
      'healthinsurance' : convenio,
      'plan'            : plano
    })

    if (result.errorCode){
      console.log('Erro na criacao do usuario')
      console.log(result.errorCode)
    }
    else {
      console.log('Usuario criado com sucesso') 
    }
  }

  function maskDate(date:string) {
    date = date.replace(/\D/g, "")

    date = date.slice(0, 8)

    date = date.replace(/(\d{2})(\d)/, "$1/$2")
    date = date.replace(/(\d{2})(\d)/, "$1/$2")
    date = date.replace(/(\d{4})(\d{1,2})$/, "$1/$2")

    return date
  }

  function handleBirthMask(event:any){
    setBirth(maskDate(event))
  }
  
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

  return (
    <Background secondary>
              <Image source={bgCadastro} style={styles.bgCadastro} />
              <SafeAreaView style={styles.container}>
                  <Heading title="Cadastro" style={styles.titleCadastro} />

                <SafeAreaView>
                  <TransparentInput placeholder="Digite seu nome" 
                    user  
                    onChangeText={newName => setName(newName)}
                    defaultValue={name}
                    value={name}/>
                  <TransparentInput placeholder="Digite seu email" 
                    user  
                    onChangeText={newEmail => setemail(newEmail)}
                    defaultValue={email}
                    value={email}/>
                  <TransparentInput placeholder="Digite seu CPF" 
                    cpf 
                    onChangeText={handleCpfMask}
                    defaultValue={cpf}
                    value={cpf}/>
                  <TransparentInput placeholder="Digite sua senha" 
                    cpf 
                    onChangeText={newSenha => setSenha(newSenha)}
                    defaultValue={senha}
                    value={senha}
                    secureTextEntry={true}/>
                  <TransparentInput placeholder="Data de Nascimento" 
                    birth 
                    onChangeText={handleBirthMask}
                    defaultValue={birth}
                    value={birth}/>
                  <SafeAreaView style={styles.flexSelect}>

                  <View style={{width:"55%"}}>
                    <Picker
                      style={TransparentInputStyles.select} 
                      onValueChange={newConv => setConvenio(newConv)}>
                        {convenioOptions?.map(item => (<Picker.Item label={item} value={item} />))}
                    </Picker>
                  </View>

                  <View style={{width:"40%"}}>
                    <Picker
                      style={TransparentInputStyles.select} 
                      onValueChange={newPlano => setPlano(newPlano)}>
                        {planoOptions?.map(item => (<Picker.Item label={item} value={item} />))}
                    </Picker>
                  </View>
                   
                  </SafeAreaView>
                  <Button text="Entrar" onPress={handleCadastro}/>
              </SafeAreaView>
              
          </SafeAreaView>
          <Image source={footer} style={styles.footerImg} />
    </Background>
  );
}
