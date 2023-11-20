import {useSelector, useDispatch} from "react-redux";

import {selectCartItems} from "../../store/cart/cart.selector";
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../store/cart/cart.action";


import {CheckItemContainer, ImageContainer, RemoveBtn, Title, Quantity, Price} from "./checkout-item.styles";

const CheckOutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

    return (
        <CheckItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <Title>{name}</Title>
            <Quantity>
                <span className="arrow" onClick={removeItemHandler}>&#10094;</span>
                <div className="value">{quantity}</div>
                <span className="arrow" onClick={addItemHandler}>&#10095;</span>
            </Quantity>
            <Price>{price}</Price>
            <RemoveBtn onClick={clearItemHandler}>&#10005;</RemoveBtn>
        </CheckItemContainer>
    );
};

export default CheckOutItem;