import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FC} from 'react';
import {Course} from '../models/Course';

interface CourseItemProps {
  course: Course;
}

const CourseItem: FC<CourseItemProps> = ({course}) => {
    return (
        <Card style={{ width: '18rem' }} border={'light'}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{course.name}</Card.Title>
            <Card.Text>
              Описание
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    );
}

export default CourseItem;