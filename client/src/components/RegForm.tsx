import React, {FC, useContext, useState} from 'react';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';

const RegForm: FC = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

    const navigate = useNavigate();

    return (
        <div>
            <input
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
            
            <button onClick={() => store.registration(username, email, password)}>Зарегестрироваться</button>
            <button onClick={() => navigate("/sign")}>Войти</button>
        </div>
    );
};

export default RegForm;