import React from 'react';
import PropTypes from 'prop-types';
import ListNewPost from './ListNewPost';

SideBarPost.propTypes = {

};

function SideBarPost(props) {
    return (
        <div className="side-bar col-md-3">
            <div className="sidebar-blog">
                <h3 className='title-sidebar text-center'>Bài viết mới nhất</h3>
                <ListNewPost />
            </div>

        </div>
    );
}

export default SideBarPost;