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

import {registerConsult} from '../../helper/db'

import {medCenters} from '../../data/medCenter.json'
import {doctors} from '../../data/doctor.json'

export function Consulta({ route, navigation }) {
  const userData = route.params.data;

  const [doctorOptions, setdoctorOptions] = useState<any[]>();
  const medCenterOptions = medCenters
  
  
  var specialtyOptions = [...new Set(doctors.map(function(val, index){
    return val['specialty']
  }))]

  specialtyOptions = ['-'].concat(specialtyOptions)

  console.log(specialtyOptions)

  const timeOptions = [
    "-",
    "7:00", 
    "7:30", 
    "8:00",
    "8:30", 
    "9:00", 
    "9:30", 
    "10:00", 
    "10:30", 
    "11:00",
    "11:30", 
    "13:00", 
    "13:30", 
    "14:00",
    "14:30", 
    "15:00", 
    "15:30", 
    "16:00", 
    "16:30", 
    "17:00",
    "17:30", 
    "18:00", 
    "18:30"
  ]


  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [medCenter, setMedCenter] = useState('');
  const [doctor, setDoctor] = useState('');

  const [regisError, setRegisError] = useState('');
  

  async function handleConsult() {
    setRegisError('')

    if(time == '' || time == '-'){
      setRegisError('Por favor, preencha todos os campos.')
      return
    }
    if(date.length != 10){
      setRegisError('Por favor, insira uma data valida.')
      return
    }

    var regisDate = (new Date(+date.split("/")[2], date.split("/")[1] - 1, +date.split("/")[0]))//.toISOString()

    if(regisDate <= (new Date())){
      setRegisError('Por favor, insira uma data valida.')
      return
    }

    regisDate.setHours(parseInt(time.split(":")[0]) - 3, parseInt(time.split(":")[1]), 0, 0);

    const regisDateForm = regisDate.toISOString()

    if (specialty == '' || specialty == '-' || medCenter == '' || medCenter == '-'){
      setRegisError('Por favor, preencha todos os campos.')
      return
    }

    const data = {
      "consultId": "-1",
      "specialty": specialty,
      "medicalCenterName": medCenter,
      "consultDatetime": regisDateForm,
      "registerDate": (new Date()).toISOString(),
      "lastRegisterUpdate": (new Date()).toISOString(),
      "patientCpf": userData.cpf,
      "doctorId": doctor
    }

    console.log(data)

    const result = await registerConsult(data)

    console.log(result)

    if (result.errorCode || result.error){
      setRegisError('Erro na agendamento de exame.')
      console.log(result.errorCode)
    }
    else {
      console.log('Consulta criado com sucesso') 
      navigation.navigate('mainScreen', {data: userData});
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

  function handleDateMask(event:any){
    setDate(maskDate(event))
  }

  function handleSpecialty(event:any){
    console.log(event)

    if (event != '-'){
      var specialtyDoctors = doctors.filter(function(val, index){
        return val['specialty'] == event
      })

      console.log(specialtyDoctors)
      
      if(specialtyDoctors.length > 0){
        setdoctorOptions(specialtyDoctors)
        setDoctor(specialtyDoctors[0]['id'])
      }
      
    }
    
    setSpecialty(event)
  }

  function renderExamError(){
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
                  <Heading title="Agendamento de Consulta" style={styles.titleCadastro} />

                  <SafeAreaView>
                    <SafeAreaView>
                      <View style={{width:"100%"}}>
                        <TransparentInput placeholder="Data" 
                          user  
                          onChangeText={handleDateMask}
                          defaultValue={date}
                          value={date}/>
                      </View>

                      <View style={{width:"30%"}}>
                          <Picker
                            style={TransparentInputStyles.select} 
                            onValueChange={newTime => setTime(newTime)}>
                              {timeOptions?.map(item => (<Picker.Item label={item} value={item} />))}
                          </Picker>
                      </View>

                      <View style={{width:"100%"}}>
                        <Picker
                          style={TransparentInputStyles.select} 
                          onValueChange={handleSpecialty}>
                            {specialtyOptions?.map(item => (<Picker.Item label={item} value={item} />))}
                        </Picker>
                      </View>

                      <View style={{width:"100%"}}>
                        <Picker
                          style={TransparentInputStyles.select} 
                          onValueChange={newDoctor => setDoctor(newDoctor)}>
                            {doctorOptions?.map(item => (<Picker.Item label={item['name']} value={item['id']} />))}
                        </Picker>
                      </View>

                      <View style={{width:"100%"}}>
                        <Picker
                          style={TransparentInputStyles.select} 
                          onValueChange={newMedCenter => setMedCenter(newMedCenter)}>
                            {medCenterOptions?.map(item => (<Picker.Item label={item} value={item} />))}
                        </Picker>
                      </View>
                      <View>
                        {renderExamError()}
                      </View>
                      <Button text="Agendar" onPress={handleConsult}/>

                    </SafeAreaView>
                  </SafeAreaView>
              
          </SafeAreaView>
          <Image source={footer} style={styles.footerImg} />
    </Background>
  );
}
