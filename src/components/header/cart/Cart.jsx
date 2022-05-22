import React, { useEffect, useRef, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemCountSelector, cartItemTotalSelector } from '../../../features/Cart/selector'
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../../features/Cart/cartSlice';
import { useSnackbar } from 'notistack';

function Cart(props) {

    const ref = useRef()
    const { enqueueSnackbar } = useSnackbar();
    const countItemCart = useSelector(cartItemCountSelector);
    const totalCart = useSelector(cartItemTotalSelector);
    const [showCart, setShowCart] = useState(false)
    const listProduct = useSelector(state => state.cart.cartItems);
    const dispath = useDispatch();
    const handleCartClick = (e) => {
        setShowCart(!showCart)
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (showCart && ref.current && !ref.current.contains(e.target)) {
                setShowCart(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showCart])
    const hanldeRemoveItemcart = (id) => {
        const action = removeFromCart(id)
        dispath(action)
        enqueueSnackbar('Xóa sản phẩm thành công', { variant: 'warning' });
    }
    return (
        <div className="header-action header-action_cart show-action" ref={ref}>
            <div className="header-action_text" onClick={handleCartClick}>
                <div className="header-action__link header-action-toggle" href="" id="site-cart-handle" aria-label="Giỏ hàng" title="Giỏ hàng">
                    <span className="box-icon">
                        <ShoppingCartIcon />
                        <span className="count-holder">
                            <span className="count">{countItemCart}</span>
                        </span>
                    </span>
                </div>
            </div>
            {
                showCart && (
                    <div className="header-action_dropdown">
                        <div className="header-dropdown_content">
                            <div className="site-cart">
                                <div className="cart-ttbold"><p className="ttbold">Giỏ hàng</p></div>
                                <div className="cart-view clearfix">
                                    <div className="cart-view-scroll">
                                        <table id="cart-view">
                                            <tbody>
                                                {
                                                    listProduct.length > 0 && (
                                                        listProduct.map(data => (
                                                            <tr key={data.id} className="item_2">
                                                                <td className="img">
                                                                    <img src={data.product.thumbnail} alt={data.product.name} />
                                                                </td>
                                                                <td>
                                                                    <p className="pro-title">
                                                                        <a className="pro-title-view" title={data.product.name}>{data.product.name}</a>
                                                                    </p>
                                                                    <div className="mini-cart_quantity">
                                                                        <div className="pro-quantity-view"><span className="qty-value">{data.quantity}</span></div>
                                                                        <div className="pro-price-view">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.product.price)}</div>
                                                                    </div>
                                                                    <div className="remove_link remove-cart" onClick={() => hanldeRemoveItemcart(data.id)}>
                                                                        x
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    )
                                                }
                                                {
                                                    listProduct.length === 0 && (
                                                        <tr className="item-cart_empty">
                                                            <td>
                                                                Hiện chưa có sản phẩm
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="line"></div>
                                    <div className="cart-view-total">
                                        <table className="table-total">
                                            <tbody>
                                                <tr>
                                                    <td className="text-left">TỔNG TIỀN:</td>
                                                    <td className="text-right" id="total-view-cart">
                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalCart)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><Link to='/cart' className="linktocart button dark" onClick={handleCartClick}>Xem giỏ hàng</Link></td>
                                                    <td><a className="linktocheckout button dark">Thanh toán</a></td>
                                                </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default Cart;