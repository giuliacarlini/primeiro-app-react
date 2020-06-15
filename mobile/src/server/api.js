import axios from 'axios';

const api = axios.create({
    baseURL: 'https://firstappomnstack.herokuapp.com'
});

export default api;