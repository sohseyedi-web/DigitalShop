import React, { createContext, useContext, useReducer } from 'react';
import CartReducer from './CartReducer';

export const CartContext = createContext();
export const CartContextAction = createContext();

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    total: 0
}

const CartProvider = ({ children }) => {

    const [cart, dispatch] = useReducer(CartReducer, initialState)

    return (
        <CartContext.Provider value={cart}>
            <CartContextAction.Provider value={dispatch}>
                {children}
            </CartContextAction.Provider>
        </CartContext.Provider>
    );
};

export default CartProvider;


export const useCart = () => useContext(CartContext)
export const useCartDispatch = () => useContext(CartContextAction)
