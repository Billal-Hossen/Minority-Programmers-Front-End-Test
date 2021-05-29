import React from 'react';
import './Learnpage.css'
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import earth from '../../images/earth.png'


const LearnPageBanner = () => {
    return (
        <div className="learn-page-banner">
             <Container fluid>
            <Row className="align-items-center justify-content-center banner">
                <Col md={6}>
                    <Fade left duration={2000} distance="40px">
                        <Image style={{height:"400px"}} src={earth} fluid />
                    </Fade>
                </Col>
                <Col md={6} className="p-md-5 mt-md-0 mt-4 text-white">
                    <Fade right duration={2000} distance="40px">
                        <h1>Learn high in demand <br />IT Skills & Get Crypto </h1>
                        <h4 style={{marginLeft:"100px"}}>powered by <span style={{color:"black"}}>KoinStreet</span> </h4>
                       
                    </Fade>
                </Col>
            </Row>
        </Container>
            
        </div>
    );
};

export default LearnPageBanner;