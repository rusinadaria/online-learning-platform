import React, { useEffect, useState, FC } from 'react';
import {Course} from '../models/Course';
import CourseService from '../services/CourseService';
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import courseStore from '../store/course';
import CourseItem from './CourseItem';
import course from '../store/course';
import {Container} from 'react-bootstrap'
import FavButton from './UI/FavButton';
import {useNavigate} from 'react-router-dom';


const CourseList: FC = () => {

    const navigate = useNavigate();

    const handleClick = (courseId:number) => {
        navigate(`/course/${courseId}`);
    };

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
        <Row className='d-flex mt-2'>
            {courses?.map((course) => (
                <Col className='col-3 mt-3' key={course.id} onClick={() => handleClick(course.id)}>
                    <CourseItem course={course} />
                </Col>
            ))}
        </Row>
    )
}

export default CourseList;