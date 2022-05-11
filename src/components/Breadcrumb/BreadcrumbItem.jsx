import React, { memo } from 'react'
import { Link } from 'react-router-dom'
function BreadcrumbItem({ divider, href, text }) {
    return (
        <>
            <li className="divider">
                <span>{divider}</span>
            </li>
            <li>
                <Link to={href} >{text}</Link>
            </li>
        </>
    )
}
export default memo(BreadcrumbItem)