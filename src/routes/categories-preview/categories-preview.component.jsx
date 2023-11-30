import {useSelector} from "react-redux";

import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";


const CategoriesPreview = () => {
    //useSelector用於從store中取出state , state => state.xxx
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    return (
        <>
            {
                isLoading ? <Spinner /> : Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products}></CategoryPreview>;
                })
            }
        </>

    );
};
export default CategoriesPreview;