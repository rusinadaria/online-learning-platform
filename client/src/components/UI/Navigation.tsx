import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
  return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">
                    <img
                    alt=""
                    src="/img/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    CourseBase
                </Navbar.Brand>
            </Container>
      </Navbar>
  );
};

export default Navigation;
