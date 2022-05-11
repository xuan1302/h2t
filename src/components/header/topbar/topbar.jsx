import React, { memo } from 'react';


function topbar(props) {
    return (
        <div className="topbar topbar_temp02" id='topbar'>
            <div className="container-fluid">
                <div className="topbar-content text-center">
                    <p>Miễn phí vận chuyển với đơn hàng trên 500K</p>
                </div>
            </div>
        </div>
    );
}

export default memo(topbar);