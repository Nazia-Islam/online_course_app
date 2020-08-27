import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Course.css'; 
import {Card, Button} from 'react-bootstrap';

const Course = (props) => {
    const { url, name, courseCoordinator, price, courseGroupEmail } = props.course;

    return (
        <div className="course">
            <Card style={{ width: '15rem', marginTop:'10px'}}>
                <Card.Img variant="top" src={url} style={{ height: '150px', padding:'10px' }}/>
                <Card.Body>
                    <Card.Title style={{ fontSize: '20px'}}>Courses title: {name}</Card.Title>
                    <Card.Text style={{ fontSize: '14px'}}>Price: {price} BDT<br></br>
                    Instructor: {courseCoordinator}<br></br>
                    <small>Contact: {courseGroupEmail}</small></Card.Text>              
                    <Button onClick={()=>props.handleAddCourse(props.course)} variant="primary">Enroll Now <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;
