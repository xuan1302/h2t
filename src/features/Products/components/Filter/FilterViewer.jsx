import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import categoryApi from '../../../../api/categoryApi';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';



FilterViewer.propTypes = {

};

function FilterViewer({ filters = {}, onChange = null }) {
    const [nameCat, setNameCat] = useState('Loading...');
    const location = useLocation();
    const params = queryString.parse(location.search);
    const idCat = params.categoryId;

    useEffect(() => {
        (
            async () => {
                try {
                    if (idCat) {
                        const data = await categoryApi.get(idCat);
                        setNameCat(data.name)
                    }

                } catch (error) {
                    console.log(error)
                }
            }
        )();
    }, [idCat])

    const FILTER_LIST = [
        {
            id: 1,
            getLabel: () => 'miễn phí giao hàng',
            isActive: (filters) => filters.isFreeShip,
            isVisible: (filters) => true,
            isRemoveable: false,
            onRemove: () => { },
            onToggle: (filters) => {
                const newFilters = { ...filters };
                if (newFilters.isFreeShip) {
                    newFilters.isFreeShip = false;
                } else {
                    newFilters.isFreeShip = true;
                }
                return newFilters;
            },
        },
        {
            id: 2,
            getLabel: () => 'Có khuyến mãi',
            isActive: () => false,
            isVisible: (filters) => filters.isPromotion,
            isRemoveable: true,
            onRemove: (filters) => {
                const newFilters = { ...filters };
                delete newFilters.isPromotion;
                return newFilters;
            },
            onToggle: () => { },
        },
        {
            id: 3,
            getLabel: (filters) => `Từ ${filters.price_gte} đến ${filters.price_lte}`,
            isActive: () => false,
            isVisible: (filters) => Object.keys(filters).includes('price_lte') && Object.keys(filters).includes('price_gte'),
            isRemoveable: true,
            onRemove: (filters) => {
                const newFilters = { ...filters };
                delete newFilters.price_lte;
                delete newFilters.price_gte;
                return newFilters;
            },
            onToggle: () => { },
        },
        {
            id: 4,
            getLabel: () => nameCat,
            isActive: () => false,
            isVisible: (filters) => filters.categoryId,
            isRemoveable: true,
            onRemove: (filters) => {
                const newFilters = { ...filters };
                delete newFilters.categoryId;
                return newFilters;
            },
            onToggle: (filters) => { },
        },
    ];

    return (
        <Box component='ul' className='product-viewer'>
            {
                FILTER_LIST.filter(x => x.isVisible(filters)).map(x => (
                    <li key={x.id}>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label={x.getLabel(filters)}
                                color={x.isActive(filters) ? 'success' : 'default'}
                                clickable={!x.isRemoveable}
                                onClick={
                                    x.isRemoveable ? null : () => {
                                        if (onChange) {
                                            const newFilters = x.onToggle(filters);
                                            onChange(newFilters);
                                        }
                                    }
                                }
                                onDelete={x.isRemoveable ? () => {
                                    if (onChange) {
                                        const newFilters = x.onRemove(filters);
                                        onChange(newFilters);
                                    }
                                } : null}
                                deleteIcon={<DeleteIcon />}
                            />
                        </Stack>
                    </li>
                ))
            }
        </Box >
    );
}

export default FilterViewer;