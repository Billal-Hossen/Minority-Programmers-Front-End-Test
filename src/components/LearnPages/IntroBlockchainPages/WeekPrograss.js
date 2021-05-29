import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row, ProgressBar } from 'react-bootstrap';

import '../IntroBlockchainPages/IntroBlockchainpages.css';
import { BiArrowBack } from "react-icons/bi";

import { useHistory, useParams } from 'react-router';
import HeaderNav from '../../IncubatorPage/IncubatorPages/Navbar/HeaderNav';
import img from '../../../images/avatar.png';
import courseDetails from '../../../Data/Activity.json';
import WeekSidebar from '../WeekSidebar';

const WeekPrograss = () => {
    
   const {id}=useParams()
    const history = useHistory();
    const [details,setDetails]=useState(courseDetails);
    // const selectWeek=courseDetails.find(courseData=>courseData.id === id);
    // useEffect(()=>{
    //     setProgress(selectWeek)

    // },[])


    return (
        <div className="p-0">
            <HeaderNav />


            <div className="row w-100">
            <div className="col-md-3 ">
                <h1> <Button className="ml-3" onClick={()=>history.push(`/introBlockchainpages/{id}`)}><BiArrowBack  /></Button> Back</h1>
                <WeekSidebar/>
                </div>
                <div className="col-md-9  p-0" >


                    <Card className="Gradient-btn container-fluid  text-white p-5" >
                        <div>
                            <h1>week-1</h1>
                            <h2 className="mb-2 ">Card Subtitle</h2>
                            <div className="text-center">
                                <p>10/10</p>
                                <ProgressBar className="Gradient-progress" now={60} />
                                <p>100% Complete</p>
                            </div>

                        </div>
                    </Card>




                    <section className="text-white">
                      {
                            details.map(detail=>
                                <Card onClick={() => history.push(`/blockchainVideo/${detail.id}`)} className="p-5 my-3 module-card">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img
                                            src={detail.image}
                                            width="80"
                                            height="80"
                                            className="d-inline-block align-top"
                                            alt="React Bootstrap logo"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                       <h3 className="d-flex justify-content-between"> {detail.activity} {detail.title}</h3>
                                     </div>
                                    <div className="col-md-4 d-flex justify-content-end">
                                        {detail.status}
                                    </div>
                                </div>
                            </Card>
                                )
                      }
                       
                    </section>


                </div>
            </div>


        </div>

    );
};

export default WeekPrograss;