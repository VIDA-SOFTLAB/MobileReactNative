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
import { Text } from 'react-native';

import { TransparentInputStyles } from '../../components/TransparentInput/styles';

import {register, getUserByCpf} from '../../helper/db'

export function Cadastro() {
  const navigation = useNavigation();

  const convenioOptions=["-", "Convenio", "Convenio 1", "Convenio 2"]
  const planoOptions=["-", "Plano Bronze", "Plano Prata", "Plano Ouro"]
  const states = {   
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goías',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraíma',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
  }

  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [birth, setBirth] = useState('');
  const [convenio, setConvenio] = useState('');
  const [plano, setPlano] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');

  const [regisError, setRegisError] = useState('');
  

  async function handleCadastro() {
    console.log((new Date(+birth.split("/")[2], birth.split("/")[1] - 1, +birth.split("/")[0])).toISOString())
    console.log(name, email, cpf, senha, birth, convenio, plano, phone)
    console.log(uf, states[uf])

    //TEMP
    const data = {
      "Name": name,
      "Email": email,
      "Password": senha,
      "Rg": "-1",
      "Cpf": cpf.replace(/\D/g, ""),
      "UserName": name,
      "PhoneNumber": phone,
      "birthDate": birth == '' ? '' : (new Date(+birth.split("/")[2], birth.split("/")[1] - 1, +birth.split("/")[0])).toISOString(),
      "registerDate": (new Date()).toISOString(),
      "lastRegisterUpdate": (new Date()).toISOString(),
      "Adress": {
          "Id": "-1",
          "ZipCode": cep,
          "District": city,
          "Fu": uf == '' ? 'AC' : uf,
          "Locality": uf == '' ? 'Acre' : states[uf],
          "PublicPlace": district,
          "Number": number,
          "AdressComplement": complement != '' ? complement : "Sem complemento"
      },
      "UserId": "-1",
      "IdAdministrador": "1"
    }

    if (name == '' || email == '' || senha == '' || cpf == '' || phone == '' || birth == '' ||
        cep == '' || city == '' || district == '' || number == ''){
          setRegisError('Os campos com * são obrigatórios.')
    }
    else {
      const userInfo = JSON.parse(await getUserByCpf(cpf))
    
      if (userInfo.status == null){
        setRegisError('CPF já cadastrado.')
      }
      else{
        const result = await register(data)

        console.log(result)
        if (result.errorCode || result.error){
          setRegisError('Erro na criação do usuario.')
          console.log(result.errorCode)
        }
        else {
          console.log('Usuario criado com sucesso') 
          navigation.navigate('login');
        }
        
      }      
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

  function maskPhone(phone:string) {
    phone = phone.replace(/\D/g, "")

    phone = phone.slice(0, 11)

    return phone
  }

  function handlePhoneMask(event:any){
    setPhone(maskPhone(event))
  }

  function maskCep(cep:string) {
    cep = cep.replace(/\D/g, "")

    cep = cep.slice(0, 8)

    return cep
  }

  function handleCepMask(event:any){
    setCep(maskCep(event))
  }


  function maskNumber(number:string) {
    number = number.replace(/\D/g, "")

    number = number.slice(0, 5)

    return number
  }

  function handleNumberMask(event:any){
    setNumber(maskNumber(event))
  }

  function renderLoginError(){
    if (regisError != ''){
      return (
        <Text>
          {regisError}
        </Text>  
      )
    }
  }

  return (
    <Background secondary>
              <Image source={bgCadastro} style={styles.bgCadastro} />
              <SafeAreaView style={styles.container}>
                  <Heading title="Cadastro" style={styles.titleCadastro} />

                <SafeAreaView>
                  <TransparentInput placeholder="Digite seu nome*" 
                    user  
                    onChangeText={newName => setName(newName)}
                    defaultValue={name}
                    value={name}/>
                  <TransparentInput placeholder="Digite seu email*" 
                    user  
                    onChangeText={newEmail => setemail(newEmail)}
                    defaultValue={email}
                    value={email}/>
                  <TransparentInput placeholder="Digite seu CPF*" 
                    cpf 
                    onChangeText={handleCpfMask}
                    defaultValue={cpf}
                    value={cpf}/>
                  <TransparentInput placeholder="Digite sua senha*" 
                    cpf 
                    onChangeText={newSenha => setSenha(newSenha)}
                    defaultValue={senha}
                    value={senha}
                    secureTextEntry={true}/>
                  <TransparentInput placeholder="Data de Nascimento*" 
                    birth 
                    onChangeText={handleBirthMask}
                    defaultValue={birth}
                    value={birth}/>

                  <TransparentInput placeholder="Contato*" 
                    user 
                    onChangeText={handlePhoneMask}
                    defaultValue={phone}
                    value={phone}/>

                  <TransparentInput placeholder="CEP*" 
                    user 
                    onChangeText={handleCepMask}
                    defaultValue={cep}
                    value={cep}/>

                  <View style={{width:"40%"}}>
                    <Picker
                      style={TransparentInputStyles.select} 
                      onValueChange={newUf => setUf(newUf)}>
                        {Object.keys(states)?.map(item => (<Picker.Item label={item} value={item} />))}
                    </Picker>
                  </View>

                  <TransparentInput placeholder="Cidade*" 
                    user 
                    onChangeText={newCity => setCity(newCity)}
                    defaultValue={city}
                    value={city}/>

                  <TransparentInput placeholder="Bairro*" 
                    user 
                    onChangeText={newDistrict => setDistrict(newDistrict)}
                    defaultValue={district}
                    value={district}/>

                  <TransparentInput placeholder="Número*" 
                    user 
                    onChangeText={handleNumberMask}
                    defaultValue={number}
                    value={number}/>

                  <TransparentInput placeholder="Complemento" 
                    user 
                    onChangeText={newComplement => setComplement(newComplement)}
                    defaultValue={complement}
                    value={complement}/>

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
                  <View>
                    {renderLoginError()}
                  </View>
                  <Button text="Entrar" onPress={handleCadastro}/>
              </SafeAreaView>
              
          </SafeAreaView>
          <Image source={footer} style={styles.footerImg} />
    </Background>
  );
}
