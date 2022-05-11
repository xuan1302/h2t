import React, { useEffect, useRef, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style.scss';

function Cart(props) {

    const ref = useRef()
    const [showCart, setShowCart] = useState(false)
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
    return (
        <div className="header-action header-action_cart show-action" ref={ref}>
            <div className="header-action_text" onClick={handleCartClick}>
                <div className="header-action__link header-action-toggle" href="" id="site-cart-handle" aria-label="Giỏ hàng" title="Giỏ hàng">
                    <span className="box-icon">
                        <ShoppingCartIcon />
                        <span className="count-holder">
                            <span className="count">0</span>
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

                                            <tbody><tr className="item-cart_empty">
                                                <td>
                                                    Hiện chưa có sản phẩm
                                                </td>
                                            </tr>

                                            </tbody></table>
                                    </div>
                                    <div className="line"></div>
                                    <div className="cart-view-total">
                                        <table className="table-total">
                                            <tbody><tr>
                                                <td className="text-left">TỔNG TIỀN:</td>
                                                <td className="text-right" id="total-view-cart">0₫</td>
                                            </tr>
                                                <tr>
                                                    <td><a href="/cart" className="linktocart button dark">Xem giỏ hàng</a></td>
                                                    <td><a href="/checkout" className="linktocheckout button dark">Thanh toán</a></td>
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