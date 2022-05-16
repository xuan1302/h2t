import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartItemTotalSelector, cartItemCountSelector } from './selector';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { Input } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

CartFeature.propTypes = {

};
const itemsBreadcrumb = [
    {
        href: "/cart",
        text: "Cart"
    },
]
function CartFeature(props) {
    const totalCart = useSelector(cartItemTotalSelector);
    const countItemCart = useSelector(cartItemCountSelector)
    const listProduct = useSelector(state => state.cart.cartItems);
    console.log(listProduct)
    return (
        <div className='cart-page layoutPage-cart'>
            <Breadcrumb items={itemsBreadcrumb} className="breadcrumb" />
            <div className="container-fluid">
                <div className="heading-page">
                    <div className="header-page">
                        <h1>Giỏ hàng của bạn</h1>
                        <p className="count-cart">Có <span>{countItemCart} sản phẩm </span>trong giỏ hàng</p>
                    </div>
                </div>
                <div className='row wrapbox-content-cart'>
                    <div className="col-md-8 col-sm-8 col-xs-12 contentCart-detail">
                        <div className="cart-container">
                            <div className="cart-col-left">
                                <div className="main-content-cart">
                                    <form action="/cart" method="post" id="cartformpage">
                                        <div className="">
                                            <div className="">
                                                <table className="table-cart">
                                                    <thead>
                                                        <tr>
                                                            <th className="image">&nbsp;</th>
                                                            <th className="item">Tên sản phẩm</th>
                                                            <th className="remove">&nbsp;</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="line-item-container">
                                                            <td className="image">
                                                                <div className="product_image">
                                                                    <a href="">
                                                                        <img src="" alt="" />
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td className="item">
                                                                <h3><a href="">Áo Thun Simwood Denim "My Life is Good" 1539 </a></h3>
                                                                <p>
                                                                    <span className="pri">295,000₫</span>
                                                                </p>
                                                                <p className="variant">
                                                                    <span className="variant_title">S / VÀNG</span>
                                                                </p>
                                                                <div className="qty quantity-partent qty-click clearfix">
                                                                    <button type="button" className="qtyminus qty-btn">-</button>
                                                                    <input />
                                                                    <button type="button" className="qtyplus qty-btn">+</button>
                                                                </div>
                                                                <p className="price">
                                                                    <span className="text">Thành tiền:</span>
                                                                    <span className="line-item-total">590,000₫</span>
                                                                </p>

                                                            </td>
                                                            <td className="remove">
                                                                <a href="" className="cart">
                                                                    xoa
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                <div className="sidebox-group">
                                                    <h4>Ghi chú đơn hàng</h4>
                                                    <div className="checkout-note clearfix">
                                                        <textarea id="note" name="note" rows="4" placeholder="Ghi chú"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="sidebox-group sidebox-policy">
                                                    <h4>Chính sách mua hàng</h4>
                                                    <ul>
                                                        <li><ArrowRightAltIcon /> Sản phẩm được đổi 1 lần duy nhất, không hỗ trợ trả.</li>
                                                        <li><ArrowRightAltIcon />Sản phẩm còn đủ tem mác, chưa qua sử dụng.</li>
                                                        <li><ArrowRightAltIcon />Sản phẩm nguyên giá được đổi trong 30 ngày trên toàn hệ thống</li>
                                                        <li><ArrowRightAltIcon />Sản phẩm sale chỉ hỗ trợ đổi size (nếu cửa hàng còn) trong 7 ngày trên toàn hệ thống.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 sidebarCart-sticky">
                        <div className="sidebox-order">
                            <div className="sidebox-order-inner">
                                <div className="sidebox-order_title">
                                    <h3>Thông tin đơn hàng</h3>
                                </div>
                                <div className="sidebox-order_total">
                                    <p>Tổng tiền:
                                        <span className="total-price">590,000₫</span>
                                    </p>
                                </div>
                                <div className="sidebox-order_text">
                                    <p>Phí vận chuyển sẽ được tính ở trang thanh toán.</p>
                                    <p> Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</p>
                                </div>
                                <div className="sidebox-order_action">
                                    <a className="button dark btncart-checkout">THANH TOÁN</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartFeature;