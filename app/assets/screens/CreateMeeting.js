import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, 
    Text, TextInput, Image, ScrollView, Button, Platform} from 'react-native';

import { AntDesign, FontAwesome, Ionicons, 
    MaterialCommunityIcons, Feather, Entypo} from '@expo/vector-icons';

import DateTimePicker from '@react-native-community/datetimepicker';

import { StatusBar } from 'expo-status-bar';



function CreateMeeting(props) {
    // section for setting up date and time logic
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
        setText(fDate + '\n' + fTime);
        console.log(fDate + '(' + fTime + ')'); 
        console.log(tempDate);
    
      }

      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      }
    

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.baseBackground}>

                {/* Select Image */}
                <View style = {styles.imageContainer}>
                    <AntDesign name="picture" size={65} color="black" />
                </View>

                {/* name of the event */}
                <View style = {styles.nameContainer}>
                    <Text style = {styles.Name}>Name</Text>
                    <TextInput style = {styles.actualName} placeholder = "Name Of Event" 
                        textAlignVertical = {"top","center"} textAlign = {'center'}/>

                </View>

                {/* Time for the event */}
                <View style = {styles.timeContainer}>
                    <Feather name="clock" size={65} color="black" />
                    <Text style = {{fontWeight:'bold', fontSize: 20}}>{text}</Text>
                    <View style = {styles.clock}>
                        <Button title='DatePicker' onPress={() => showMode('date')}/>
                        <Button title='Time' onPress={() => showMode('time')}/>

                        {show && (
                        <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode ={mode}
                        is24Hour={true}
                        display='default'
                        onChange={onChange}
                        />)}
                        
                    </View> 
                    <StatusBar style ="auto"/>
                </View>

                {/* Location */}
                <View style = {styles.locationContainer}>
                    <Entypo name="location-pin" size={65} color="black" />
                    <TouchableOpacity style = {styles.mapButton}>
                    <Text style = {styles.textLocation}>Open Map</Text>
                    </TouchableOpacity>  
                    
                </View>

                
                {/* description of event */}
                <View style = {styles.descriptionContainer}>
                <MaterialCommunityIcons name="text-box-search-outline" size={50} color="black" />
                    <TextInput style = {styles.description} placeholder = "Description Of Event" 
                        textAlignVertical = {"top","center"} textAlign = {'center'}
                        multiline={true}
                        numberOfLines={4}/>

                    
                </View>

                <TouchableOpacity style = {styles.createButton}>
                    <Text style = {styles.textLocation}>Create</Text>
                </TouchableOpacity>  
            </View>  
        </ScrollView>        
    );
}

const styles = StyleSheet.create({
    baseBackground:
    {
        backgroundColor: '#EEEEFF',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 60,
        paddingBottom: 60
    },
    imageContainer:
    {
        backgroundColor: 'transparent',
        width: 400,
        height: 150,
    },

    nameContainer:
    {
        backgroundColor: 'transparent',
        width: 395,
        height: 80,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
        paddingLeft: 19
    },
    Name:
    {
        fontSize: 23,
    },
    actualName:
    {
        backgroundColor: 'transparent',
        width: 250,
        height: 40,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        shadowColor: 'black',
        shadowOpacity: 100,
        shadowRadius: 5,
        elevation: 100,
        right: 45,
    },
    locationContainer:
    {
        backgroundColor: 'transparent',
        width: 400,
        height: 100,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
        paddingLeft:25,
    },
    mapButton:
    {
        width: 180,
        height: 35,
        backgroundColor: 'green',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        shadowColor: 'black',
        shadowOpacity: 100,
        shadowRadius: 5,
        elevation: 100,
        right: 100
    },
    descriptionContainer:
    {
        backgroundColor: 'transparent',
        width: 400,
        height: 150,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
        paddingLeft:29,
    },
    description:
    {
        backgroundColor: 'white',
        width: 280,
        height: 150,
        borderRadius: 7,
        borderColor: 'black',
        borderWidth: 1,
        shadowColor: 'black',
        shadowOpacity: 100,
        shadowRadius: 5,
        elevation: 100,
        right: 15
    },
    timeContainer:
    {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent',
        width: 400,
        height: 160,
        paddingRight:25,
    },
    clock:
    {
        backgroundColor: 'orange',
        width: 100,
        height: 60,
        justifyContent: 'center',
        right:0,
    },
    createButton:
    {
        width: '50%',
        height: 30,
        backgroundColor: 'grey',
        justifyContent: 'space-evenly',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        shadowColor: 'black',
        shadowOpacity: 100,
        shadowRadius: 5,
        elevation: 100,
        top: 20
    },
    textLocation:
    {
        alignSelf: 'center'
    },
})
export default CreateMeeting;