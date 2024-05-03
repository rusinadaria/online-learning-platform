import React, { useState, useEffect, useContext} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img from '../../img/256.svg';
import account from '../../img/Frame 3.png';
import "../../App.css";
import { Context } from '../../index';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

const Navigation = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const {store} = useContext(Context);

    const navigate = useNavigate();

    const handleLogout = async () => {
        await store.logout();
        navigate("/");
        setIsAuthenticated(false);
    }

    useEffect(() => {
        checkAuth().then(auth => setIsAuthenticated(auth));
    }, []);

    const checkAuth = async () => {
        if (localStorage.getItem('token')) {
            return true; 
        } else {
            return false;
        }
    };
       
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
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
                    {isAuthenticated ? (
                        <>
                         <Nav.Link href="/profile"> <img src={account} alt="Аккаунт" style={{ width: '30px', height: '30px', marginRight: '5px' }} /></Nav.Link>
                         <button onClick={handleLogout} style={{ border: '1px solid #000', padding: '5px 10px', marginLeft: '10px', borderRadius: '5px' }}>Выйти</button>
                        </>
                        
                    ) : (
                        <>
                        <Nav.Link href="/registration" style={{ border: '1px solid #000', padding: '5px 10px', marginLeft: '10px', borderRadius: '5px' }}>Регистрация</Nav.Link>
                        <Nav.Link href="/login" style={{ border: '1px solid #000', padding: '5px 10px', marginLeft: '10px', borderRadius: '5px' }}>Войти</Nav.Link>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;
