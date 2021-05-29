import React from 'react';
import { Button, Card,ProgressBar } from 'react-bootstrap';
import { useHistory } from 'react-router';

const FeatureCard = (props) => {
    const {id,title,description,salary,status,modules,image}=props.course;
    const history=useHistory();
    return (
        <div className="col-md-4 my-3 p-2">
        <Card >
           <div className="d-flex">
           <img
                        src={image}
                        width="50"
                        height="50"
                        className="d-inline align-top m-3"
                        // alt="React Bootstrap logo"
                    />
            <h1>{title}</h1>
           </div>
            <Card.Body>
                {/* <Card.Title>Card Title</Card.Title> */}
                <Card.Text>{description}</Card.Text>
            <div className="d-flex justify-content-between">
                <h5>{modules}</h5>
                <h45>{status}% Complete</h45>
            </div>
            <p>{salary}</p>
            <ProgressBar className="Gradient-progress" now={60} />
            <div className="d-flex justify-content-between my-3">
                <Button onClick={()=>history.push(`/fundStartup`)}   variant="primary">Found Startup</Button>
                <Button onClick={()=>history.push(`/about/${id}`)}  variant="outline-secondary">Learn More</Button>
            </div>
         
            </Card.Body>
        </Card>
    </div>
    );
};

export default FeatureCard;