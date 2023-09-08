import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import Button from '../button/button.components';
import CartItem from '../cart-item/cart-item.component';

import {CartContext} from "../../contexts/cart.context";

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const goTOCheckOutHandler = () => navigate('/checkout');

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(product => <CartItem cartItem={product} key={product.id} />)}
            </div>
            <Button onClick={goTOCheckOutHandler}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;