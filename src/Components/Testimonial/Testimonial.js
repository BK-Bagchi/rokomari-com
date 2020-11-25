import React from 'react'
import './Testimonial.css'
import User1 from '../../Images/Testimonial_Guy.png'
import User2 from '../../Images/Course_User_1.png'
import User3 from '../../Images/Course_User_2.png'
import User4 from '../../Images/Course_User_3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'

const Swipe = ({ User, name }) => {
    return (
        <main className="row d-flex align-items-center justify-content-center px-5">
            <div className="col-md-3 px-5 d-flex justify-content-center">
                <img className="w-75" src={User} alt="Testimonial Guy" />
            </div>
            <div className="col-md-9 px-5">
                <p>There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in
                some form, by injected humour, or randomized words which
                     don't look even slightly believable.</p>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <h6 className="d-inline"> {name} <span className="text-muted">- Student</span></h6>
                </div>
            </div>
        </main>
    )
}

const Testimonial = () => {
    return (
        <section className="testimonial container my-5">
            <h1 className="text-muted text-center my-5">Testimonial</h1>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Swipe User={User1} name={'Edward Kenway'} />
                    </div>
                    <div className="carousel-item">
                        <Swipe User={User2} name={'Shay Kormat'} />
                    </div>
                    <div className="carousel-item">
                        <Swipe User={User3} name={'Eve Frey'} />
                    </div>
                    <div className="carousel-item">
                        <Swipe User={User4} name={'Hetham Kenway'} />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon arrow left" aria-hidden="true">{<FontAwesomeIcon icon={faChevronLeft} />}</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon arrow right" aria-hidden="true">{<FontAwesomeIcon icon={faChevronRight} />}</span>
                </a>
            </div>
        </section>
    );
};

export default Testimonial;