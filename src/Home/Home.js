import React from 'react';
import HomeNav from './HomeNav';
import IncubatorBanner from './IncubatorBanner';
import LearnBanner from './LearnBanner';

const Home = () => {
    return (
        <div>
            <HomeNav/>
            <IncubatorBanner/>
            <LearnBanner/>
            
        </div>
    );
};

export default Home;