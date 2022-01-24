

const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const addItem = [...state.cartItems];
            const addItemIndex = addItem.findIndex(item => item.id === action.payload.id);
            if (addItemIndex >= 0) {
                const updatedaddItem = { ...addItem[addItemIndex] }
                updatedaddItem.quantity++;
                addItem[addItemIndex] = updatedaddItem;
                console.log(updatedaddItem);
            } else {
                let tempProduct = { ...action.payload, quantity: 1 }
                addItem.push(tempProduct)
            }
            localStorage.setItem('cartItems', JSON.stringify(addItem))
            return {
                ...state, cartItems: addItem
            }

        case 'REMOVE_ITEM':
            const removeItem = [...state.cartItems];
            const removeItemIndex = removeItem.findIndex(item => item.id === action.payload.id);
            const updatedRemoveItem = { ...removeItem[removeItemIndex] }

            if (updatedRemoveItem.quantity === 1) {
                const filterItem = removeItem.filter(item => item.id !== action.payload.id);
                localStorage.setItem('cartItems', JSON.stringify(filterItem))
                return { ...state, cartItems: filterItem }
            } else {
                updatedRemoveItem.quantity--;
                removeItem[removeItemIndex] = updatedRemoveItem;
                localStorage.setItem('cartItems', JSON.stringify(removeItem))
                return { ...state, cartItems: removeItem }
            }
    }
};
export default CartReducer;
