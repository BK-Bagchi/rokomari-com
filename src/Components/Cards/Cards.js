import React from 'react'
import './Cards.css'
import cardInfo from './CardInfo'

const Cards = () => {
    return (
        <section className="cards container d-flex flex-wrap align-items-center justify-content-center">
            {
                cardInfo.map(card => {
                    const { id, main, text, image } = card
                    return (
                        <main key={id} className="d-flex flex-column align-items-center justify-content-center m-3">
                            <div className="img-holder d-flex align-items-center justify-content-center">
                                <img src={image} alt="Card Img" />
                            </div>
                            <div className="this-card">
                                <h4>{main}</h4>
                                <h6>{text}</h6>
                            </div>
                        </main>
                    )
                })
            }
        </section>
    );
};

export default Cards;