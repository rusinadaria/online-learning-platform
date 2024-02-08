import axios from 'axios';
import { config } from 'process';


const $api =axios.create({
    withCredentials: true,
    baseURL: `http://localhost:3000/api`
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;