import { Background } from '../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { TouchableHighlight } from 'react-native'
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { UserHeader } from '../../components/UserHeader';
import { BottomMenu } from '../../components/BottomMenu';
import Message from "react-message-block";

import homeIcon from '../../assets/buttons-icons/home.png';
import calendarIcon from '../../assets/buttons-icons/calendar.png';
import optionsIcon from '../../assets/buttons-icons/more-options.png';

import {doctors} from '../../data/doctor.json'
import React from 'react';

export function Agenda({ route, navigation }) {

    function handleMainScreen() {
        navigation.navigate('mainScreen', {data: userData});
    }

    console.log(doctors.filter(function(val, index){return val['id'] == parseInt('1')})[0]['name'])

    const userData = route.params.data;
    const schedulesData = route.params.schedules;

    var schedulesSort = []

    if(schedulesData.length > 0){
        schedulesData.map(function(val, index){
            if('consultDatetime' in val){
                val['schDatetime'] = val['consultDatetime']
            }
            if('examDatetime' in val){
                val['schDatetime'] = val['examDatetime']
            }
        })
    
        schedulesSort = schedulesData.sort((a, b) => a.schDatetime.localeCompare(b.schDatetime))

        schedulesSort.map(function(scheVal, index){
            if('doctorId' in scheVal && scheVal['doctorId'] != ''){
                console.log(scheVal['doctorId'])

                const filteredDoctor = doctors.filter(function(val, index){
                    return val['id'] == parseInt(scheVal['doctorId'])
                })

                scheVal['doctorName'] = filteredDoctor[0]['name']
            }
        })
    }

    const schedules = schedulesSort

    console.log(schedules)

    return (
            <View style={styles.container}>
            <UserHeader username={userData['userName']}/>
            <ScrollView style={styles.centralContainer}>
            
            {schedules.map(function(object, i){
                return(
                    <Message type="info">
                        <Text style={styles.userInfo}>
                            {object['schDatetime']}
                            {'\n'}
                            {object['medicalCenterName']}
                            {'\n'}
                            {object['specialty']}
                            {'\n'}
                            {'doctorName' in object ? object['doctorName'] : ''}
                        </Text>
                    </Message>    
                );
            })}
            </ScrollView>
            <View style={styles.containerBottom}>
                <TouchableOpacity onPress={handleMainScreen}><Image source={homeIcon} style={styles.imageButtonBottom} /></TouchableOpacity>
                <TouchableOpacity><Image source={calendarIcon} style={styles.imageButtonBottom} /></TouchableOpacity>
                <TouchableOpacity><Image source={optionsIcon} style={styles.imageButtonBottom} /></TouchableOpacity>
            </View>
            </View>
    );
}