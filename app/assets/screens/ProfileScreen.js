import React, { useContext } from 'react';
import {
	ImageBackground,
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	TextInput,
	Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../components/context';

function ProfileScreen(props) {
	const { signOut } = useContext(AuthContext);

	return (
		<View style={styles.base}>
			{/* title of the page */}
			<Text style={styles.Title}>ReunitE</Text>
			{/* section to just show the username */}
			<Text style={styles.subHeading}>User Name</Text>
			<View style={styles.showUserName}>
				<Text>TheLigers</Text>
			</View>
			{/* section to input phone numbers */}
			<Text style={styles.subHeading}>Phone Number</Text>
			<TextInput style={styles.PhoneNumber} placeholder='Phone number' />
			{/* section to look at your description */}
			<Text style={styles.subHeading}>Description</Text>
			<View style={styles.descriptionContainer} />

			{/* section to look at your tags or interest */}
			<Text style={styles.subHeading}>Tags or interest</Text>
			<View style={styles.tagsContainer} />

			{/* button for editing profile */}
			<TouchableOpacity style={styles.editProfile}>
				{/* icon editing */}
				<AntDesign name='edit' size={20} color='black' />
				<Text style={styles.editProfileText}>Edit profile</Text>
			</TouchableOpacity>

			{/* button for loging out */}
			<TouchableOpacity style={styles.logOut} onPress={() => signOut()}>
				{/* icon editing    */}
				<AntDesign name='logout' size={20} color='black' />
				<Text style={styles.logOutText}>Log Out</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	base: {
		flex: 1,
		backgroundColor: 'grey',
	},
	Title: {
		width: 240,
		height: 150,
		fontSize: 70,
	},
	subHeading: {
		width: 200,
		height: 50,
		fontSize: 20,
	},
	Username: {
		borderColor: 'black',
		borderWidth: 1,
		width: 150,
		backgroundColor: 'white',
		borderRadius: 20,
		textAlign: 'center',
	},
	showUserName: {
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 20,
		width: '45%',
		height: 30,
		alignItems: 'center',
		padding: 3,
	},
	PhoneNumber: {
		borderColor: 'black',
		borderWidth: 1,
		width: '45%',
		backgroundColor: 'white',
		borderRadius: 20,
		textAlign: 'center',
		height: 30,
	},
	descriptionContainer: {},
	tagsContainer: {},
	editProfile: {
		width: '50%',
		height: 30,
		backgroundColor: 'white',
		borderRadius: 20,
		alignContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	editProfileText: {},
	logOut: {
		width: '50%',
		height: 30,
		backgroundColor: 'white',
		borderRadius: 20,
		alignContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	logOutText: {},
	logOutText: {},
	homeButton: {},
	profileButton: {},
	picSize: {
		width: 50,
		height: 50,
	},
});

export default ProfileScreen;
