import {useDispatch, useSelector} from "react-redux";

import {selectCartItems} from "../../store/cart/cart.selector";
import {addItemToCart} from "../../store/cart/cart.action";

import {ProductContainer, Footer} from "./product-card.styles";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.components";
const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addPrdToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </Footer>
            <Button button_type={BUTTON_TYPE_CLASSES.inverted} onClick={() => addPrdToCart(product)}>Add to Card</Button>
        </ProductContainer>
    );
};

export default ProductCard;