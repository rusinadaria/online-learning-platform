import React from 'react';
import RegForm from '../components/RegForm';
import { Container } from 'react-bootstrap';


const RegistrationPage = () => {
    return (
        <div>
            <Container style={{ display: 'grid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1 style={{ fontWeight: 'lighter', marginBottom: '10px' }}>Регистрация</h1>
                <RegForm/>
            </Container>
            
        </div>
    );
};

export default RegistrationPage;