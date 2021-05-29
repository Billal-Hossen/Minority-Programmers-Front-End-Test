import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import FeatureData from "../../../Data/UpComingFeatureData"
import UpcomingCard from './UpcomingCard';

const UpcomingStartup = () => {
    const [features, setFeatures] = useState(FeatureData);
    console.log('data', features)
    return (
        <div >

            <Container>
                <div className="row my-3">
                    <div className="col-md-3" >
                        <h1>Upcoming <br /> Startups</h1>
                        <p>These visionary companies and <br /> disruptors are on their journey <br /> to change the world. <br /> billion dollar.</p>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                        {
                                features.map(course => <UpcomingCard course={course}></UpcomingCard>)
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

export default UpcomingStartup;