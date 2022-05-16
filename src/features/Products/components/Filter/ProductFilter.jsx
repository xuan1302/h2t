import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import CategoryFilter from './CategoryFilter';
import ServiceFilter from './ServiceFilter';
import PriceFilter from './PriceFilter';

ProductFilter.propTypes = {

};

function ProductFilter({ filters, onChange }) {
    const handleCategoryChange = (id) => {
        if (!onChange) return;
        const newFilter = {
            ...filters,
            'categoryId': id
        }
        onChange(newFilter)
    }

    const handleServiceChange = (value) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            ...value
        }
        onChange(newFilters)
    }

    const handlePriceChange = (value) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            ...value
        }
        onChange(newFilters)
    }
    return (
        <Box>
            <CategoryFilter onChange={handleCategoryChange} />
            <ServiceFilter filters={filters} onChange={handleServiceChange} />
            <PriceFilter filters={filters} onChange={handlePriceChange} />
        </Box>
    );
}

export default ProductFilter;