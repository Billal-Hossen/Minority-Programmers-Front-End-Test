import React from 'react';
import navlogo from "../../../images/brand.png"
import { FaFacebook, FaLinkedin, FaInstagram, FaPlay, FaGithub, FaTwitter } from "react-icons/fa"


import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IncubatorNav = () => {
    return (
        <Navbar style={{ backgroundColor: "#1F2235" }} sticky="top" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <span >
                        
                         <img className="brand-design " src={navlogo}/>
                    </span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className="d-flex  my-3  ">
                    <a href={`https://twitter.com/minorityprogram/`} target="_blank"> <span className="social-icon justify-content-center align-items-center"><FaTwitter /></span> </a>
                    <a href={`https://www.facebook.com/MinorityProgrammers`} target="_blank"> <span className="social-icon justify-content-center align-items-center"><FaFacebook /></span> </a>
                    <a href={`https://www.linkedin.com/company/minority-programmers/`} target="_blank"> <span className="social-icon justify-content-center align-items-center"><FaLinkedin /></span> </a>
                     <a href={`https://www.instagram.com/minorityprogrammers/`} target="_blank"> <span className="social-icon justify-content-center align-items-center"><FaInstagram /></span> </a>


                </div>
                <Navbar.Collapse >
                    <Nav className="ml-auto text-white" style={{fontWeight:"bold",fontSize:"20px"}}>

                        <Nav.Link className=" item" as={Link} to="/home">Home</Nav.Link>

                        <Nav.Link className=" item" as={Link} to="#">Startup</Nav.Link>
                        <Nav.Link className=" item" as={Link} to="/learn">Learn</Nav.Link>


                       

                    </Nav>



                </Navbar.Collapse>
            </Container>

        </Navbar >



    );
};

export default IncubatorNav;