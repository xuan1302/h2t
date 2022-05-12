import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

ItemNewPost.propTypes = {

};

function ItemNewPost({ data }) {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/blog/${data.id}`);
    }
    return (
        <div className='item-post' onClick={handleClick}>
            <div className="post-image">
                <img src={data.thumbnail} alt={data.title} />
            </div>
            <div className="post-content">
                <h3>
                    {data.title}
                </h3>
            </div>
        </div>
    );
}

export default ItemNewPost;