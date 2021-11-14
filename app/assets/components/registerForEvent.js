import * as Location from 'expo-location';
import path from './Path';

const axios = require('axios').default;
axios.defaults.baseURL = path();

export async function register(eventID) {
    try {
        userToken = await SecureStore.getItemAsync('userToken');
        const res = await axios.put('/events/' + eventID + '/register', {
            "accessToken": userToken
        });
    } catch (err) {
        console.log(err);
        return;
    } 
}
export async function unregister(eventID) {
    try {
        userToken = await SecureStore.getItemAsync('userToken');
        const res = await axios.put('/events/' + eventID + '/unregister', {
            "accessToken": userToken
        });
    } catch (err) {
        console.log(err);
        return;
    } 
}

