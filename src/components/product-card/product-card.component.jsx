import "./product-card.styles.scss";

import Button from "../button/button.components";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    return (
        <div className="product-card-container">
            {/* <img src={imageUrl} alt={name} /> */}
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button button_type={'inverted'}>Add to Card</Button>
        </div>
    );
};

export default ProductCard;