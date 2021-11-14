import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import ExploreScreen from '../screens/ExploreScreen';
import HomeScreen from '../screens/HomeScreen';
import CreateMeeting from '../screens/CreateMeeting';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function AppStack() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name='Explore'
				component={ExploreScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name='bars' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Home'
				component={CreateMeeting}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name='home' size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name='person-circle-outline'
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
