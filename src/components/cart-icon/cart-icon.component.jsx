import {useContext} from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import {CartContext} from "../../contexts/cart.context";

import {CartIconContainer, ItemCount} from "./cart-icon.styles";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;