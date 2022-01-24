import React from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <ToastContainer />
            <Navbar />
            {children}
            <Footer />
        </>
    )
};

export default Layout;
