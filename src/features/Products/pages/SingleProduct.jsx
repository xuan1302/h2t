import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import useProductDetail from '../../../hook/useProductDetail';
import { Box, LinearProgress } from '@mui/material';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProductDescription from '../components/ProductDescription';
import ProductAddtional from '../components/ProductAddtional';
import ProductReviews from '../components/ProductReviews';
import ProductThumbnail from '../components/ProductThumbnail';
import ProductMenu from '../components/ProductMenu';
import ProductInfo from '../components/ProductInfo';
import AddToCartForm from '../components/AddToCartForm';
import { addToCart } from '../../Cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

SingleProduct.propTypes = {

};

function SingleProduct(props) {
    // const routerMatch = useRouteMatch();
    // const productId = routerMatch.params.productId;
    const { enqueueSnackbar } = useSnackbar();
    const { params: { productId }, url } = useRouteMatch();
    const { product, loading } = useProductDetail(productId);
    const dispath = useDispatch();
    if (loading) {
        return <Box className='loadding-detail-product'><LinearProgress /></Box>
    }
    const itemsBreadcrumb = [
        {
            href: "/products",
            text: "Products"
        },
        {
            href: productId,
            text: product.name
        }
    ]
    const handleAddToCartSubmit = (formValues) => {
        const action = addToCart({
            id: product.id,
            product,
            quantity: formValues.quantity,
        });
        dispath(action);
        enqueueSnackbar('Thêm sản phẩm thành công', { variant: 'success' });
    }

    return (
        <div className='single-product'>
            <Breadcrumb items={itemsBreadcrumb} className="breadcrumb" />
            <div className="container-fluid">
                <div className='content-single-product'>
                    <div className="entry-product">
                        <div className="thumbnail-product">
                            <ProductThumbnail product={product} />
                        </div>
                        <div className="product-info">
                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddToCartSubmit} />
                        </div>
                    </div>
                    <div className="product-menu">
                        <ProductMenu />
                        <Switch>
                            <Route path={url} exact>
                                <ProductDescription product={product} />
                            </Route>
                            <Route path={`${url}/additional`} >
                                <ProductAddtional product={product} />
                            </Route>
                            <Route path={`${url}/reviews`} >
                                <ProductReviews product={product} />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;