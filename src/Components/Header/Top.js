import React from 'react'
import Logo from '../../Images/Logo.png'
import Cart from '../../Images/Cart.png'
import User from '../../Images/User.png'

const Top = () => {
    return (
        <section className="top container p-0 d-flex justify-content-between">
            <img src={Logo} alt="Rokomari Logo" />
            <div className="search-box">
                <input type="text" placeholder="Search by book name" />
            </div>
            <div className="extras">
                <img src={Cart} alt="Cart" className="mx-2" />
                <img src={User} alt="User" className="mx-2" />
            </div>
        </section>
    );
};

export default Top;