import { makeAutoObservable } from "mobx";
import CourseService from '../services/CourseService';
import {Course} from '../models/Course';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { CustomPayload } from "../models/Payload";


class courseStore {

    course = {} as Course;

    constructor () {
        makeAutoObservable(this)
    } 

    setCourse(course: Course) {
        this.course = course;
    }


    async addToFavorites(courseId: number) {
        const token = localStorage.getItem('token');
        if (token !== null) {
            //const userId = JSON.parse(token).id;
            //const decode: any = jwtDecode(token);
            const decode = jwtDecode<CustomPayload>(token);
            const userId = Number(decode.id);
            console.log(userId);
            try {
                const response = await CourseService.addToFav(userId, courseId);
                console.log(response);
            } catch (e) {
                console.log(e.response?.data?.message);
            }
        } else {
            console.log("token undefined");
        }

    }
}

export default new courseStore();