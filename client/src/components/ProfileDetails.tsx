import React, {useEffect, useContext, useState, FC} from "react";
import UserProfileService from "../services/UserProfileService";
import {Course} from '../models/Course';
import {UserProfile} from '../models/UserProfile';
import { Context } from '..';
import { useNavigate } from 'react-router-dom';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { CustomPayload } from "../models/Payload";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import img from '../img/256.svg';
import CourseProfileCard from './CourseProfileCard';

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
                //const courses = userProfile.courses[0];
                console.log(userProfile);
                setUserProfile(userProfile);
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log("token undefined");
        }
    }

    const handleClick = (courseId:number) => {
        navigate(`/course/${courseId}`);
    };

    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container className="navbar-container">
                    <Navbar.Brand href="#">
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
                        
                    </Nav>
                    {userProfile && (
                    <>
                        <span>{userProfile/*[0]*/?.username}</span>
                        <button onClick={handleLogin} style={{ border: '1px solid #000', padding: '5px 10px', marginLeft: '10px', borderRadius: '5px' }}>Выход</button>
                    </>
                    )}
                </Container>
            </Navbar>
            <Container>
                <h1>Мои курсы</h1>
                <br/>
                <Tabs>
                    <TabList>
                        <Tab>Избранное</Tab>
                        <Tab>Пройденное</Tab>
                    </TabList>
                    <TabPanel>
                        {userProfile && userProfile/*[0]*/?.courses.map((course: Course) => (
                        <div key={course.id} onClick={() => handleClick(course.id)}>
                            <CourseProfileCard course={course} />
                        </div>
                        ))}
                    </TabPanel>
                </Tabs>
            </Container>
        </div>
    )
}

export default PageInfo;