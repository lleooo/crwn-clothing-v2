import {useSelector} from "react-redux";

import {selectCartItems, selectCartTotal} from "../../store/cart/cart.selector";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";

import {CheckOutContainer, Header, HeaderBlock, Total} from "./checkout.styles";

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectCartTotal);

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