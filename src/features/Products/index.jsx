import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './components/index.scss'
import ArchiveProduct from './pages/ArchiveProduct';
import SingleProduct from './pages/SingleProduct';


function ProductsFeature(props) {
    const match = useRouteMatch();
    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} component={ArchiveProduct} exact />
                <Route path={`${match.url}/:productId`} component={SingleProduct} />
            </Switch>
        </Box>
    );
}

export default ProductsFeature;