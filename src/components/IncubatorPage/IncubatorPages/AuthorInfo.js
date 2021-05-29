import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaPlay, FaGithub, FaTwitter } from "react-icons/fa"
import {CgArrowLeftO } from "react-icons/cg"
import { Button, Card, ProgressBar } from 'react-bootstrap';
import { Feed } from 'semantic-ui-react'
import '../IncubatorPages/IncubatorPages.css'
import HeaderNav from './Navbar/HeaderNav';

import courseData from '../../../Data/MyCoursesData.json'
import FeatureCard from './FeatureCard';
import { useHistory } from 'react-router';
import IncubatorNav from './IncubatorNav';

// const image = '/images/avatar/small/laura.jpg'
// const date = '3 days ago'
// const summary = 'Laura Faucet created a post'
// const extraText = "Have you seen what's going on in Israel? Can you believe it."



const AuthorInfo = () => {
    const authors=[
        {
            name:"Edmund Kitan",
            position:"Founder",
            image:"https://ibb.co/kMRYmgV"
        },
        {
            name:"Olarenwaju Cesar",
            position:"Co-Founder",
            image:"https://www.google.com/search?q=avatar+image&sxsrf=ALeKk02x4LgXFCA5SHd0-IL4LsNeegYSrA:1622091712356&tbm=isch&source=iu&ictx=1&fir=5gYUCMTyYfVWCM%252CIty-VeKC8FSPXM%252C_&vet=1&usg=AI4_-kSxdyRSe2cEp4dFF7hmGiRFDE6M1g&sa=X&ved=2ahUKEwjA3rrCiunwAhUw7GEKHbRCBn4Q9QF6BAgREAE&biw=1366&bih=625#imgrc=Jjq5a5o5G80fpM"
        },
        {
            name:"Uzo Amanda",
            position:"Head of Growth",
            image:"https://www.google.com/search?q=avatar+image&sxsrf=ALeKk02x4LgXFCA5SHd0-IL4LsNeegYSrA:1622091712356&tbm=isch&source=iu&ictx=1&fir=5gYUCMTyYfVWCM%252CIty-VeKC8FSPXM%252C_&vet=1&usg=AI4_-kSxdyRSe2cEp4dFF7hmGiRFDE6M1g&sa=X&ved=2ahUKEwjA3rrCiunwAhUw7GEKHbRCBn4Q9QF6BAgREAE&biw=1366&bih=625#imgrc=Jjq5a5o5G80fpM"
        },
        {
            name:"Donald Duke",
            position:"Head of Project",
            image:"https://www.google.com/search?q=avatar+image&sxsrf=ALeKk02x4LgXFCA5SHd0-IL4LsNeegYSrA:1622091712356&tbm=isch&source=iu&ictx=1&fir=5gYUCMTyYfVWCM%252CIty-VeKC8FSPXM%252C_&vet=1&usg=AI4_-kSxdyRSe2cEp4dFF7hmGiRFDE6M1g&sa=X&ved=2ahUKEwjA3rrCiunwAhUw7GEKHbRCBn4Q9QF6BAgREAE&biw=1366&bih=625#imgrc=Jjq5a5o5G80fpM"
        }
    ]
    const history=useHistory()
    const [features, setFeatures] = useState(courseData);
    return (
        <div className="incubator-page">
           <IncubatorNav/>
        <div className="container  my-3" >
          
          <div className="row " style={{background:"white",borderRadius:"15px 15px 0px 0px"}}>
              <div className="col-md-1">
              <CgArrowLeftO onClick={()=>history.push(`/incubator`)} className="my-3" style={{height:"50px",width:"50px"}} / >
              </div>
              <div className="col-md-2">
              <div className="d-flex justify-content-between">
               <img
                        src=''
                        width="50"
                        height="50"
                        className="d-inline align-top m-3"
                        // alt="React Bootstrap logo"
                    />
                <h1>Hello</h1>
               </div>
              
               
              </div>
              <div className="col-md-3">
              <div>
                  <div className="d-flex mt-3 justify-content-between align-items-center">
                      <h4>Funds raised</h4>
                      <p>50% complete</p>
                  </div>
                  <p>$50000000</p>
              </div>
               </div>
               <div className="col-md-3">
               <ProgressBar className="Gradient-progress mt-3" now={60} />
               </div>
               <div className="col-md-3 my-3">
               <Button className="m-auto gradient-btn " >View Startups</Button>

               </div>
          </div>
            <div className="row my-5">
                <div className="col-md-3" >
                    <div style={{background:"#FFFFFF"}}>
                        <Card border="light" >
                            <Card.Header>Founded 7th May,2015</Card.Header>
                            <Card.Body>
                                <p>Website</p>
                                <Card.Title>
                                     <a href="https://minorityprogrammers.com/" target="_blank">Mangoswap.com</a>
                                     <a href={`https://twitter.com/minorityprogram`} target="_blank"> <span className="ml-2 mr-2"><FaTwitter /></span> </a>                
                                    <a href={`https://www.linkedin.com/company/minority-programmers/`} target="_blank"> <span className="mr-2"><FaLinkedin /></span> </a>
                                    <a href={`https://www.facebook.com/MinorityProgrammers`} target="_blank"> <span className=" mr-2"><FaFacebook /></span> </a>
                                    
                                </Card.Title>
                                
                                <Card.Text>
                                    <p>Location</p>
                                    <h3>San Francisco, California</h3>
                                    <p>Team of people</p>
                                    <h3>100-500 people</h3>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="p-2" style={{borderTop:"1px solid gray",background:"#FFFFFF"}}>
                    <h1>Meet the team</h1>
                   {
                       authors.map(author=> <Feed>
                       
                        <Feed.Event>
                        <Feed.Label image={author.image} />
                            <Feed.Content>
                              
                                <Feed.Summary content={author.name} />
                                <Feed.Extra text content={author.position} />
                            </Feed.Content>
                        </Feed.Event>
                    </Feed>
)
                   }
                    </div>
                    <div className="p-2" style={{borderTop:"1px solid gray",background:"#FFFFFF"}}>
                        <h1>Tag</h1>
                        <button type="button" class="btn btn-outline-secondary mr-2">crypto</button>
                        <button type="button" class="btn btn-outline-secondary mr-2">Exchanges</button>
                        <button type="button" class="btn btn-outline-secondary mr-2">NET</button>
                        <button type="button" class="btn btn-outline-secondary mr-2">Blockchain</button>
                    </div>
                </div>
                <div className="col-md-9">
                    <section className="m-2 pl-5" style={{background:"#FFFFFF"}}>
                        <h1>About Startup</h1>
                        <p >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                    </section>
                    <section className="m-2 pl-5 mt-4" style={{background:"#FFFFFF"}}>
                        <h1>Vision</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation v</p>
                    </section>
                    <section className="m-2 pl-5 mt-3" style={{background:"#FFFFFF"}}>
                        <h1>Related startups</h1>
                        <div className="row">
                        {
                            features.map(course=><FeatureCard course={course}></FeatureCard>)
                        }
                        </div>

                    </section>

                </div>
            </div>

        </div>
        </div>
    );
};

export default AuthorInfo;