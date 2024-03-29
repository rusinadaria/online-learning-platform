import {Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Courses from '../pages/Courses';
import Profile from '../pages/Profile';
import LoginPage from '../pages/Login';

const AppRouter = () => {
    return (
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/courses2' element={<Courses/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
    )
} 

export default AppRouter;