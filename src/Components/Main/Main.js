import React from 'react'
import Cards from '../Cards/Cards';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Front from '../FrontView/Front'
import Header from '../Header/Header'
import Testimonial from '../Testimonial/Testimonial';

const Main = () => {
    return (
        <>
            <Header />
            <Front />
            <Cards />
            <Courses />
            <Testimonial />
            <Footer />
        </>
    );
};

export default Main;