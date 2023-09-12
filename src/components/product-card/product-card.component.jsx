import {useContext} from "react";

import {CartContext} from "../../contexts/cart.context";

import {ProductContainer, Footer} from "./product-card.styles";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.components";
const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);

    return (
        <ProductContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </Footer>
            <Button button_type={BUTTON_TYPE_CLASSES.inverted} onClick={() => addItemToCart(product)}>Add to Card</Button>
        </ProductContainer>
    );
};

export default ProductCard;