import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@mui/material';
import Product from './Product';

ProductList.propTypes = {
    data: PropTypes.array,
};
ProductList.defaultProps = {
    data: [],
}
function ProductList({ data }) {
    return (
        <Box>
            {
                data.length > 0 && (
                    <Grid container className='list-prodct-archive'>
                        {data.map((product) => (
                            <Grid item key={product.id} sm={6} md={4} lg={4}>
                                <Product data={product} />
                            </Grid>
                        ))}
                    </Grid>
                )
            }

        </Box>
    );
}

export default ProductList;