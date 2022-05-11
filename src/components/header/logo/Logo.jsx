import React, { memo } from 'react';
import ImgLogo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';

function Logo(props) {
    return (
        <div className="header-upper-logo">
            <div className="header-logo wrap-logo">
                <Link to='/'>
                    <img src={ImgLogo} alt="" />
                </Link>
            </div>
        </div>
    );
}

export default memo(Logo);