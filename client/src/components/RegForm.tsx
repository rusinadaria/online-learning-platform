import React, {FC, useContext, useState} from 'react';
import { Context } from '..';

const RegForm: FC = () => {
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

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
            <button>Войти</button>
        </div>
    );
};

export default RegForm;