import React from 'react';
import Layout from '../Layout/Layout';
import Products from './../Components/Products/Products';

const HomePage = () => {
    return (
        <Layout>
            <main>
                <Products />
            </main>
        </Layout>
    );
};

export default HomePage;
