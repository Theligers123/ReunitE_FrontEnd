import React, { useState, useContext } from 'react';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
	TextInput,
	Image,
} from 'react-native';
import { AuthContext } from '../components/context';

function RegisterScreen(props) {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const [phoneNumber, setPhoneNumber] = useState(null);

	const { signIn } = useContext(AuthContext);

	return (
		<View style={styles.baseBackground}>
			{/* Text for the title of the app */}
			<Image source={require('../ReunitE1.png')} style={styles.pic} />
			{/* container for the log in contents */}
			<View style={styles.loginContainer}>
				<Text style={styles.header}>Sign In</Text>
				{/* containers for the username and password */}
				<TextInput
					style={styles.inputUsername}
					onChangeText={setUsername}
					value={username}
					placeholder='Username'
				/>
				<TextInput
					style={styles.inputUsername}
					onChangeText={setPhoneNumber}
					value={phoneNumber}
					placeholder='1234567890'
				/>
				<TextInput
					style={styles.inputPassword}
					secureTextEntry={true}
					onChangeText={setPassword}
					value={password}
					placeholder='Password'
				/>
				{/* button for logging in */}
				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => {
						signIn({ username, password });
					}}
				>
					<Text style={styles.textLocation}>Login</Text>
				</TouchableOpacity>
				{/* container for the register button */}
				<TouchableOpacity style={styles.registerButton}>
					<Text style={styles.textLocation}>Register</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	baseBackground: {
		backgroundColor: 'gold',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},
	loginContainer: {
		backgroundColor: 'transparent',
		borderRadius: 20,
		width: '85%',
		height: 300,
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
	},

	header: {
		textAlign: 'center',
		width: 250,
		height: 40,
		fontSize: 30,
	},

	loginButton: {
		width: '50%',
		height: 30,
		backgroundColor: '#F26C68',
		borderRadius: 20,
		justifyContent: 'space-evenly',
	},

	registerButton: {
		width: '50%',
		height: 30,
		backgroundColor: '#F26C68',
		borderRadius: 20,
		justifyContent: 'space-evenly',
	},
	textLocation: {
		alignSelf: 'center',
	},
	inputUsername: {
		borderColor: 'black',
		borderWidth: 1,
		width: 200,
		backgroundColor: 'white',
		borderRadius: 20,
		textAlign: 'center',
	},
	inputPassword: {
		borderColor: 'black',
		borderWidth: 1,
		width: 200,
		backgroundColor: 'white',
		borderRadius: 20,
		textAlign: 'center',
	},

	logoThing: {
		width: 150,
		height: 150,
		position: 'absolute',
		top: 50,
		left: 100,
	},

	Title: {
		width: 240,
		height: 150,
		fontSize: 70,
		fontFamily: 'Kings-Regular',
	},
	pic: {
		width: 430,
		height: 190,
		position: 'absolute',
		top: 30,
	},
});

export default RegisterScreen;
