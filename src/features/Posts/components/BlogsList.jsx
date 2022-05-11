import React from 'react';
import PropTypes from 'prop-types';
import ItemBlog from './ItemBlog';
import { Box, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';

BlogsList.propTypes = {

};

function BlogsList({ listBlogs }) {
    return (
        <>
            <Box>
                <Grid container>
                    {
                        listBlogs.map(data => (
                            <Grid key={data.id} className='item-blog' sm={6} md={3} lg={3} item>
                                <ItemBlog dataBlog={data} />
                            </Grid>
                        ))
                    }

                </Grid>
            </Box>
        </>
    );
}

export default BlogsList;