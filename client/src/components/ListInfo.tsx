import React, {useEffect, useState, FC} from "react";

//список избранных курсов + прогресс для каждого
//список пройденных курсов 

const ListInfo: FC = () => {
    
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        fetchCourses()
        console.log('работает');
    }, []) 

    async function fetchCourses() {
        const courses = await CourseService.getCourses()
        setCourses(courses);
        console.log(courses);
    }

    return (
        <div>
            <h1>список курсов</h1>
            <ul>
                {courses?.map((course) => (
                    <div key={course.id}>{course.name}
                    <button onClick={() => courseStore.addToFavorites(course.id)}>
                    Добавить в избранное
                    </button>
                    </div>
                    
                ))}
            </ul>
        </div>
    )
}

export default ListInfo;