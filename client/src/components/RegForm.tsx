import React, {FC, useContext, useState} from 'react';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import {Container, Form} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';


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
            <Card style={{width: 600}} className='p-5'>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-2'
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        type='text'
                        placeholder='Имя'
                    />
                    <Form.Control
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type='text'
                        placeholder='Email'
                    />
                    <Form.Control
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type='password'
                        placeholder='Пароль'
                    />
                    <Button variant={'outline-success'} onClick={() => store.registration(username, email, password)}>Зарегестрироваться</Button>
                    <button onClick={() => navigate("/sign")}>Войти</button>
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