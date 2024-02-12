import axios from 'axios';
import React, { useEffect, useState, FC } from 'react';
import CourseService from '../services/CourseService';
import $api from '../http';
import {Course} from '../models/Course';

const Courses: FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);


    useEffect(() => {
        fetchCourses()
        console.log('работает');
    }, [])

    async function fetchCourses() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setCourses(response.data);
        console.log(response.data);
    }

    return (
        <div>
            страница курсов
            <ul>
                {courses.map((course) => (
                    <li key={course.title}></li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;