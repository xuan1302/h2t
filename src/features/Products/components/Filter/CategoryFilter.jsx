import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import categoryApi from '../../../../api/categoryApi';
import classnames from 'classnames';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
CategoryFilter.propTypes = {

};

function CategoryFilter({ onChange }) {
    const [categoryList, setCategoryList] = useState([]);
    const location = useLocation();
    const params = queryString.parse(location.search);
    useEffect(() => {
        (
            async () => {
                try {
                    const dataCat = await categoryApi.getAll();
                    setCategoryList(dataCat)
                } catch (error) {
                    console.log(error)
                }
            }
        )();
    }, [])

    const handleClickCategory = (id) => {
        onChange(id)
    }

    return (
        <div className='filter-by-cat'>
            <h3>Danh muc sản phẩm</h3>
            <ul>
                {
                    categoryList.map(category => (
                        <li
                            className={classnames({
                                'active': params.categoryId === category.id
                            })}
                            key={category.id} onClick={() => handleClickCategory(category.id)}>{category.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default CategoryFilter;