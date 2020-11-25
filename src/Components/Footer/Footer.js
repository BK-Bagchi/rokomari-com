import React from 'react'
import './Footer.css'
import Logo from '../../Images/Logo.png'
import FooterForm from './FooterForm';

const Footer = () => {
    return (
        <>
            <FooterForm />
            <footer className="footer pb-5">
                <main className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h3 className="mb-5 invisible">Dipto</h3>
                            <ul>
                                <li>Millions of people of all ages from around the world are improving their lives with us.</li>
                                <li className="invisible">Dipto</li>
                                <li>Copyright &copy; {new Date().getFullYear()} Rokomari.com</li>
                            </ul>
                            <img className="margin" src={Logo} alt="Logo" />
                        </div>
                        <div className="col-md-3">
                            <h3 className="mb-5 margin">Courses</h3>
                            <ul>
                                <li>Graphic Design</li>
                                <li>Web Development</li>
                                <li>Business</li>
                                <li>Marketing</li>
                                <li>Engineering</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3 className="mb-5 margin">Terms</h3>
                            <ul>
                                <li>Terns of Use</li>
                                <li>Privacy Policy</li>
                                <li>Support Policy</li>
                                <li>Refund Policy</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3 className="mb-5 margin">Useful Link</h3>
                            <ul>
                                <li>Learning Community</li>
                                <li>Become a Contributor</li>
                                <li>Support Forum</li>
                                <li>FAQ's</li>
                                <li>Contact US</li>
                            </ul>
                        </div>
                    </div>
                </main>
            </footer>
        </>
    );
};

export default Footer;