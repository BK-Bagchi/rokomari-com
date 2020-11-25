import React from 'react'
import './Courses.css'
import courseInfo from './courseInfo'
import Calender from '../../Images/Calender.png'
import Seat from '../../Images/Seat.png'

const Courses = () => {
    return (
        <section className="online-courses">
            <div className="container d-flex flex-column align-items-center">
                <h1 className="text-muted my-5">Online Courses</h1>
                <div className="d-flex flex-wrap align-items-center justify-content-center">
                    {
                        courseInfo.map(course => {
                            const { id, proImg, backImg, text } = course
                            return (
                                <main key={id} className="m-2">
                                    <div className="backImg">
                                        <img className="w-100" src={backImg} alt="Background" />
                                    </div>
                                    <div className="holder d-flex justify-content-between align-items-center px-4">
                                        <div className="profile-pic d-flex align-items-center justify-content-center">
                                            <img src={proImg} alt="Profile Pic" />
                                        </div>
                                        <button className="course-fee">Free</button>
                                    </div>
                                    <div className="info px-4">
                                        <h4 className="my-3">{text}</h4>
                                        <h6 className="text-muted my-3">Designation</h6>
                                        <button className="my-3">Buy Course</button>
                                    </div>
                                    <div className="px-4"><hr /></div>
                                    <footer className="px-4 mb-2 d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img src={Calender} alt="Calender" />
                                            <p className="text-muted ml-2 font-weight"> Start: 20 July, 2020</p>
                                        </div>
                                        <div className="d-flex">
                                            <img src={Seat} alt="Seats" />
                                            <p className="text-muted ml-2 font-weight"> 60 Seats</p>
                                        </div>
                                    </footer>
                                </main>
                            )
                        })
                    }
                </div>
                <button className="view-course my-5">View All Courses</button>
            </div>
        </section>
    );
};

export default Courses;