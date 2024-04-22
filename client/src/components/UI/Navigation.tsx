import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img from '../../img/256.svg';
import "../../App.css";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">
                    <img
                    alt=""
                    src={img}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    CourseBase
                </Navbar.Brand>
                <Nav className="me-auto" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Nav.Link href="/courses" style={{ flexGrow: 1 }}>Каталог курсов</Nav.Link>
                    <div style={{ display: 'flex', gap: '10px' }}></div>
                    <Nav.Link href="/registration" style={{ border: '1px solid #000', padding: '5px 10px', marginLeft: '10px', borderRadius: '5px' }}>Регистрация</Nav.Link>
                    <Nav.Link href="/login" style={{ border: '1px solid #000', padding: '5px 10px', marginLeft: '10px', borderRadius: '5px' }}>Войти</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
  );
};

export default Navigation;
