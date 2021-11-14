import React from 'react';
import { StyleSheet, View } from 'react-native';

function SplashScreen(props) {
	return <View style={styles.container} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'orange',
	},
});

export default SplashScreen;
