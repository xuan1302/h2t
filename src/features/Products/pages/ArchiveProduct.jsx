import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

const itemsBreadcrumb = [
    {
        href: "/products",
        text: "Products"
    }
]

function ArchiveProduct(props) {
    return (
        <>
            <Breadcrumb items={itemsBreadcrumb} className="breadcrumb" />
        </>
    );
}

export default ArchiveProduct;