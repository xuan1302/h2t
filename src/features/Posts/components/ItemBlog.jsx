import React from 'react';
import { useHistory } from 'react-router-dom';

function ItemBlog({ dataBlog }) {
    const history = useHistory();
    const handleClickBog = () => {
        history.push(`/blog/${dataBlog.id}`);
    }
    return (
        <div className='content-blog' onClick={handleClickBog}>
            <img src={dataBlog.thumbnail} alt={dataBlog.title} />
            <h4>{dataBlog.title}</h4>
            <p className='description'>{dataBlog.description.slice(0, 200)}...</p>
        </div>
    );
}

export default ItemBlog;