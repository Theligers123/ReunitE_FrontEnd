import React from 'react';
import { StyleSheet, View } from 'react-native';

function HomeScreen(props) {
	return <View style={styles.container} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'purple',
	},
});

export default HomeScreen;
