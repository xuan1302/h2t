import React from 'react';
import PropTypes from 'prop-types';

ProductThumbnail.propTypes = {

};

function ProductThumbnail({ product }) {
    return (
        <div className='thumbnail-product-entry'>
            <img src={product.thumbnail} alt={product.name} />
        </div>
    );
}

export default ProductThumbnail;