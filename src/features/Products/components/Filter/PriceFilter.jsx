import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, TextField } from '@mui/material';

PriceFilter.propTypes = {

};

function PriceFilter({ filters, onChange }) {
    const [values, setValues] = useState({
        price_gte: 0,
        price_lte: 0,

    });
    const handleSubmit = () => {
        if (onChange) onChange(values)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValue => ({
            ...prevValue,
            [name]: value,
        }));
    }
    return (
        <div className='price-filter'>
            <h3>Khoảng giá</h3>
            <Box>
                <TextField
                    className='price_gte'
                    name="price_gte"
                    type="number"
                    value={values.price_gte}
                    onChange={handleChange}
                />
                <span className='kc-input'>-</span>
                <TextField
                    className='price_lte'
                    name="price_lte"
                    type="number"
                    value={values.price_lte}
                    onChange={handleChange}
                />
                <button className='btn-submit-price' variant="outline" color='primary' onClick={handleSubmit}>Áp dụng</button>
            </Box>
        </div>
    );
}

export default PriceFilter;