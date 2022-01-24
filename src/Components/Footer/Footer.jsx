import React from 'react';
import { FiGithub } from "react-icons/fi";


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-content container">
                <h2 className="footer-content__logo">SOHEIL</h2>
                <div className="footer-content__links">
                    <Link to="/" className="navbars-item__links-text" ><FiHome /></Link>
                    <Link to="/" className="navbars-item__links-text" ><FiHome /></Link>
                    <Link to="/" className="navbars-item__links-text" ><FiHome /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
