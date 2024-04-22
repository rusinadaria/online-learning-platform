import React, {FC} from 'react';
import RegForm from '../components/RegForm';
import {Container, Row, Col, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Navigation from '../components/UI/Navigation';
import img from '../img/image 2.png';


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
                    <img
                        alt=""
                        src={img}
                        width="600"
                        height="600"
                        className="d-inline-block align-top"
                    />
                  картинка
                </Col>
                
            </Row>
            <ul style={{ listStylePosition: 'inside', paddingLeft: '50px', textAlign: 'left'}}>
                <li>Найдите то, что подходит именно вам</li>
                <li>Отслеживайте свою успеваемость</li>
                <li>Учитесь в любое время и в любом месте</li>
            </ul>
        </Container>
        </div>
    );
};

export default About;