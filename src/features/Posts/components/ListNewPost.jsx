import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import postsApi from '../../../api/postsApi';
import ItemNewPost from './ItemNewPost';

ListNewPost.propTypes = {

};

function ListNewPost(props) {
    const [newPost, setNewPost] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const param = {
                    _limit: 5,
                };
                const { data } = await postsApi.getAll(param);
                setNewPost(data);
            } catch (error) {
                console.log('Fail ', error)
            }
        })();
    }, [])

    return (
        <>
            {
                newPost.length > 0 && (
                    <ul className='list-news-latest'>
                        {
                            newPost.map(data => (
                                <li key={data.id} className='item-article'>
                                    <ItemNewPost data={data} />
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </>
    );
}

export default ListNewPost;