import React, {FC, useEffect, useState} from 'react'
import {Container, Col} from 'react-bootstrap'
import Navigation from '../components/UI/Navigation';
import {Course} from '../models/Course';
import CourseService from '../services/CourseService';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';


const CoursePage: FC = () => {
    const [course, setCourse] = useState<Course | null>(null);
    const [fileContent, setFileContent] = useState('');
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            displayCourse(parseInt(id, 10));
            console.log(id)
            fetchFile();
        }
        console.log('работает');
    }, [id]) 

    async function displayCourse(courseId:number) {
        const course = await CourseService.getOneCourse(courseId)
        setCourse(course);
        console.log(course);
    }

    const fetchFile = async () => {
        try {
          const response = await fetch('http://localhost:3000/static/1.md');
          if (!response.ok) {
            throw new Error('Ошибка при загрузке файла');
          }
          const blob = await response.blob();
          const reader = new FileReader();
          reader.onloadend = () => {
            setFileContent(reader.result as string);
          };
          reader.readAsText(blob);
        } catch (error) {
          console.error('Ошибка:', error);
        }
      };

    return (
        <div>
            <Navigation/>
            <Container>
                <Col md={4} className='mt-4'>
                    {/* {course && <h1 style={{whiteSpace: 'nowrap'}}>{course.name}</h1>} */}
                        {course && (
                        <div style={{
                            // backgroundImage: {`http://localhost:3000/static/` + course.img},
                            backgroundImage:  `http://localhost:3000/static/${course.img}`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            height: '200px',
                            //whiteSpace: 'nowrap'
                        }}>
                            <h1 style={{whiteSpace: 'nowrap'}}>{course.name}</h1>
                            <br/>
                            <ReactMarkdown 
                            components={{
                                h2: ({node, ...props}) => (
                                    <Link to={`/section/${node.children[0].value}`} {...props} />
                                )
                            }}>{fileContent}</ReactMarkdown>
                        </div>
                        )}
                </Col>
            </Container>
        </div>
    );
};

export default CoursePage;