import {Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Courses from '../pages/Courses';
import Profile from '../pages/Profile';
import LoginPage from '../pages/Login';
import CoursePage from '../pages/Course';

const AppRouter = () => {
    return (
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/sign' element={<LoginPage/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/course/:id' element={<CoursePage/>}/>
        </Routes>
    )
} 

export default AppRouter;