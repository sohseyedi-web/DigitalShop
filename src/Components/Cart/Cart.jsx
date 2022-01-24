import React from 'react';
import Layout from './../../Layout/Layout';
import { BiMinus, BiPlus } from 'react-icons/bi'
import { useCart, useCartDispatch } from './../../Context/CartContext';
import './Cart.scss'

const Cart = () => {

    const { cartItems } = useCart();
    const dispatch = useCartDispatch();
    const hasItem = cartItems.length === 0;
    const totalCart = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
    return (
        <Layout>
            <section className='cart'>
                <div className="container">
                    {
                        !hasItem ? (

                            <>
                                <ul className='cart-list'>
                                    {
                                        cartItems.map((item) => (
                                            <li className='cart-list__item' key={item.id}>
                                                <div className="cart-list__item-details">
                                                    <img className="cart-list__item-details__img" alt={item.name} src={item.image} />
                                                    <div className="cart-list__item-details__name">{item.name}</div>
                                                </div>
                                                <div className="cart-list__item-actions">
                                                    <button className="cart-list__item-actions__btn" onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}><BiPlus size={25} /></button>
                                                    <span className="cart-list__item-actions__quantity">{item.quantity}</span>
                                                    <button className="cart-list__item-actions__btn" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item })}><BiMinus size={25} /></button>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="cart-total">
                                    <div className="cart-total__left">
                                        <span className='cart-total__left-name'>Total : </span>
                                        <span className='cart-total__left-price'>{totalCart}/000</span>
                                    </div>
                                    <div className="cart-total__right">CheckOut</div>
                                </div>
                            </>
                        ) : (
                            <div className='text-center display-3'>سبد خرید خالی است</div>
                        )
                    }
                </div>
            </section>
        </Layout>
    )
};

export default Cart;
