import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import FeaturedCoursesData from '../../Data/FeatuedCoursesData.json'
import FeatureCoursesCard from './FeatureCoursesCard';



const FeaturedCourses = () => {
    const [courseData,SetCourseData]=useState(FeaturedCoursesData)
    console.log("FeaturedCoursesData",courseData)
    return (
        <div>
           <Container>
           <h1 className="text-white">Featured Courses</h1>
            <div className="row">
                {
                    courseData.map(course=><FeatureCoursesCard  course={course}></FeatureCoursesCard>)
                }
            </div>
           </Container>
            
        </div>
    );
};

export default FeaturedCourses;