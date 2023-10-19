import {createContext, useState, useEffect, useReducer} from "react";


const addCartItem = (cartItems, productToAdd) => {
    const exist = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if (exist) {
        cartItems.forEach(product => {
            if (product.id === productToAdd.id) {
                product.quantity++;
            }
        });
    } else {
        cartItems.push({...productToAdd, quantity: 1});
    }
    return [...cartItems];
};

const removeCartItem = (cartItems, productToRemove) => {
    const removeItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);

    if (removeItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    } else {
        cartItems.forEach(product => {
            if (product.id === productToRemove.id) {
                product.quantity--;
            }
        });
        return [...cartItems];
    };
};

const clearCartItem = (cartItems, productToClear) => {
    const clearItem = cartItems.find(cartItem => cartItem.id === productToClear.id);

    return cartItems.filter(product => product.id !== clearItem.id);

};


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItem: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartCount: 0,
    totalPrice: 0
});

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    totalPrice: 0
};

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'SET_IS_CART_OPEN':
            return {
                ...state,
                'isCartOpen': payload
            };
        case 'SET_CART_ITEMS':
            return {
                ...state,
                ...payload
            };
        default:
            break;
    }

};

export const CartProvider = ({children}) => {
    const [{isCartOpen, cartItems, cartCount, totalPrice}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const setIsCartOpen = (bool) => {
        dispatch({type: 'SET_IS_CART_OPEN', payload: bool});
    };

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newTotalPrice = newCartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);

        dispatch({type: 'SET_CART_ITEMS', payload: {cartItems: newCartItems, cartCount: newCartCount, cartTotal: newTotalPrice}});
    };

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    };
    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    };

    const clearItemFromCart = (productToClear) => {
        const newCartItems = clearCartItem(cartItems, productToClear);
        updateCartItemsReducer(newCartItems);
    };

    const val = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        removeItemFromCart,
        clearItemFromCart,
        totalPrice
    };

    return (
        <CartContext.Provider value={val}>{children}</CartContext.Provider>
    );
};