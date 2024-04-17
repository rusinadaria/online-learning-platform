import React, {FC, useEffect, useState} from 'react'
import {Container, Col} from 'react-bootstrap'
import Navigation from '../components/UI/Navigation';
import {Course} from '../models/Course';
import CourseService from '../services/CourseService';
import { useParams } from 'react-router-dom';

const CoursePage: FC = () => {
    const [course, setCourse] = useState<Course[]>([]);
    const {id} = useParams();

    useEffect(() => {
        if (id) { // Проверяем, что id не undefined
            displayCourse(parseInt(id, 10));
            console.log(id) // Преобразуем id в число
        }
        console.log('работает');
    }, [id]) 

    async function displayCourse(courseId:number) {
        const course = await CourseService.getOneCourse(courseId)
        setCourse(course);
        console.log(course);
    }

    return (
        <div>
            <Navigation/>
            <Container>
                <Col md={4}>
                    <h1></h1>
                </Col>
            </Container>
        </div>
    );
};

export default CoursePage;