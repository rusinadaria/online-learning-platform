// import axios from 'axios';
import React, { useEffect, useState, FC } from 'react';
import {Course} from '../models/Course';
import $api from '../http';

const Courses: FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);


    useEffect(() => {
        fetchCourses()
        console.log('работает');
    }, [])

    async function fetchCourses() {
        const response = await $api.get('/courses/fetchCourses')
        setCourses(response.data);
        console.log(response.data);
    }

    async function AddToFavorites (id: number) {
        return $api.post('/courses/addToFavorites', {id}) 
    }


    return (
        <div>
            страница курсов
            <ul>
                {courses.map((course) => (
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Courses;