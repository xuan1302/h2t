import React, { useEffect, useState } from 'react';
import postsApi from '../api/postsApi';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
const itemsBreadcrumb = [
    {
        href: "/blog",
        text: "Blog"
    }
]

function Blog(props) {
    const [listBlogs, setListBlogs] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const data = await postsApi.getAll();
                setListBlogs(data);
            } catch (error) {
                console.log('Fail ', error)
            }
        })();
    }, [])
    return (
        <div>
            <Breadcrumb items={itemsBreadcrumb} className="breadcrumb" />
            <h3 className='text-center'>BLOGS</h3>
            {
                listBlogs.map(data => (
                    <li key={data.id}>
                        <img src={data.thumbnail} alt={data.title} />
                        <h4>{data.title}</h4>
                        <p className='description'>{data.description.slice(0, 200)}...</p>
                    </li>
                ))
            }
        </div>
    );
}

export default Blog;