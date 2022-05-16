import React, { useEffect, useMemo, useState } from 'react';
import postsApi from '../../../api/postsApi';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import BlogsList from '../components/BlogsList';
import BlogSkeleton from '../components/BlogSkeleton';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Pagination from '@mui/material/Pagination';

const itemsBreadcrumb = [
    {
        href: "/blog",
        text: "Blog"
    }
]

function ArchivePost(props) {
    const history = useHistory();
    const location = useLocation();
    const [pagination, setPagination] = useState({
        _limit: 8,
        _totalRows: 10,
        _page: 1,
    });

    const queryParam = useMemo(() => {
        const params = queryString.parse(location.search);
        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 8,
        }
    }, [location.search]);


    const [listBlogs, setListBlogs] = useState([]);
    const [statusSkeleton, setStatusSkeleton] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await postsApi.getAll(queryParam);
                setListBlogs(data);
                setPagination(pagination)
            } catch (error) {
                console.log('Fail ', error)
            }
            setStatusSkeleton(false);
        })();
    }, [queryParam])

    const handlePageChange = (e, page) => {

        const filters = {
            ...queryParam,
            _page: page,
        }
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        })
    }

    return (
        <>
            <Breadcrumb items={itemsBreadcrumb} className="breadcrumb" />
            <div className="container-fluid">
                <h3 className='text-center'>BLOGS</h3>
                {
                    statusSkeleton ? <BlogSkeleton /> : <BlogsList listBlogs={listBlogs} />
                }
                <Pagination className='pagination-custom'
                    color='primary' count={Math.ceil(pagination._totalRows / pagination._limit)} page={pagination._page}
                    onChange={handlePageChange}
                ></Pagination>
            </div>
        </>
    );
}

export default ArchivePost;