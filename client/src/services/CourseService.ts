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

    static async addToFav (userId: number, courseId: number): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/courses/addToFavorites', {userId, courseId}) 
    }

    static async addToCompleted (userId: number, courseId: number): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/courses/addToCompleted', {userId, courseId}) 
    }

    static async getOneCourse(id: number) {
        try {
            const response = await $api.get('/courses/fetchCourse', {params: {id: id}})
            return response.data;
        } catch (e) {
            console.log(e);
        }
        
    }

}