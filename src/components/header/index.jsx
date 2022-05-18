import React from 'react';
import Logo from './logo/Logo';
import Topbar from './topbar/topbar';
import Menu from './mainMenu/Menu';
import Search from './search/Search';
import Account from './account/Account';
import Cart from './cart/Cart';

function Header(props) {
    return (
        <header id="site-header" className="main-header mainHeader_temp02 header-style">
            <Topbar />
            <div className="header-upper-middle">
                <div className="container-fluid">
                    <div className="flexContainer-header">
                        <Logo />
                        <Menu />
                        <div className="header-upper-icon">
                            <div className="header-wrap-icon">
                                <Search />
                                {/* <Account /> */}
                                <Cart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;