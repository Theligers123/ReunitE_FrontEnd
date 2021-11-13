import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, 
    Text, TextInput, Image} from 'react-native';

function WelcomeScreen(props) {
    return (
        <View style={styles.baseBackground}>
            {/* <Image source={require("../assets/icon.png")}/> */}
            <View style = {styles.loginContainer}>

                <Text style = {styles.header}>Sign In</Text>

                <TextInput style= {styles.inputUsername} placeholder= "Username"/>
                <TextInput style= {styles.inputPassword} placeholder= "Password"/>

                <TouchableOpacity style = {styles.loginButton}>
                    <Text style = {styles.textLocation}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.registerButton}>
                    <Text style = {styles.textLocation}>Register</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    baseBackground:
    {
        backgroundColor: 'gold',
            flex: 1,
            justifyContent: 'center',
            alignItems:'center',
            alignContent: 'center',
    },
    loginContainer:
    {
        
        backgroundColor: 'blue',
        borderRadius: 20,
        width: '85%',
        height: 300,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
        
        
    },

    header:
    {
        textAlign: 'center',
        width: 250,
        height: 40,
        fontSize: 30,
    },

    loginButton:
    {
        width: '50%',
        height: 30,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'space-evenly',
    },

    registerButton:
    {
        width: '50%',
        height: 30,
        backgroundColor: 'yellow',
        borderRadius: 20,
        justifyContent: 'space-evenly',
        
    },
    textLocation:
    {
        alignSelf: 'center'
    },
    inputUsername:
    {
        borderColor: 'black',
        borderWidth: 1,
        width: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        textAlign: 'center',

    },
    inputPassword:
    {
        borderColor: 'black',
        borderWidth: 1,
        width: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        textAlign: 'center',
    },
})

export default WelcomeScreen;