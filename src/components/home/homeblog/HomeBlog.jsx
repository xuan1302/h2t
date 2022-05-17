import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BlogsList from '../../../features/Posts/components/BlogsList';
import postsApi from '../../../api/postsApi';

HomeBlog.propTypes = {

};

function HomeBlog(props) {
    const [listBlogs, setListBlogs] = useState([]);
    const queryParam = {
        _limit: 8,
    }
    useEffect(() => {
        (async () => {
            try {
                const { data } = await postsApi.getAll(queryParam);
                setListBlogs(data);
            } catch (error) {
                console.log('Fail ', error)
            }
        })();
    }, [])
    return (
        <div id="section-blog">
            <div className="wrapper-heading-home animation-tran text-center active">
                <div className="container-fluid">
                    <div className="site-animation">
                        <h2 className="text-center">
                            H2T BLOG
                        </h2>
                    </div>
                </div>
            </div>
            <div id="blog-home">
                <div className="container-fluid">
                    <div className="row">
                        <BlogsList listBlogs={listBlogs} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBlog;