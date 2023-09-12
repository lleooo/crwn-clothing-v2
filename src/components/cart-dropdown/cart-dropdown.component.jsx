import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import Button from '../button/button.components';
import CartItem from '../cart-item/cart-item.component';

import {CartContext} from "../../contexts/cart.context";

import {CartDropDownContainer, CartItems} from "./cart-dropdown.styles";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goTOCheckOutHandler = () => navigate('/checkout');

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.map(product => <CartItem cartItem={product} key={product.id} />)}
            </CartItems>
            <Button onClick={goTOCheckOutHandler}>GO TO CHECKOUT</Button>
        </CartDropDownContainer>
    );
};

export default CartDropdown;