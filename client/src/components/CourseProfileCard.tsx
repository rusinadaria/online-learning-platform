import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FC} from 'react';
import {Course} from '../models/Course';
import {Col} from 'react-bootstrap';

interface CourseProfileCardProps {
  course: Course;
}

const CourseProfileCard: FC<CourseProfileCardProps> = ({course}) => {

  return (
    <Col md={3} className='mt-3'>
        <Card style={{ width: '18rem', cursor: 'pointer'}} border={'light'}>
            <Card.Body>
              <Card.Title>{course.name}</Card.Title>
                <Card.Text>
                  Прогресс бар
                </Card.Text>
            </Card.Body>
      </Card>
    </Col>
  );
}

export default CourseProfileCard;