import React from 'react';
import ImgBct from '../../assets/images/logo_bct.png'
import Copyright from './copyright';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import './style.scss';

function Footer(props) {
    return (
        <footer className="footer">
            <div id="fter-content" className='main-footer collapse'>
                <div className="container-fluid">
                    <div className="row">
                        {/* row 1 */}
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg">
                            <div className="footer-col footer-content1">
                                <h4 className="footer-title">
                                    CÔNG TY CỔ PHẦN THỜI TRANG H2T VIỆT NAM
                                </h4>
                                <div className="footer-content">
                                    <div className='col1'>
                                        <p>Địa chỉ: Số 1, ngõ 40, tổ 14 phố Nguyễn Thị Định, Phường Nhân Chính, Quận Thanh Xuân, Hà Nội</p>
                                        <p>Người đại diện: NGÔ TRÍ TÙNG</p>
                                        <p>Mã số thuế: 0106533311, ngày cấp ĐKKD 08/05/2014. Nơi cấp: Sở kế hoạch và đầu tư Hà Nội.</p>
                                    </div>
                                    <div className="logo-footer">
                                        <a href="#" target="_blank" rel="nofollow noreferrer">
                                            <img src={ImgBct} alt="Bộ Công Thương" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end row 1 */}

                        <div className="col-xs-12 col-sm-6 col-md-2 col-lg">
                            <div className="footer-col footer-block">
                                <h4 className="footer-title">
                                    Chính sách
                                </h4>
                                <div className="footer-content toggle-footer">
                                    <ul>

                                        <li className="item">
                                            <a href="/" title="CS ĐỔI TRẢ">CS ĐỔI TRẢ</a>
                                        </li>

                                        <li className="item">
                                            <a href="/" title="TK NGÂN HÀNG">TK NGÂN HÀNG</a>
                                        </li>

                                        <li className="item">
                                            <a href="/" title="KT ĐƠN HÀNG">KT ĐƠN HÀNG</a>
                                        </li>

                                        <li className="item">
                                            <a href="/" title="MEMBERSHIP">MEMBERSHIP</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-2 col-lg">
                            <div className="footer-col footer-block">
                                <h4 className="footer-title">
                                    Cửa hàng
                                </h4>
                                <div className="footer-content toggle-footer">
                                    <ul>

                                        <li className="item">
                                            <a href="/" title="HÀ NỘI">HÀ NỘI</a>
                                        </li>

                                        <li className="item">
                                            <a href="/" title="BẮC GIANG">BẮC GIANG</a>
                                        </li>

                                        <li className="item">
                                            <a href="/" title="HẢI PHÒNG">HẢI PHÒNG</a>
                                        </li>

                                        <li className="item">
                                            <a href="/" title="THANH HOÁ">THANH HOÁ</a>
                                        </li>

                                        <li className="item">
                                            <a href="/" title="QUẢNG NINH">QUẢNG NINH</a>
                                        </li>

                                        <li className="item">
                                            <a href="/" title="CAO BẰNG">CAO BẰNG</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-6 hasPhone col-sm-6 col-md-2 col-lg">
                            <div className="footer-col">

                                <div className="hasPhone">
                                    <p className="title">TƯ VẤN BÁN HÀNG</p>
                                    <p className="number_phone"><a href="tel:098.126.8781">
                                        <PhoneIcon /> 098.126.8781</a></p>
                                    <p className="moreinfo">Tất cả các ngày trong tuần</p>
                                </div>
                                <div className="social">
                                    <h4 className="footer-title">
                                        Kết nối với chúng tôi
                                    </h4>
                                    <ul className="navbar-social">
                                        <li className="social-face">
                                            <a href="/" >
                                                <FacebookIcon />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" >
                                                <InstagramIcon />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/" >
                                                <YouTubeIcon />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-6 hasPhone col-sm-6 col-md-3 col-lg">
                            <div className="footer-col">

                                <div className="hasPhone">
                                    <p className="title">Chăm Sóc Khách Hàng</p>
                                    <p className="number_phone"><a href="tel:0913.906.166">
                                        <PhoneIcon /> 0913.906.166</a></p>
                                    <p className="moreinfo">Tất cả các ngày trong tuần</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </footer>
    );
}

export default Footer;