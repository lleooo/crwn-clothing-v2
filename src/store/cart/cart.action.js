import {CART_ACTION_TYPES} from "./cart.types";
import {createAction} from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
    console.log(cartItems);
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


export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

