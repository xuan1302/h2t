
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Skeleton } from '@mui/material';

ProductSkeleton.propTypes = {

};
ProductSkeleton.defaultProps = {
    length: 9,
}
function ProductSkeleton({ length }) {
    return (
        <Box>
            <Grid container>
                {
                    Array.from(new Array(length)).map((x, index) => (
                        <Grid item key={index} sm={6} md={3} lg={4}>
                            <Box padding={1}>
                                <Skeleton variant="rectangular" width='100%' height={250} />
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default ProductSkeleton;