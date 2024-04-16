import React, {FC} from 'react';
import RegForm from '../components/RegForm';
import {Container, Row, Col, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Navigation from '../components/UI/Navigation';


const About: FC = () => {
    return (
        <div>
            <Navigation />
            <Container>

            <Row>
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <h1 className="custom-text">Начните свой путь к новым знаниям</h1>
                </Col>
                <Col md={6}>
                    <RegForm/>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default About;