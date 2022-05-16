import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

ServiceFilter.propTypes = {

};

function ServiceFilter({ filters, onChange }) {
    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (onChange) onChange({ [name]: checked })
    }
    return (
        <div className='filter-service'>
            <h3>Dịch vụ</h3>
            <ul>
                {
                    [{ value: 'isPromotion', label: 'Có khuyến mãi' }, { value: 'isFreeShip', label: 'Miễn phí vận chuyển' }].map((service) => (
                        <li key={service.value}>
                            <FormGroup>
                                <FormControlLabel control={
                                    <Checkbox
                                        checked={filters[service.value]}
                                        onChange={handleChange}
                                        name={service.value}
                                    />} label={service.label} />
                            </FormGroup>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ServiceFilter;