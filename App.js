import React, { useState, useReducer, useMemo, useEffect } from 'react';
import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import Profile from './app/assets/screens/ProfileScreen';
import SplashScreen from './app/assets/screens/SplashScreen';
import path from './app/assets/components/Path';
import { AuthContext } from './app/assets/components/context';
import * as SecureStore from 'expo-secure-store';
import AuthStack from './app/assets/routes/AuthStack';
import AppStack from './app/assets/routes/AppStack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const axios = require('axios').default;
axios.defaults.baseURL = path();

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

	const [state, dispatch] = useReducer(
		(prevState, action) => {
			switch (action.type) {
				case 'RESTORE_TOKEN':
					return {
						...prevState,
						userToken: action.token,
						isLoading: false,
					};
				case 'SIGN_IN':
					return {
						...prevState,
						isSignout: false,
						userToken: action.token,
					};
				case 'SIGN_OUT':
					return {
						...prevState,
						isSignout: true,
						userToken: null,
					};
			}
		},
		{
			isLoading: true,
			isSignout: false,
			userToken: null,
		}
	);

	const authContext = useMemo(
		() => ({
			signIn: async (data) => {
				let token = null;

				// send some data to server and get token
				try {
					const res = await axios.post('auth/login', {
						username: data.username,
						password: data.password,
					});
					if (res.data.status != 'success') {
						return;
					}

					// FIXME: i don't understand why accessToken needs to be there twice
					token = res.data.accessToken;
				} catch (err) {
					console.log(err);
					return;
				}
				console.log(token + ' sdfjkasfjalsdjfl;asjdfla;sjdf;lk\n\n\n');
				// persist the token using secure store
				try {
					await SecureStore.setItemAsync('userToken', token);
				} catch (err) {
					console.log(err);
					return;
				}

				dispatch({
					type: 'SIGN_IN',
					token: token,
				});
			},
			signOut: () => {
				try {
					SecureStore.deleteItemAsync('userToken');
				} catch (err) {
					console.log(err);
				}

				dispatch({
					type: 'SIGN_OUT',
				});
			},
			signUp: async (data) => {
				let token = null;

				// send user data to server and get token
				try {
					const res = await axios.post('auth/register', {
						username: data.username,
						password: data.password,
						phoneNumber: data.phoneNumber,
					});
					if (res.data.status != 'success') {
						return;
					}

					// FIXME: i don't understand why accessToken needs to be there twice
					token = res.data.accessToken.accessToken;
				} catch (err) {
					console.log(err);
					return;
				}

				// persist token using securestore
				try {
					await SecureStore.setItemAsync('userToken', token);
				} catch (err) {
					console.log(err);
					return;
				}

				dispatch({
					type: 'SIGN_IN',
					token: token,
				});
			},
		}),
		[]
	);

	useEffect(() => {
    const promptUserToAllowLocation = async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };

		const checkStorage = async () => {
			let userToken;

			try {
				userToken = await SecureStore.getItemAsync('userToken');
			} catch (err) {
				// handle failure to restore token
				console.log(err);
			}

			// may need to validate token

			dispatch({
				type: 'RESTORE_TOKEN',
				token: userToken,
			});
		};
    promptUserToAllowLocation();
		checkStorage();
	}, []);

	if (state.isLoading) {
		// We haven't finished checking for the token yet
		return <SplashScreen />;
	}
	return (
		<NavigationContainer>
			<AuthContext.Provider value={authContext}>
				{state.userToken == null ? <AuthStack /> : <AppStack />}
			</AuthContext.Provider>
		</NavigationContainer>
	);
}
