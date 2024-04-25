import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FC} from 'react';
import {Course} from '../models/Course';
import {Col} from 'react-bootstrap';
import CourseService from '../services/CourseService';
import courseStore from '../store/course';
import FavButton from './UI/FavButton';

interface CourseItemProps {
  course: Course;
}

const CourseItem: FC<CourseItemProps> = ({course}) => {

  return (
    <Col className='col-4 mt-3'> 
        <Card style={{ width: '13rem', cursor: 'pointer'}} border={'light'}>
          <Card.Img variant='top' src={`http://localhost:3000/static/` + course.img} style={{ width: '100%', height: 'auto' }}/>
            <Card.Body>
              <Card.Title>{course.name}</Card.Title>
                {/* <Card.Text>
                  Описание
                </Card.Text> */}
            </Card.Body>
            <FavButton onClick={() => courseStore.addToFavorites(course.id)}></FavButton>
      </Card>
    </Col>
  );
}

export default CourseItem;