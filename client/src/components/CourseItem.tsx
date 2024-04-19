import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FC} from 'react';
import {Course} from '../models/Course';
import {Col} from 'react-bootstrap';

interface CourseItemProps {
  course: Course;
}

const CourseItem: FC<CourseItemProps> = ({course}) => {

  return (
    <Col md={3} className='mt-3'>
        <Card style={{ width: '18rem', cursor: 'pointer'}} border={'light'}>
          <Card.Img variant='top' src={`http://localhost:3000/static/` + course.img}/>
            <Card.Body>
              <Card.Title>{course.name}</Card.Title>
                <Card.Text>
                  Описание
                </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
      </Card>
    </Col>
  );
}

export default CourseItem;