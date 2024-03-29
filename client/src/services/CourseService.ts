import $api from '../http';
import { AuthResponse } from "../models/response/AuthResponse";
import { AxiosResponse } from "axios";
 
export default class CourseService {
    static async getCourses() {
        try {
            const response = await $api.get('/courses/fetchCourses')
            return response.data;
        } catch (e) {
            console.log(e);
        }
        
        
    }

    static async addToFav (userId: number, id: number): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/courses/addToFavorites', {userId, id}) 
    }

}