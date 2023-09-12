import ProductCard from '../product-card/product-card.component';

import {CategoryPreviewContainer, Title, Preview} from './category-preview.styles';

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {
                    products.filter((_, idx) => {
                        return idx < 4;
                    }).map((product) => {
                        return <ProductCard key={product.id} product={product}></ProductCard>;
                    })
                }
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;