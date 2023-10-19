import {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import CategoriesPreview from '../../routes/categories-preview/categories-preview.component';
import Category from '../../routes/category/category.component';

import {getCategoriesAndDocuments} from '../../utils/firebase/firebase.utils';
import {setCategoriesMap} from '../../store/categories/category.action';
const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            dispatch(setCategoriesMap(categoryMap));
        };

        getCategoriesMap();
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=':category' element={<Category />}></Route>
        </Routes>
    );
};
export default Shop;