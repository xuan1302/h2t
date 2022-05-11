import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
const itemsBreadcrumb = [
    {
        href: "*",
        text: "NotFound"
    }
]
function NotFound(props) {
    return (
        <>
            <Breadcrumb items={itemsBreadcrumb} className="breadcrumb" />
            <div id="404" className="pageNot text-center wrap-flex-align">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="content-pagenot">
                        <h1>Không tìm thấy trang</h1>
                        <p className="subtext">Xin lỗi, chúng tôi không tìm thấy trang này</p>
                        <Link to='/' >Trở về trang chủ</Link>
                    </div>
                </div>
            </div>
        </>

    );
}

export default NotFound;