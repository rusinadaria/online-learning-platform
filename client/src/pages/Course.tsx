import React, {FC, useEffect, useState} from 'react'
import {Container, Col} from 'react-bootstrap'
import Navigation from '../components/UI/Navigation';
import {Course} from '../models/Course';
import CourseService from '../services/CourseService';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
//import MarkdownIt from 'markdown-it';
//declare module 'markdown-it';
import Card from 'react-bootstrap/Card';
import { title } from 'process';
//import { HashLink } from 'react-router-hash-link';



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
    }, [course]) 

    async function displayCourse(courseId:number) {
        const course = await CourseService.getOneCourse(courseId)
        setCourse(course);
        console.log(course);
    }

    const fetchFile = async () => {
        try {
          const response = await fetch(`http://localhost:3000/static/${course?.file_path}`);
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

      function generateUniqueId(title: string) {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      }


  
  return (
    <div>
      <Navigation/>
      <Container>
          {course && (
            <div style={{
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '200px'
            }}>
              <h1 style={{
                whiteSpace: 'nowrap',
                backgroundImage: `url("http://localhost:3000/static/` + course.img + `")`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat',
                height: '150px',
                width: '100%',
              }}>{course.name}</h1>
              <br/>
              <ReactMarkdown 
                components={{
                  p: ({node, ...props}) => <p {...props} style={{textAlign: 'left', fontFamily: 'TT Norms Pro, , sans-serif', fontSize: '20px', lineHeight: '26px'}} />,
                  h3: ({node, ...props}) => <h3 {...props} style={{textAlign: 'left'}} />,
                  h5: ({node, ...props}) => {
                    if (node && node.children && node.children[0] && node.children[0].type === 'text') {
                      const sectionTitle = node.children[0].value;
                      if (sectionTitle) {
                        const { ref, onChange, onCopy, onCopyCapture, ...linkProps } = props;

                        const sectionId = generateUniqueId(sectionTitle);

                        
                        // Возвращаем карточку для каждого заголовка h2
                        return (
                          <div style={{ marginBottom: '20px' }}>
                            <a href={`#${sectionId}`} style={{ textDecoration: 'none' }}></a>
                            <Card style={{ width: '100%', cursor: 'pointer', height: 'auto'}} border={'light'}>
                              <Card.Body>
                                <Card.Title style={{ whiteSpace: 'nowrap', textAlign: 'left'}}>{sectionTitle}</Card.Title>
                              </Card.Body>
                            </Card>
                          </div>
                        );
                      }
                    }
                    // Возвращаем исходный компонент, если условия не выполнены
                    return <h5 {...props} />;
                 }
                }}
              >{fileContent}</ReactMarkdown>
            </div>
          )}
     
      </Container>
    </div>
 );
};
{/* <Link to={`/section/${sectionTitle}`} {...linkProps} />; */}


export default CoursePage;