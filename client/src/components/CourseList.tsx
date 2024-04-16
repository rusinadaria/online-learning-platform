import React, { useEffect, useState, FC } from 'react';
import {Course} from '../models/Course';
import CourseService from '../services/CourseService';
import {Row} from 'react-bootstrap'
import courseStore from '../store/course';
import CourseItem from './CourseItem';
import course from '../store/course';
// import FavButton from './UI/FavButton';
//import {useHistory} from 'react-router-dom';


const CourseList: FC = () => {

    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        fetchCourses()
        console.log('работает');
    }, []) 

    async function fetchCourses() {
        const courses = await CourseService.getCourses()
        setCourses(courses);
        console.log(courses);
    }

    return (
        // <div>
        //     <h1>список курсов</h1>
        //     <ul>
        //         {courses?.map((course) => (
        //             <div key={course.id}>{course.name}
        //             <button onClick={() => courseStore.addToFavorites(course.id)}>
        //             Добавить в избранное
        //             </button>
        //             </div>
                    
        //         ))}
        //     </ul>
        // </div>
        <Row className='d-flex'>
           {courses?.map((course) => (
                <div key={course.id}>
                <CourseItem course={course} />
                <button onClick={() => courseStore.addToFavorites(course.id)}>
                    Добавить в избранное
                </button>
                </div>
            ))}
        </Row>
    )
}

export default CourseList;