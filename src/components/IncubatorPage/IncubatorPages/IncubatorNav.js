import React from 'react';
import navlogo from "../../../images/unnamed.png"
import { FaFacebook, FaLinkedin, FaInstagram, FaPlay, FaGithub, FaTwitter } from "react-icons/fa"


import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IncubatorNav = () => {
    return (
        <Navbar style={{ backgroundColor: "#1F2235" }} sticky="top" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <span style={{ fontSize: "35px", fontWeight: "bold", color: "#2A8477" }}>
                        <img
                            src={navlogo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className="d-flex  my-5  ">
                    <a href={`https://twitter.com/minorityprogram/`} target="_blank"> <span className="social-icon justify-content-center align-items-center"><FaTwitter /></span> </a>
                    <a href={`https://www.facebook.com/MinorityProgrammers`} target="_blank"> <span className="social-icon justify-content-center align-items-center"><FaFacebook /></span> </a>
                    <a href={`https://www.linkedin.com/company/minority-programmers/`} target="_blank"> <span className="social-icon justify-content-center align-items-center"><FaLinkedin /></span> </a>
                     <a href={`https://www.instagram.com/minorityprogrammers/`} target="_blank"> <span className="social-icon justify-content-center align-items-center"><FaInstagram /></span> </a>


                </div>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">

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