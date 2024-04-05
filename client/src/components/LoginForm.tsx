import React, {FC, useContext, useState} from 'react';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

    const navigate = useNavigate();

    const handleLogin = async () => {
        await store.login(email, password);
        navigate("/profile");
    }

    return (
        <div>
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
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
};

export default LoginForm;