import React, {FC, useContext, useState} from 'react';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import {Container, Form} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const RegForm: FC = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

    const navigate = useNavigate();

    return (
        <Container  
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 500}} className='p-5'>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        type='text'
                        placeholder='Имя'
                    />
                    <Form.Control
                        className='mt-3'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type='text'
                        placeholder='Email'
                    />
                    <Form.Control
                        className='mt-3'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type='password'
                        placeholder='Пароль'
                    />
                    <Button className='mt-3'
                    variant={'outline-success'}
                    onClick={() => store.registration(username, email, password)}
                    style={{ backgroundColor: '#28a745', color: 'white', borderColor: '#28a745'}}>Зарегестрироваться</Button>
                    <div className="d-flex align-self-end mt-3">
                        <span className="text-muted mx-2 ">Уже есть аккаунт?</span>
                        <Nav.Link as={Link} to="/sign" className="text-decoration-underline text-primary">Войти</Nav.Link>
                        {/* <Button className='align-self-end' onClick={() => navigate("/sign")}>Войти</Button> */}
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default RegForm;

{/* <input
onChange={e => setUsername(e.target.value)}
value={username}
type='text'
placeholder='Имя'
/>
<input
onChange={e => setEmail(e.target.value)}
value={email}
type='text'
placeholder='Email'
/>
<input
onChange={e => setPassword(e.target.value)}
value={password}
type='password'
placeholder='Пароль'
/>
<Button variant={'outline-success'} onClick={() => store.registration(username, email, password)}>Зарегестрироваться</Button>
<button onClick={() => navigate("/sign")}>Войти</button> */}