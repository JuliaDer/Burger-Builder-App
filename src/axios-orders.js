import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-app-5b303.firebaseio.com/'
});

export default instance;