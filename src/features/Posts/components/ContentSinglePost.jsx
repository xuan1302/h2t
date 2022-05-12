import React from 'react';
import PropTypes from 'prop-types';

ContentSinglePost.propTypes = {

};

function ContentSinglePost({ contentPost }) {
    return (
        <div className="content-single-post col-md-9">
            <div className="thumbnail-single text-center">
                <img src={contentPost.thumbnail} alt={contentPost.title} />
            </div>
            <div className="single-text text-center">
                {
                    contentPost.description
                }
            </div>
        </div>
    );
}

export default ContentSinglePost;