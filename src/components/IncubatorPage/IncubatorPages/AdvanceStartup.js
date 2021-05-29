import React from 'react';
import { Container } from 'react-bootstrap';
import '../IncubatorPages/IncubatorPages.css'

const AdvanceStartup = () => {
    return (
        <Container>
            <div className="container row text-white ">
                <div className="col-md-4 ">
                    <div className="advance-img-1 d-flex justify-content-center align-items-center" style={{ height: "192px" }}>
                        <p>Advice a startup</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="advance-img-2 d-flex justify-content-center align-items-center" style={{ height: "192px" }}>
                        <p>Join Minority Ventures Cohort</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="advance-img-3 d-flex justify-content-center align-items-center " style={{ height: "192px" }}>
                        <p className="">Help</p>
                    </div>
                </div>


            </div>
        </Container>
    );
};

export default AdvanceStartup;