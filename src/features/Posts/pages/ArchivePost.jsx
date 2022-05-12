import React, { useEffect, useMemo, useState } from 'react';
import postsApi from '../../../api/postsApi';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import BlogsList from '../components/BlogsList';
import BlogSkeleton from '../components/BlogSkeleton';
import Pagination from '../../../components/Pagiantion/Pagination';

const itemsBreadcrumb = [
    {
        href: "/blog",
        text: "Blog"
    }
]

function ArchivePost(props) {
    let PageSize = 8;
    const [listBlogs, setListBlogs] = useState([]);
    const [statusSkeleton, setStatusSkeleton] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

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

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return listBlogs.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, currentPage, listBlogs]);

    return (
        <>
            <Breadcrumb items={itemsBreadcrumb} className="breadcrumb" />
            <div className="container-fluid">
                <h3 className='text-center'>BLOGS</h3>
                {
                    statusSkeleton ? <BlogSkeleton /> : <BlogsList listBlogs={currentTableData} />
                }
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={listBlogs.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </>
    );
}

export default ArchivePost;