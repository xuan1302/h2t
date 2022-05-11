import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PostsFeature from '../features/Posts'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Products from '../pages/Products'


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
        exact: true,
        component: Products
    },
    {
        path: '/blog',
        exact: true,
        component: PostsFeature
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