import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import postsApi from '../../../api/postsApi';

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import ContentSinglePost from '../components/ContentSinglePost';
import SideBarPost from '../components/SideBarPost';


function SinglePost(props) {
    const routerMatch = useRouteMatch();
    const postId = routerMatch.params.postId;
    const [contentPost, setContentPost] = useState({});
    useEffect(() => {
        (
            async () => {
                try {
                    const result = await postsApi.get(postId);
                    setContentPost(result)
                } catch {

                }
            }
        )();
    }, [postId])

    const itemsBreadcrumb = [
        {
            href: "/blog",
            text: "Blog"
        },
        {
            href: postId,
            text: contentPost.title
        }
    ]


    return (
        <>
            <Breadcrumb items={itemsBreadcrumb} className="breadcrumb" />
            <div className="container-fluid">
                <SideBarPost />
                <ContentSinglePost contentPost={contentPost} />
            </div>
        </>
    );
}

export default SinglePost;