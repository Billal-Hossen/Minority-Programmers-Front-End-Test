import React from 'react';
import HeaderNav from '../IncubatorPage/IncubatorPages/Navbar/HeaderNav';
import FeaturedCourses from './FeaturedCourses';

import LearnPageBanner from './LearnPageBanner';
import MyCourses from './MyCourses';


const LearnPages = () => {
    return (
        <div style={{background:"#151371"}}>
            <HeaderNav/>
          <LearnPageBanner/>
          <MyCourses/>
          <FeaturedCourses/>
            
        </div>
    );
};

export default LearnPages;