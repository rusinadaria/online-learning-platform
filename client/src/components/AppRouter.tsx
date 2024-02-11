import {Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Courses from '../pages/Courses';

const AppRouter = () => {
    return (
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/courses' element={<Courses/>}/>
        </Routes>
    )
} 

export default AppRouter;