import React, { useState } from 'react';
import { Button, Card, Col, ProgressBar, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import avater from '../../../images/avatar.png'
import '../IntroBlockchainPages/IntroBlockchainpages.css'
import { FaCheckSquare} from "react-icons/fa"
import weeklyActivity from '../../../Data/FeatureedCourseActivity.json';
import { useHistory } from 'react-router';
import { BiArrowBack } from "react-icons/bi";
import WeekSidebar from '../WeekSidebar';
import HeaderNav from '../../IncubatorPage/IncubatorPages/Navbar/HeaderNav';
const IntroBlockchainPages = () => {
    const history=useHistory()
    const [weekActivity,setWeekActivity]=useState(weeklyActivity)
    return (
        <div>
            <HeaderNav/>
       
        <div className="container-fluid" style={{background:"#151371"}}>
            <div className="row ">
            <div className="col-md-3 ">
                <h1> <Button className="ml-3" onClick={()=>history.push(`/learn`)}><BiArrowBack  /></Button> Back</h1>
                <WeekSidebar/>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <section  className="Gradient-btn container-fluid" style={{width:"100%"}}>
                            <Row className="align-items-center justify-content-center ">
                                <Col md={6}>
                                    <Fade left duration={2000} distance="40px">
                                        <Image style={{ height: "200px" }} src={avater} fluid />
                                    </Fade>
                                </Col>
                                <Col md={4} className="p-md-5 mt-md-0 mt-4">
                                    <Fade right duration={2000} distance="40px">

                                        <h1>Welcome back, <br /> Shot</h1>
                                        <p className="text-muted my-4 pr-md-5">75% complete</p>
                                        <Button
                                          
                                            className=""
                                            href="#Learn">
                                            Resume
                                        </Button>
                                    </Fade>
                                </Col>
                            </Row>
                        </section>
                      

                    </div>
                    <section className="Whole-blue">
                            <div className="row  justify-content-between">
                                <div className="col-md-4">
                                    <h1>Modules</h1>

                                </div>
                                <div className="col-md-4">
                                <h1>Calender</h1>
                                    </div>
                                    <div className="col-md-4">
                                    <h1>Messages</h1>
                                    </div>    
                            </div>

                        </section >
                        <section  className="text-white">
                            {
                                weekActivity.map(activity=>
                                    <Card onClick={() => history.push(`/weekPrograss`)} className="p-3 my-3 module-card">
                                <p className="d-flex justify-content-end complete"> <span style={{background:"#00AA4F",borderRadius:"10px",padding:"5px"}}>{activity.complete}</span></p>
                               
                                <div className="text-center  ">
                                <h3>{activity.week} {activity.title}</h3>
                                <ProgressBar className="Gradient-progress my-3" now={70} />
                                    <p>{activity.Progress}% complete</p>
                                </div>
                            </Card>
                                    )
                            }
                           
                        </section>


                </div>
            </div>
           

            </div>                 
        </div>
    );
};

export default IntroBlockchainPages;