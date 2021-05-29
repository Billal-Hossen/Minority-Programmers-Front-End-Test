import React, { useState } from 'react';
import { Button, Container, Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
import myCoursesData from '../../Data/MyCoursesData.json'
import MyCoursesCard from './MyCoursesCard';
import { FiSearch } from 'react-icons/fi';


const MyCourses = () => {
    const [courseData, SetCourseData] = useState(myCoursesData)
    return (
        <div>

            <Container>
                <section className="my-5 " >
                    <InputGroup>
                        <FormControl
                            placeholder="What events are you looking for?"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                        <Button variant="outline-secondary"> <FiSearch /></Button>
                           
                            <DropdownButton
                                as={InputGroup.Append}
                                variant="outline-secondary"
                                title="Filter Search"
                                id="input-group-dropdown-2"
                            >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup.Append>
                    </InputGroup>
                </section>
                <h1 className="text-white">My Courses</h1>
                <div className="row">
                    {
                        courseData.map(course => <MyCoursesCard course={course}></MyCoursesCard>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default MyCourses;