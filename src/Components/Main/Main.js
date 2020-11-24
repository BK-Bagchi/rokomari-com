import React from 'react'
import Cards from '../Cards/Cards';
import Courses from '../Courses/Courses';
import Front from '../FrontView/Front'
import Header from '../Header/Header'

const Main = () => {
    return (
        <>
            <Header />
            <Front />
            <Cards />
            <Courses />
        </>
    );
};

export default Main;