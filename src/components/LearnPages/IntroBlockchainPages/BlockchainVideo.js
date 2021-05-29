import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import '../IntroBlockchainPages/IntroBlockchainpages.css';
import { FaCheckSquare } from "react-icons/fa";
import { AiFillCheckCircle,AiOutlineClockCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { Embed } from 'semantic-ui-react';
import Activity from  '../../../Data/Activity.json';
import { useHistory, useParams } from 'react-router';
import WeekSidebar from '../WeekSidebar';
import HeaderNav from '../../IncubatorPage/IncubatorPages/Navbar/HeaderNav';



const BlockchainVideo = () => {
    const {selectId}=useParams();
 
   
    const selectActivity=Activity.find(act=>act.id==selectId);
   const history=useHistory();
    
   
    return (

<div>
    <HeaderNav/>

        <div className="container-fluid " style={{background:"#151371"}}>
            <div className="row ">
                <div className="col-md-3 ">
                <h1> <Button onClick={()=>history.push('/weekPrograss')}><BiArrowBack  /></Button> Back</h1>
                <WeekSidebar/>
                </div>
               
                <div className="col-md-8">

                    <section className=" container-fluid" style={{ width: "100%" }}>
                        <Embed
                            id='125292332'
                            placeholder='../../../images/avatar.png'
                            source='vimeo'
                        />
                    </section>




                    <section className="text-white">
                       
                        <Card className="p-3 my-3 module-card p-5" >
                            <div className="d-flex justify-content-between ">
                                <h1>{selectActivity.activity} {selectActivity.title}</h1>
                                <p >completed</p>
                            </div>
                            <p> <AiOutlineClockCircle/>{selectActivity?.period}</p>

                            <div className="">
                                <h1>Header</h1>
                                <p>{selectActivity.header}</p>
                            </div>
                            <div className="">
                                <h1>Header</h1>
                                <p>{selectActivity.about}</p>
                            </div>
                        </Card>

                    </section>


                </div>
            </div>



        </div>
        </div>
    );
};

export default BlockchainVideo;