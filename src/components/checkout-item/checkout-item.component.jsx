import {useContext} from "react";

import {CartContext} from "../../contexts/cart.context";

import {CheckItemContainer, ImageContainer, RemoveBtn, Title, Quantity, Price} from "./checkout-item.styles";

const CheckOutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext);

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

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