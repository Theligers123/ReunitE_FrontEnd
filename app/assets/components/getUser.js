import * as Location from 'expo-location';
import path from './Path';

const axios = require('axios').default;
axios.defaults.baseURL = path();

export async function getUser(username) {
    user = {}
    try {
        const res = await axios.get('/user/' + username);
        user = res.data
    } catch (err) {
        console.log(err);
        return;
    } 
    return user;
}
