import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import learnimg from '../images/learn.jpg'

const LearnBanner = () => {
    return (
        <section className="learn-container">
        <Container fluid>
            <Row className="align-items-center justify-content-center banner">
                <Col md={6}>
                    <Fade left duration={2000} distance="40px">
                        <Image src={learnimg} fluid />
                    </Fade>
                </Col>
                <Col md={4} className="p-md-5 mt-md-0 mt-4">
                    <Fade right duration={2000} distance="40px">
                        <p>About Our Company</p>
                        <h3>How We Can Help you</h3>
                        <p className="text-muted my-4 pr-md-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
                        <Button
                            className="btn-main"
                            href="#Learn">
                            Learn More
                        </Button>
                    </Fade>
                </Col>
            </Row>
        </Container>
    </section>
    );
};

export default LearnBanner;