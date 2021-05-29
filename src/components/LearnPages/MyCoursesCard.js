import React from 'react';
import { Button, Card,ProgressBar } from 'react-bootstrap';
import { useHistory } from 'react-router';


const MyCoursesCard = (props) => {
    const {title,description,salary,id}=props.course;
    const history=useHistory()
 
    return (
        <div className="col-md-4 my-3 p-2">
            <Card className="p-5 course-card text-white">
                <p className="d-flex justify-content-end">{salary}</p>
         
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description} </Card.Text >
                   <div className="d-flex justify-content-center">
                   <Button onClick={()=>history.push(`/introBlockchainpages/${id}`)}  className="gradient-btn w-50">Learn</Button>
                   </div>
                   <h5 className="d-flex justify-content-end">8.3/10 Modules</h5>
                   <ProgressBar className="Gradient-progress my-3" now={70} />
                   <p className="d-flex justify-content-center">83% Complete</p>
                   {/* <Progress percent={props.courses.status} indicating /> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyCoursesCard;