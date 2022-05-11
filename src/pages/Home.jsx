import React, { useEffect } from 'react';
import categoryApi from '../api/categoryApi';
import HomeSlide from '../components/homeslide/HomeSlide';
import CounterFeature from '../features/Counter';

function Home(props) {
    return (
        <>
            <HomeSlide />
            {/* <CounterFeature /> */}
        </>
    );
}

export default Home;