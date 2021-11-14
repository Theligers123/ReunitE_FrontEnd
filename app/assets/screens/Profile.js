import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, 
    Text, TextInput, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


    function WelcomeScreen(props) {
        return (
            <View style = {styles.base}>
                {/* title of the page */}
                <Image source = {require('../ReunitE1.png')} 
                style = {styles.pic}/>

                {/* UPcontainer */}
                <View style = {styles.UPcontainer}>
                        {/* section to just show the username */}
                    <Text style = {styles.usernameSubHeading}>User Name</Text>
                    <View style = {styles.showUserName}>
                        <Text>TheLigers</Text>
                    </View>
                    {/* section to input phone numbers */}
                    <Text style = {styles.PhoneSubHeading}>Phone Number</Text>
                    <TextInput placeholder= "Phone number" style= {styles.PhoneNumber}/>
                </View>

                <View style = {styles.profPic}>
                    {/* profile pic */}
                    <View>

                    </View>
                </View>
                


                {/* Description container */}
                <View style = {styles.descriptionContainer}>
                        {/* section to look at your description */}
                    <Text style = {styles.DescriptionSubHeading}>Description</Text>
                    <View style = {styles.actualDescription}/>
                </View>

                {/* Tags Container */}
                <View style = {styles.tagsContainer}>
                        {/* section to look at your tags or interest */}
                    <Text style = {styles.TagSubHeading}>Tags or interest</Text>
                    <View style = {styles.actualTags}/>
                </View>



                {/* button for editing profile */}
                <TouchableOpacity style = {styles.editProfile}>
                    {/* icon editing */}
                <AntDesign name="edit" size={20} color="black" />
                    <Text style = {styles.editProfileText}>Edit profile</Text>
                </TouchableOpacity>

                {/* button for loging out */}
                <TouchableOpacity style = {styles.logOut}>
                    {/* icon editing    */}
                    <AntDesign name="logout" size={20} color="black"/>
                    <Text style = {styles.logOutText}>Log Out</Text>
                </TouchableOpacity>

                {/* the taskbar is the view */}
                <View style = {styles.taskbar}>
                    {/* these are the buttons on the taskbar */}
                    <TouchableOpacity>
                    <FontAwesome name="bars" size={50} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <FontAwesome name="home" size={50} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Ionicons name="person-circle-outline" size={50} color="black" />
                    </TouchableOpacity>
                </View>


                



            </View>
        );
    }




    const styles = StyleSheet.create({
        base: 
        {
            flex: 1,
            backgroundColor: 'gold',
            justifyContent: 'center',
            alignItems:'center',
            
        },
        profPic:
        {
            backgroundColor: 'red',
            width: 150,
            height: 150,
            alignContent:'center',
            position: 'absolute',
            left: 0,
            top: 100,
        },
        UPcontainer:
        {
            backgroundColor: 'green',
            width: 200,
            height: 200,
            alignContent:'center',
            position: 'absolute',
            right: 0,
            top: 100,
        },
        usernameSubHeading:
        {
            width: 200,
            height: 50,
            fontSize: 20,

        },
        showUserName:
        {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 20,
            width: '75%',
            height: 30,
            padding: 3,
            alignItems:'center',

        },
        PhoneSubHeading:
        {
            width: 200,
            height: 50,
            fontSize: 20,
        },
        PhoneNumber:
        {
            borderColor: 'black',
            borderWidth: 1,
            width: "75%",
            backgroundColor: 'white',
            borderRadius: 20,
            height: 30,
            alignContent: 'center'
            
        },

        descriptionContainer:
        {
            backgroundColor: 'green',
            width: 400,
            height: 150,
            alignContent:'center',
            alignItems: 'center',
            position: 'relative',
            top: 90,
        },
        DescriptionSubHeading:
        {
            width: 200,
            height: 50,
            fontSize: 20,
        },
        actualDescription:
        {
            backgroundColor: 'blue',
            width: 350,
            height: 70,
        },
        tagsContainer:
        {
            backgroundColor: 'green',
            width: 400,
            height: 150,
            alignContent:'center',
            alignItems: 'center',
            position: 'relative',
            top: 90,
        },
        TagSubHeading:
        {
            width: 200,
            height: 50,
            fontSize: 20,
        },
        actualTags:
        {
            backgroundColor: 'blue',
            width: 350,
            height: 70,
        },
        editProfile:
        {
            width: '50%',
            height: 30,
            backgroundColor: 'white',
            borderRadius: 20,
            alignContent:'center',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            bottom: -100

        },
        editProfileText:
        {

        },
        logOut:
        {
            width: '50%',
            height: 30,
            backgroundColor: 'white',
            borderRadius: 20,
            alignContent:'center',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            bottom: -110

        },
        logOutText:
        {

        },
    
        taskbar:
        {
            backgroundColor: 'gold',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            width: 397,
            justifyContent: 'space-evenly'
        },
        pic:
        { 
            width: 120,
            height: 50,
            position: 'absolute',
            top: 30
        },

    })

    export default WelcomeScreen;