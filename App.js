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

const axios = require('axios').default;
axios.defaults.baseURL = path();

export default function App() {
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
					token = res.data.accessToken.accessToken;
				} catch (err) {
					console.log(err);
					return;
				}

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
