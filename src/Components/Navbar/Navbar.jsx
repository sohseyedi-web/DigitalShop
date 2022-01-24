import React from 'react';
import { FiShoppingCart, FiHome, FiGithub } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import './Navbar.scss'
const Navbar = () => {

    const { cartItems } = useCart();

    return (
        <nav className='navbars'>
            <div className="navbars-item container">
                <h2 className="navbars-item__logo">SOHEILS</h2>
                <div className="navbars-item__links">
                    <Link to="/" className="navbars-item__links-text" ><FiHome /></Link>
                    <Link to="/cart" className="navbars-item__links-text">
                        <FiShoppingCart />
                    </Link>
                    <span className='navbars-item__links-number'>{cartItems.length}</span>
                    <a target='_blank' href='https://github.com/sohseyedi-web' className="navbars-item__links-text"><FiGithub /></a>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;

