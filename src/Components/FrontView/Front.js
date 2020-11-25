import React from 'react'
import './Front.css'
import FrontImg from '../../Images/About.png'

const Front = () => {
    return (
        <section className="front-section">
            <main className="container">
                <div className="row m-0 w-100">
                    <div className="left col-md-6 p-5 d-flex flex-column justify-content-center">
                        <h6>Are you ready to learn?</h6>
                        <h1>Start learning new things Daily</h1>
                        <button>Let's Start</button>
                    </div>
                    <div className="right col-md-6 p-5">
                        <img className="w-100" src={FrontImg} alt="Front Page Img" />
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Front;