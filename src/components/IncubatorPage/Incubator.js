import React from 'react';
import AdvanceStartup from './IncubatorPages/AdvanceStartup';
import AuthorInfo from './IncubatorPages/AuthorInfo';
import FeaturedStartup from './IncubatorPages/FeaturedStartup';
import IncubatorNav from './IncubatorPages/IncubatorNav';
import HeaderNav from './IncubatorPages/Navbar/HeaderNav';
import NavBottom from './IncubatorPages/NavBottom';
import UpcomingStartup from './IncubatorPages/UpcomingStartup';



const Incubator = () => {
    return (
        <div className="incubator-page" id="#incubator">
           <IncubatorNav/>
           <NavBottom/>
           <FeaturedStartup/>
           <AdvanceStartup/>
           <UpcomingStartup/>
           
          



        </div>
    );
};

export default Incubator;