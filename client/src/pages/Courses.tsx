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
                <Row className='mt-2'>
                    <Col md={9}>
                        <CourseList/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;