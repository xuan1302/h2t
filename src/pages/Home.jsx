import React, { useEffect } from 'react';
import HomeBlog from '../components/home/homeblog/HomeBlog';
import HomeService from '../components/home/homeservice/HomeService';
import HomeSlide from '../components/home/homeslide/HomeSlide';
import HomeProductNew from '../components/home/productnew/HomeProductNew';
import ProductSale from '../components/home/productsale/ProductSale';


function Home(props) {
    return (
        <>
            <HomeSlide />
            <HomeProductNew />
            <ProductSale />
            <HomeService />
            <HomeBlog />
        </>
    );
}

export default Home;