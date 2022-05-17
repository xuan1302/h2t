import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductList from '../../../features/Products/components/ProductList';
import productsApi from '../../../api/productApi';

ProductSale.propTypes = {

};

function ProductSale(props) {
    const [productList, setProductList] = useState([]);
    const params = {
        _limit: 16,
        isPromotion: true,
    }
    useEffect(() => {
        (
            async () => {
                try {
                    const { data } = await productsApi.getAll(params);
                    setProductList(data)
                } catch (error) {
                    console.log(error)
                }
            }
        )();
    }, [])
    return (
        <div className='container-fluid'>
            <div className="wrapper-heading-home section-new-collection animation-tran text-center active">
                <div className="container-fluid">
                    <div className="site-animation">
                        <h2>
                            SALE UP TO 75%
                        </h2>
                    </div>
                </div>
            </div>
            <div className="wrapper-collection-1">
                <div className="row">
                    <ProductList data={productList} col={3} />
                </div>
            </div>
        </div>
    );
}

export default ProductSale;