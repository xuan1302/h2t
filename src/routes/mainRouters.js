import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CartFeature from '../features/Cart'
import PostsFeature from '../features/Posts'
import ProductsFeature from '../features/Products'
import About from '../pages/About'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'


const routers = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        exact: true,
        component: About
    },
    {
        path: '/faq',
        exact: true,
        component: Faq
    },
    {
        path: '/products',
        // exact: true,
        component: ProductsFeature
    },
    {
        path: '/blog',
        // exact: true,
        component: PostsFeature
    },
    {
        path: '/cart',
        // exact: true,
        component: CartFeature
    },
    {
        path: '*',
        component: NotFound
    },
]
const MainRouter = () => {
    return (
        <Switch>
            {
                routers.map(({ component, path, ...rest }, index) =>
                    <Route key={index} component={component} path={path} {...rest} />
                )
            }
        </Switch>
    )
}
export default MainRouter