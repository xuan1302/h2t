import React from 'react';
import PropTypes from 'prop-types';

ProductDescription.propTypes = {

};

function ProductDescription({ product = {} }) {
    const { name, description, price } = product;
    return (
        <div className='product-des'>
            {description}
        </div>
    );
}

export default ProductDescription;