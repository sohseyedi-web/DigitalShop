import React from 'react';
import { FiMail, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-content container">
                <h2 className="footer-content__logo">SOHEIL</h2>
                <div className="footer-content__links">
                    <Link to="/" className="navbars-item__links-text" ><FiLinkedin /></Link>
                    <Link to="/" className="navbars-item__links-text" ><FiTwitter /></Link>
                    <Link to="/" className="navbars-item__links-text" ><FiMail /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
