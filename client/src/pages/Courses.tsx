import React, { useEffect, useState, FC } from 'react';
import CourseList from '../components/CourseList';

const Courses: FC = () => {

    return (
        <div>
            страница курсов
            <CourseList/>
        </div>
    );
};

export default Courses;