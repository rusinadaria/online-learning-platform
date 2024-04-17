import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FC} from 'react';
import {Course} from '../models/Course';
import {Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

interface CourseItemProps {
  course: Course;
}

const CourseItem: FC<CourseItemProps> = ({course}) => {

  return (
    <Col md={3} className='mt-3'>
        <Card style={{ width: '18rem', cursor: 'pointer'}} border={'light'}>
          <Image width={150} height={150} src={`http://localhost:3000/api` + course.img}/>
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