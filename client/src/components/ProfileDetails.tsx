import React, {useEffect, useContext, useState, FC} from "react";
import UserProfileService from "../services/UserProfileService";
import {Course} from '../models/Course';
import {UserProfile} from '../models/UserProfile';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { CustomPayload } from "../models/Payload";

// список избранных курсов + прогресс для каждого
// список пройденных курсов 

const PageInfo: FC = () => {
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const {store} = useContext(Context);

    const navigate = useNavigate();

    const handleLogin = async () => {
        await store.logout();
        navigate("/");
    }

    useEffect(() => {
        displayUserProfile()
        console.log('работает');
    }, []) 

    async function displayUserProfile() {
        const token = localStorage.getItem('token');
        if (token !== null) {
            const decode = jwtDecode<CustomPayload>(token);
            const userId = Number(decode.id);
            console.log(userId);
            try {
                const userProfile = await UserProfileService.getProfile(userId);
                console.log(userProfile);
                setUserProfile(userProfile);
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log("token undefined");
        }
    }

    return (
        <div>
            <h1>избранные</h1>
            
            <h1>{userProfile && userProfile/*[0]*/?.username}</h1>
            <h2>hjdgcjadhfc</h2>
            <ul>
            {userProfile && userProfile/*[0]*/?.courses?.map((course: Course) => (
                <li key={course.id}>{course.name}</li>
            ))}
            </ul>
            <button onClick={handleLogin}>Выход</button>
        </div>
    )
}

export default PageInfo;