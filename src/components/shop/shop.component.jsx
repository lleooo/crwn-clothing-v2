import {useContext} from "react";

import ProductCard from "../product-card/product-card.component";

import {ProductsContext} from "../../contexts/product.context";
const Shop = () => {
    const {products} = useContext(ProductsContext);
    return (
        <div>
            {products.map(product => {
                return <ProductCard key={product.id} product={product}></ProductCard>;
            })}
        </div>
    );
};
export default Shop;