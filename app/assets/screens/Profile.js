import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, 
    Text, TextInput, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


    function Profile(props) {
        return (
            <View style = {styles.base}>
                {/* title of the page */}
                <Image source = {require('../ReunitE1.png')} 
                style = {styles.pic}/>

                {/* UPcontainer */}
                <View style = {styles.UPcontainer}>
                        {/* section to just show the username */}
                    <Text style = {styles.usernameSubHeading}>User Name</Text>
                    <TextInput placeholder= "UserName" style= {styles.UserName}
                    textAlign = {"center"}/>
                    {/* section to input phone numbers */}
                    <Text style = {styles.PhoneSubHeading}>Phone Number</Text>
                    <TextInput placeholder= "Phone number" style= {styles.PhoneNumber}
                    textAlign = {"center"}/>
                </View>
                
                {/* section for the profile pic */}
                <View style = {styles.profPic}>
                    {/* profile pic */}
                    <View>

                    </View>
                </View>
                


                {/* Description container */}
                <View style = {styles.descriptionContainer}>
                        {/* section to look at your description */}
                    <Text style = {styles.DescriptionSubHeading}>Description</Text>
                    <TextInput style = {styles.actualDescription} placeholder = "Description" 
                    textAlignVertical = {"top","top"}/>
                </View>

                {/* Tags Container */}
                <View style = {styles.tagsContainer}>
                        {/* section to look at your tags or interest */}
                    <Text style = {styles.TagSubHeading}>Tags or interest</Text>
                    <TextInput style = {styles.actualTags} placeholder = "Tags" 
                    textAlignVertical = {"top","top"}/>
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
            backgroundColor: 'white',
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
            backgroundColor: 'transparent',
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
            left: 25,

        },
        UserName:
        {
            borderColor: 'black',
            borderWidth: 1,
            width: "75%",
            backgroundColor: 'white',
            borderRadius: 20,
            height: 30,
            alignContent: 'center',
            bottom: 10

        },
        PhoneSubHeading:
        {
            width: 200,
            height: 50,
            fontSize: 20,
            left: 10,
            top: 14,
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
            backgroundColor: 'transparent',
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
            backgroundColor: '#FDFDFD',
            width: 350,
            height: 70,
            borderRadius: 7,
            borderColor: 'black',
            borderWidth: 1,
            shadowColor: 'black',
            shadowOpacity: 100,
            shadowRadius: 5,
            elevation: 100,
        },
        tagsContainer:
        {
            backgroundColor: 'transparent',
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
            backgroundColor: '#FDFDFD',
            width: 350,
            height: 70,
            borderRadius: 7,
            borderColor: 'black',
            borderWidth: 1,
            shadowColor: 'black',
            shadowOpacity: 100,
            shadowRadius: 10,
            elevation: 100,
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
            backgroundColor: '#E1E1E1',
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

    export default Profile;