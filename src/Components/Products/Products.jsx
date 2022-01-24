import React from 'react';
import './Products.scss'
import { ProductsData } from './../../Data/data';
import { useCart, useCartDispatch } from './../../Context/CartContext';
import { toast } from 'react-toastify';

const Products = () => {

    const products = ProductsData;
    const { cartItems } = useCart();
    const dispatch = useCartDispatch();

    const addItemHandler = (item) => {
        toast.success(`${item.name} به سبد خرید اضافه شد`)
        dispatch({ type: 'ADD_ITEM', payload: item });
    }

    const checkInCart = (cartItems, item) => {
        return cartItems.find(c => c.id === item.id)
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
                                <div className={checkInCart(cartItems, item) ? "products-content__box-footer active-btn" : "products-content__box-footer"} onClick={() => addItemHandler(item)}>
                                    {checkInCart(cartItems, item) ? 'ثبت سفارش' : ' خرید محصول'}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Products;
