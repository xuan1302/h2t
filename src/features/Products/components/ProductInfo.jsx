import React from 'react';
import PropTypes from 'prop-types';

ProductInfo.propTypes = {

};

function ProductInfo({ product = {} }) {
    const { name, description, price } = product;
    return (
        <div className='product-info-entry'>
            <h4 className='title-product'>{name}</h4>
            <div className='content-des'>
                <h5>Mô tả</h5>
                <p>{description}</p>
            </div>
            <div className='price-product'>
                <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}</span>
            </div>
        </div>
    );
}

export default ProductInfo;