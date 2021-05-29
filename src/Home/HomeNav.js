import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import navlogo from "../images/unnamed.png"
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const HomeNav = () => {
    return (
        <div className="header">
           
            <Navbar bg="dark" variant="light">
                <Navbar.Brand as={Link} to="/">
                    <span >
                        <img
                            src={navlogo}
                            width="50"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </span>
                </Navbar.Brand>
                <Nav className="ml-auto">
                <Link to="/home">Home</Link>
                    <Link to="/incubator">Incubator</Link>
                    <Link to="/learn">Learn</Link>
                    
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default HomeNav;