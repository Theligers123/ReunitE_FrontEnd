import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, 
    Text, TextInput, Image} from 'react-native';

import { AntDesign, FontAwesome, Ionicons, 
    MaterialCommunityIcons, Feather, Entypo} from '@expo/vector-icons';

    

function CreateMeeting(props) {
    return (

        <View style = {styles.baseBackground}>

            {/* name of the event */}
            <View style = {styles.nameContainer}>
            <FontAwesome name="sort-alpha-asc" size={65} color="black" />
                <TextInput style = {styles.Name} placeholder = "Name Of Event" 
                    textAlignVertical = {"top","center"} textAlign = {'center'}/>

            </View>

            {/* Location */}
            <View style = {styles.locationContainer}>
                <Entypo name="location-pin" size={65} color="black" />

                
            </View>

            {/* description of event */}
            <View style = {styles.descriptionContainer}>
            <MaterialCommunityIcons name="text-box-search-outline" size={65} color="black" />
                <TextInput style = {styles.description} placeholder = "Description Of Event" 
                    textAlignVertical = {"top","center"} textAlign = {'center'}/>

                
            </View>

            {/* Time for the event */}
            <View style = {styles.timeContainer}>
                <Feather name="clock" size={65} color="black" />

                
            </View>

            {/* Select Image */}
            <View style = {styles.imageContainer}>
                <AntDesign name="picture" size={65} color="black" />

                
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    baseBackground:
    {
        backgroundColor: 'purple',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 60,
        paddingBottom: 60
    },

    nameContainer:
    {
        backgroundColor: 'green',
        width: 320,
        height: 80,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        justifyContent: 'space-between'
    },
    Name:
    {
        backgroundColor: 'white',
        width: 200,
        height: 40,
        borderRadius: 7,
    },
    locationContainer:
    {
        backgroundColor: 'blue',
        width: 400,
        height: 80,
    },

    descriptionContainer:
    {
        backgroundColor: 'red',
        width: 320,
        height: 80,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        justifyContent: 'space-between'
    },
    description:
    {
        backgroundColor: 'white',
        width: 220,
        height: 80,
        borderRadius: 7,
    },
    timeContainer:
    {
        backgroundColor: 'yellow',
        width: 400,
        height: 80,
    },
    imageContainer:
    {
        backgroundColor: 'orange',
        width: 400,
        height: 80,
    },

})
export default CreateMeeting;