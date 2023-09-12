import {useState, createContext, useEffect} from 'react';

import {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils.js';

import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext({
    'categoriesMap': {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    return (
        <CategoriesContext.Provider value={{categoriesMap}}>{children}</CategoriesContext.Provider>
    );
};