import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-c2bb0-default-rtdb.firebaseio.com/'
});

export default instance;