import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import categoryApi from '../api/categoryApi';
import HomeBlog from '../components/home/homeblog/HomeBlog';
import HomeService from '../components/home/homeservice/HomeService';
import HomeSlide from '../components/home/homeslide/HomeSlide';
import HomeProductNew from '../components/home/productnew/HomeProductNew';
import ProductSale from '../components/home/productsale/ProductSale';
import CounterFeature from '../features/Counter';

function Home(props) {
    const handleLogin = (googleData) => {
        console.log(googleData);
    }
    const handleFailure = (result) => {
        console.log(result);
    }
    return (
        <>
            <HomeSlide />
            <HomeProductNew />
            <ProductSale />
            <HomeService />
            <HomeBlog />
            <GoogleLogin
                clientId='1016608190687-490978gb22523sliq41oag4d6ar99qo3.apps.googleusercontent.com'
                buttonText="Login with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
        </>
    );
}

export default Home;