import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Box } from '@mui/material';
import ArchivePost from './pages/ArchivePost';
import SinglePost from './pages/SinglePost';
import './components/index.scss'


function PostsFeature(props) {
    const match = useRouteMatch();
    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} component={ArchivePost} exact />
                <Route path={`${match.url}/:postId`} component={SinglePost} />
            </Switch>
        </Box>
    );
}

export default PostsFeature;