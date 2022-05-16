import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {

    const handleSortChangeAsc = () => {
        if (currentSort !== 'asc') onChange('asc');
        // if (onChange) onChange('asc');
    }
    const handleSortChangeDesc = () => {
        if (currentSort !== 'desc') onChange('desc');
        // if (onChange) onChange('desc');
    }
    return (
        <div className='product-sort-price'>
            <button
                className={classnames({
                    'active': currentSort === 'asc',
                })}
                onClick={handleSortChangeAsc}
            >Giá thấp đến cao</button>
            <button
                className={classnames({
                    'active': currentSort === 'desc',
                })}
                onClick={handleSortChangeDesc}
            >Giá cao đến thấp</button>
        </div>
    );
}

export default ProductSort;