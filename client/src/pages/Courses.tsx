import axios from 'axios';
import React, { useState } from 'react';
import $api from '../http';

const Courses = () => {
    const [data, setData] = useState([]);

    async function fetchCourses() {
        const courses = await $api.get('/courses/fetchCourses')
        .then((response) => {
            setData(response.data);
        })
    }

    async function AddToFavorites (id: number) {
        return $api.post('/courses/addToFavorites', {id}) 
    }


    return (
        <div>
            страница курсов
            {/* <ul>
                {data.map((course) => (
                    <li key={course.id}>{course.name}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default Courses;