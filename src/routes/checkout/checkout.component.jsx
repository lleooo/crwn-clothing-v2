import {useContext} from "react";

import {CartContext} from "../../contexts/cart.context";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";

import {CheckOutContainer, Header, HeaderBlock, Total} from "./checkout.styles";

const CheckOut = () => {
    const {cartItems, totalPrice} = useContext(CartContext);
    console.log(totalPrice);
    return (
        <CheckOutContainer>
            <Header>
                <HeaderBlock><span>Product</span></HeaderBlock>
                <HeaderBlock><span>Description</span></HeaderBlock>
                <HeaderBlock><span>Quantity</span></HeaderBlock>
                <HeaderBlock><span>Price</span></HeaderBlock>
                <HeaderBlock><span>Remove</span></HeaderBlock>
            </Header>
            {cartItems.map((cartItem) => <CheckOutItem key={cartItem.id} cartItem={cartItem} />)}

            <Total> Total:{totalPrice} </Total>
        </CheckOutContainer>
    );
};
export default CheckOut;