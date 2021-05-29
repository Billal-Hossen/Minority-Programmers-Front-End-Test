import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import FeatureData from "../../../Data/MyCoursesData.json"
import FeatureCard from './FeatureCard';
import '../IncubatorPages/FeaturedStartup.css'

import Fade from 'react-reveal/Fade';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { CardDeck, Spinner } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';


const FeaturedStartup = () => {
    const [features, setFeatures] = useState(FeatureData);
    console.log(features)


    return (
        <div >
            <Container>
                <div className="row">
                    <div className="col-md-3 " style={{height:"300px"}}>
                        <h1>Featured <br /> Startups</h1>
                        <h3>Invest in the next <br /> billion dollar <br /> company today</h3>
                    </div>
                    <div className="col-md-9">
                       <div className="row">
                       {
                            features.map(course=><FeatureCard course={course}></FeatureCard>)
                        }
                       </div>
                    </div>
                </div>

                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">


                </div>
            </Container>




        </div>
    );
};

export default FeaturedStartup;