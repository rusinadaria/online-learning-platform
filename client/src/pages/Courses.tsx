import React, { useEffect, useState, FC } from 'react';
import CourseList from '../components/CourseList';
import '../App.css'
import Navigation from '../components/UI/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Courses: FC = () => {

    return (
        <div>
            <Navigation />
            <Container>
                <CourseList/>
               
            </Container>
        </div>
    );
};

export default Courses;