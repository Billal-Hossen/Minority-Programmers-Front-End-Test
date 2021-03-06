import React from 'react';
import '../IncubatorPage/IncubatorPages/IncubatorPages.css';
import { FaCheckSquare } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";



const WeekSidebar = () => {
    return (
        <div  className="text-white" >
                    <div className="p-3 text-white">
                       
                        <h1>Intro to Blockchain</h1>
                    </div>
                    <div className="p-3">
                        <h1>Week 1</h1>
                        <h3> <a href="#" className="mr-2"><AiFillCheckCircle style={{ background: "#FFFFFF" }} /> </a> Introduction</h3>
                        <h3> <a href="#" className="mr-2"><AiFillCheckCircle style={{ background: "#FFFFFF" }} /> </a> Introduction</h3>
                        <h3> <AiFillCheckCircle style={{ background: "#FFFFFF" }} className="mr-2" /> Introduction</h3>
                    </div>
                    <div className="p-3">
                        <h1>Week 2</h1>
                       
                        <h3> <a href="#" className="mr-2"><AiFillCheckCircle style={{ background: "#FFFFFF" }} /> </a> Introduction</h3>
                        <h3> <a href="#" className="mr-2"><AiFillCheckCircle style={{ background: "#FFFFFF" }} /> </a> Introduction</h3>
                        <h3> <AiFillCheckCircle style={{ background: "#FFFFFF" }} className="mr-2" /> Introduction</h3>
                    </div>
                    <div className="p-3">
                        <h1>Week 3</h1>
                        <h3> <a href="#" className="mr-2"><AiFillCheckCircle style={{ background: "#FFFFFF" }} /> </a> Introduction</h3>
                        <h3> <a href="#" className="mr-2"><AiFillCheckCircle style={{ background: "#FFFFFF" }} /> </a> Introduction</h3>
                        <h3> <AiFillCheckCircle style={{ background: "#FFFFFF" }} className="mr-2" /> Introduction</h3>
                    </div>
                    <div className="p-3">
                        <h1>Week 4</h1>
                        <h3> <a href="#" className="mr-2"><AiFillCheckCircle style={{ background: "#FFFFFF" }} /> </a> Introduction</h3>
                        <h3> <a href="#" className="mr-2"><AiFillCheckCircle style={{ background: "#FFFFFF" }} /> </a> Introduction</h3>
                        <h3> <AiFillCheckCircle style={{ background: "#FFFFFF" }} className="mr-2" /> Introduction</h3>
                    </div>
                    <div className="p-3">
                        <h1>Week 5</h1>
                        <h3> <a href="#" className="mr-2"><AiFillCheckCircle style={{ background: "#FFFFFF" }} /> </a> Introduction</h3>
                        <h3> <a href="#" className="mr-2"><AiFillCheckCircle style={{ background: "#FFFFFF" }} /> </a> Introduction</h3>
                        <h3> <AiFillCheckCircle style={{ background: "#FFFFFF" }} className="mr-2" /> Introduction</h3>
                    </div>

                </div>
    );
};

export default WeekSidebar;