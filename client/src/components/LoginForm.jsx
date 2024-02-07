import React, { useContext, useState } from 'react';
import { Context } from '..';

const LoginForm = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { store } = useContext(Context);
    return (
        <div>
            <input>
                onChange={e => setUsername(e.target.value)}
                value={username}
                type='text'
                placeholder='Имя'
            </input>
            <input>
                onChange={e => setEmail(e.target.value)}
                value={email}
                type='text'
                placeholder='E-mail'
            </input>
            <input>
                onChange={e => setPassword(e.target.value)}
                value={password}
                type='text'
                placeholder='Пароль'
            </input>
            <button onClick={() => store.registration(username, email, password)}>Зарегестрироваться</button>
        </div>
    );
};

export default LoginForm;