import { makeAutoObservable } from "mobx";
import CourseService from '../services/CourseService';
import {Course} from '../models/Course';


export default class courseStore {

    course = {} as Course;

    constructor () {
        makeAutoObservable(this)
    } 

    setCourse(course: Course) {
        this.course = course;
    }


    async addToFavorites(id: number) {
        // const userId = JSON.parse(localStorage.getItem('token')).id;
        try {
            const response = await CourseService.addToFavorites(id);
            console.log(response);
        } catch (e) {
            console.log(e.response?.data?.message);
        }

    }
}