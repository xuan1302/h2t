import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import ProductSkeleton from '../components/ProductSkeleton';
import queryString from 'query-string';
import productsApi from '../../../api/productApi';
import ProductList from '../components/ProductList';
import Pagination from '@mui/material/Pagination';
import ProductSort from '../components/ProductSort';
import ProductFilter from '../components/Filter/ProductFilter';
import FilterViewer from '../components/Filter/FilterViewer';

const itemsBreadcrumb = [
    {
        href: "/products",
        text: "Products"
    }
]

function ArchiveProduct(props) {
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        _limit: 10,
        _totalRows: 10,
        _page: 1,
    });
    const history = useHistory();
    const location = useLocation();
    const [statusLoading, setStatusLoad] = useState(true);
    const queryParam = useMemo(() => {
        const params = queryString.parse(location.search);
        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 9,
            _order: params._order || '',
            _sort: params._sort || '',
            isFreeShip: params.isFreeShip === 'true',
            isPromotion: params.isPromotion === 'true',
        }
    }, [location.search])
    useEffect(() => {
        (
            async () => {
                try {
                    const { data, pagination } = await productsApi.getAll(queryParam);
                    setProductList(data)
                    setPagination(pagination)
                } catch (error) {
                    console.log('Fail ', error)
                }
                setStatusLoad(false);
            }
        )()
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

    const handleSortChange = (newSortValue) => {
        const filters = {
            ...queryParam,
            _sort: 'price',
            _order: newSortValue,
        }
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(filters),
        })
    }

    const handleFiltersChange = (newparams) => {
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newparams),
        })
    }

    const setNewFilters = (newFilters) => {
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(newFilters),
        })
    }


    return (
        <>
            <Breadcrumb items={itemsBreadcrumb} className="breadcrumb" />
            <div className="container-fluid">
                <div className="archive-product">
                    <div className="left-product">
                        <div className="content-left-product">
                            <ProductFilter filters={queryParam} onChange={handleFiltersChange} />
                        </div>
                    </div>
                    <div className="right-product">
                        <div className="content-right-product">
                            <ProductSort currentSort={queryParam._order} onChange={handleSortChange} />
                            <FilterViewer filters={queryParam} onChange={setNewFilters} />
                            {
                                statusLoading ? <ProductSkeleton /> : <ProductList data={productList} />
                            }
                            <Pagination className='pagination-custom'
                                color='primary' count={Math.ceil(pagination._totalRows / pagination._limit)} page={pagination._page}
                                onChange={handlePageChange}
                            ></Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArchiveProduct;