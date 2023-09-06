import {useState, createContext} from 'react';
import SHOP_DATA from '../shop-data.json';

export const ProductsContext = createContext({
    'product': [],
});

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(SHOP_DATA);
    return (
        <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>
    );
};