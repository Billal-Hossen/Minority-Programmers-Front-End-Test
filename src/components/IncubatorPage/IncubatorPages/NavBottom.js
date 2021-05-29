import React from 'react';
import { Button } from 'react-bootstrap';
import '../IncubatorPages/IncubatorPages.css'

const NavBottom = () => {
    return (
        <div className="nav-bottom text-white" >
            <div className="d-flex justify-content-end " style={{height:"304px"}}>
         
               <div className="text-center">
               <h1 className="mt-3 mr-5 nav-btn-word">Invest directly into <br /> minority innovations.</h1>
                <Button className="m-auto gradient-btn" >View Startups</Button>

               </div>

            </div>
            
        </div>
    );
};

export default NavBottom;