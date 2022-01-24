import React from 'react';
import './Products.scss'
import { ProductsData } from './../../Data/data';
import { useCartDispatch } from './../../Context/CartContext';

const Products = () => {

    const products = ProductsData;
    const dispatch = useCartDispatch();

    const addItemHandler = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    }

    return (
        <section className='products'>
            <div className="container">
                <div className="products-content">
                    {
                        products.map((item) => (
                            <div className="products-content__box" key={item.id}>
                                <img src={item.image} className='products-content__box-img' alt={item.name} />
                                <div className="products-content__box-body">
                                    <div className="products-content__box-body__name">{item.name}</div>
                                    <div className="products-content__box-body__price">{item.price}/000</div>
                                </div>
                                <div className="products-content__box-footer" onClick={() => addItemHandler(item)}>خرید محصول</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;
