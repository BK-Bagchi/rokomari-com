import React from 'react'
import Logo from '../../Images/Logo.png'
import Cart from '../../Images/Cart.png'
import User from '../../Images/User.png'
import Search from '../../Images/Search.png'

const Top = () => {
    return (
        <section className="top container py-2 d-flex justify-content-between align-items-center">
            <img src={Logo} alt="Rokomari Logo" />
            <div className="search-box-holder">
                <form className="d-flex w-100">
                    <p className="m-0 items d-flex align-items-center">Books</p>
                    <input type="text" placeholder="Search by book name" className="search-box" />
                    <button className="search-btn">
                        <img src={Search} alt="Search Icon" />
                    </button>
                </form>
            </div>
            <div className="extras">
                <img src={Cart} alt="Cart" className="mx-2" />
                <img src={User} alt="User" className="mx-2" />
            </div>
        </section>
    );
};

export default Top;