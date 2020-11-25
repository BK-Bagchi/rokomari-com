import React from 'react'
import Logo from '../../Images/Logo.png'
import Cart from '../../Images/Cart.png'
import User from '../../Images/User.png'
import Search from '../../Images/Search.png'

const Top = ({ item }) => {
    return (
        <section className="top container">
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-2 d-flex my-3 justify-content-md-start">
                    <img src={Logo} alt="Rokomari Logo" />
                </div>
                <div className="col-md-8 search-box-holder d-flex my-3 justify-content-md-center align-items-center w-100">
                    <form className="d-flex">
                        <p className="m-0 items d-flex align-items-center">{item}</p>
                        <input type="text" placeholder="Search by book name" className="search-box" />
                        <button className="search-btn">
                            <img src={Search} alt="Search Icon" />
                        </button>
                    </form>
                </div>
                <div className="col-md-2 extras d-flex my-3 justify-content-md-center">
                    <img src={Cart} alt="Cart" className="mx-2" />
                    <img src={User} alt="User" className="mx-2" />
                </div>
            </div>
        </section>
    );
};

export default Top;