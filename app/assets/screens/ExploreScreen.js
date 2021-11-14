import React, { useState } from 'react';
import {
	ScrollView,
	StyleSheet,
	View,
	TextInput,
	Text,
	FlatList,
	Image,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import path from '../components/Path';
import { getEventsNearMe, getEventInfo } from '../components/GetEventsNearMe';

var events = null;

function ExploreScreen(props) {
	(async () => {
		events = await getEventsNearMe(-1, []);
	})();

	return (
		<View style={styles.container}>
			<View>
				<TextInput style={styles.searchBox} />
			</View>
			<Text>Events Near Me</Text>
			<FlatList
				horizontal={true}
				data={events}
				keyExtractor={(item) => item.eventID}
				renderItem={({ item }) => {
					return (
						<View>
							<TouchableOpacity>
								<Image
									source={require('../sample-event-photos/photo-2.jpeg')}
									style={{
										width: 150,
										height: 150,
										marginRight: 8,
										borderRadius: 10,
									}}
								/>
								<View style={{ flexDirection: 'row' }}>
									<Feather
										style={styles.imageLocationIcon}
										name='map-pin'
										size={16}
										color='white'
									/>
									<Text style={styles.imageText}>
										{item.eventName}
									</Text>
								</View>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gold',
	},
	searchContainer: {
		paddingTop: 100,
		paddingLeft: 16,
	},
	searchBox: {
		marginTop: 16,
		backgroundColor: '#fff',
		paddingLeft: 24,
		padding: 12,
		borderTopRightRadius: 40,
		borderBottomRightRadius: 40,
		width: '90%',
	},
	card: {
		backgroundColor: 'grey',
		borderRadius: 20,
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 10,
		height: 100,
	},
	imageLocationIcon: {
		position: 'absolute',
		marginTop: 4,
		left: 10,
		bottom: 10,
	},
	imageText: {
		position: 'absolute',
		marginTop: 4,
		left: 30,
		bottom: 10,
		fontSize: 14,
		color: 'white',
	},
});

export default ExploreScreen;
