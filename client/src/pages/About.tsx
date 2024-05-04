import React, {FC} from 'react';
import RegForm from '../components/RegForm';
import {Container, Row, Col, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Navigation from '../components/UI/Navigation';
import img from '../img/screen_course.png';
import styles from '../styles/About.module.css';

const About: FC = () => {
    return (
        <div>
            <Navigation />
            <Container>
            <h1 className="custom-text">Начните свой путь к новым знаниям</h1>
            <ul className={styles.customList}>
                <li>Найдите то, что подходит именно вам</li>
                <li>Отслеживайте свою успеваемость</li>
                <li>Учитесь в любое время и в любом месте</li>
            </ul>
           

            {/* <Row>
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <h1 className="custom-text">Начните свой путь к новым знаниям</h1>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <img
                        alt=""
                        src={img}
                        width="600"
                        height="600"
                        className="d-inline-block align-top"
                    />
                </Col>
                
            </Row>
            <ul className={styles.customList}>
                <li>Найдите то, что подходит именно вам</li>
                <li>Отслеживайте свою успеваемость</li>
                <li>Учитесь в любое время и в любом месте</li>
            </ul> */}

        </Container>
        </div>
    );
};

export default About;