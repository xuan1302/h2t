import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DuoIcon from '@mui/icons-material/Duo';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import PropTypes from 'prop-types';

HomeService.propTypes = {

};

function HomeService(props) {
    return (
        <section className="section section-service " data-include="section-service">
            <div className="container">
                <div className="service--list d-flex d-flex-wrap row-left">
                    <div className="item">
                        <a className="service--item text-center">
                            <LocalShippingIcon />
                            <div className="service--inner">
                                <p>Freeship đơn hàng trên 500k</p>
                            </div>
                        </a>
                    </div>
                    <div className="item">
                        <a className="service--item text-center">
                            <DuoIcon />
                            <div className="service--inner">
                                <p>Tổng đài tư vấn miễn phí</p>
                            </div>
                        </a>
                    </div>
                    <div className="item">
                        <a className="service--item text-center">
                            <AutoModeIcon />
                            <div className="service--inner">
                                <p>Đổi hàng trong vòng 7 ngày</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeService;