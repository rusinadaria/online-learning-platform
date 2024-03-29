import { makeAutoObservable } from "mobx";
import CourseService from '../services/CourseService';
import {Course} from '../models/Course';


class courseStore {

    course = {} as Course;

    constructor () {
        makeAutoObservable(this)
    } 

    setCourse(course: Course) {
        this.course = course;
    }


    async addToFavorites(id: number) {
        const token = localStorage.getItem('token');
        if (token !== null) {
            const userId = JSON.parse(token).id;
            try {
                const response = await CourseService.addToFav(userId, id);
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