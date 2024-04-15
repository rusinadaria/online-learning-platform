import React, {useEffect, useState, FC} from "react";
import UserProfileService from "../services/UserProfileService";
//import {Course} from '../models/Course';
import {UserProfile} from '../models/UserProfile';

// список избранных курсов + прогресс для каждого
// список пройденных курсов 

const PageInfo: FC = () => {
    //получить id пользователя из userId
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

    useEffect(() => {
        displayUserProfile()
        console.log('работает');
    }, []) 

    async function displayUserProfile() {
        try {
            const userId = 57
            const userProfile = await UserProfileService.getProfile(userId);
            console.log(userProfile)
            setUserProfile(userProfile);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <h1>избранные</h1>
            
            <h1>{userProfile?.username}</h1>
            <ul>
            {userProfile?.courses?.map((course) => (
                <li key={course.id}>{course.name}</li>
            ))}
            </ul>
        </div>
    )
}

export default PageInfo;