import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

Product.propTypes = {
    data: PropTypes.object,
};

function Product({ data }) {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/products/${data.id}`)
    }
    return (
        <Box onClick={handleClick}>
            <Box className='item-product-inner'>
                <div className="thumbnail-product-inner">
                    {data.isFreeShip && (
                        <span className='free-ship'>Free ship</span>
                    )}
                    {data.isPromotion && (
                        <span className='promotion'>Khuyến mãi</span>
                    )}
                    <img src={data.thumbnail} alt={data.name} width="100%" />
                </div>
                <h3 className='title-product-archive' >
                    {data.name}
                </h3>
                <div className='price-product-archive'>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}
                </div>
            </Box>
        </Box>
    );
}

export default Product;