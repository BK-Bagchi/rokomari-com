import React, { useState } from 'react'
import './Header.css'
import Navbar from './Navbar'
import Top from './Top'

const Header = () => {
    const [item, setItem] = useState('Books')
    return (
        <>
            <Top item={item} />
            <Navbar setItem={setItem} />
        </>
    );
};

export default Header;