import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FC} from 'react';
import {Course} from '../models/Course';
import {Col} from 'react-bootstrap';
import CourseService from '../services/CourseService';
import courseStore from '../store/course';
import FavButton from './UI/FavButton';
import styles from '../styles/CourseItem.module.css';
import { wrap } from 'module';

interface CourseItemProps {
  course: Course;
}

const CourseItem: FC<CourseItemProps> = ({course}) => {

  return (
    <Col className='col-4 mt-3'> 
        <Card className={styles.courseCard}>
          <Card.Img variant='top' src={`http://localhost:3000/static/` + course.img} className='card-img-top'/>
            <Card.Body className='card-body'>
              <Card.Title className='card-title'>{course.name}</Card.Title>
            </Card.Body>
            <FavButton onClick={() => courseStore.addToFavorites(course.id)}></FavButton>
        </Card>
        {/* <div className={`card ${styles.courseCard}`}>
            {/* <div className='card_image'></div>
            <div className='card_content'></div> */}
            {/* <div className={`cardImage ${styles.cardImage}`}>
              <img src={`http://localhost:3000/static/` + course.img}></img>
            </div>
            <div className={`cardContent ${styles.cardContent}`}>
              {course.name}
            </div>
            <FavButton onClick={() => courseStore.addToFavorites(course.id)}></FavButton>
        </div> } */}
    </Col>
  );
}

export default CourseItem;

 {/* <Card.Text>Описание</Card.Text> */}

