import {createContext, useState, useEffect} from "react";

const addCartItem = (cartItems, productToAdd) => {

    const exist = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    // if (exist) {
    //     return cartItems.map(cartItem =>
    //         cartItem.id === productToAdd.id
    //             ? {...cartItem, quantity: cartItem.quantity + 1}
    //             : cartItem
    //     );
    // }

    // return [...cartItems, {...productToAdd, quantity: 1}];

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

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newTotalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
        setCartCount(newCartCount);
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems, productToAdd));
    };
    const removeItemFromCart = (productToRemove) => {
        setCartItem(removeCartItem(cartItems, productToRemove));
    };

    const clearItemFromCart = (productToClear) => {
        setCartItem(clearCartItem(cartItems, productToClear));
    };

    const val = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearItemFromCart, totalPrice};

    return (
        <CartContext.Provider value={val}>{children}</CartContext.Provider>
    );
};