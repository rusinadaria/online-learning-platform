import $api from '../http';
import { AuthResponse } from "../models/response/AuthResponse";
import { AxiosResponse } from "axios";
 
export default class ProfileService {
    static async getCourses() {
        try {
            const response = await $api.get('/courses/fetchCourses')
            return response.data;
        } catch (e) {
            console.log(e);
        }
        
    }

}