import {createContext, useState, useEffect} from "react";

const addCartItem = (cartItems, productToAdd) => {

    const exist = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if (exist) {
        return cartItems.map(cartItem =>
            cartItem.id === productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItem: [],
    addItemToCart: () => { },
    cartCount: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItem] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems, productToAdd));//接收arr
    };

    const val = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount};

    return (
        <CartContext.Provider value={val}>{children}</CartContext.Provider>
    );
};