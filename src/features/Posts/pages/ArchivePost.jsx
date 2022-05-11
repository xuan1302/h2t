import React, { useEffect, useState } from 'react';
import postsApi from '../../../api/postsApi';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import BlogsList from '../components/BlogsList';
import BlogSkeleton from '../components/BlogSkeleton';

const itemsBreadcrumb = [
    {
        href: "/blog",
        text: "Blog"
    }
]
function ArchivePost(props) {
    const [listBlogs, setListBlogs] = useState([]);
    const [statusSkeleton, setStatusSkeleton] = useState(true);
    useEffect(() => {
        (async () => {
            try {
                const data = await postsApi.getAll();
                setListBlogs(data);
            } catch (error) {
                console.log('Fail ', error)
            }
            setStatusSkeleton(false);
        })();
    }, [])
    return (
        <>
            <Breadcrumb items={itemsBreadcrumb} className="breadcrumb" />
            <div className="container-fluid">
                <h3 className='text-center'>BLOGS</h3>
                {
                    statusSkeleton ? <BlogSkeleton /> : <BlogsList listBlogs={listBlogs} />
                }
            </div>
        </>
    );
}

export default ArchivePost;