import React from 'react';
import { Link } from 'react-router-dom';
function MenuItem({ href, text }) {
    return (
        <li className="">
            <Link to={href} >{text}</Link>
        </li>
    );
}

export default MenuItem;