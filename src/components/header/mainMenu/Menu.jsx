import React from 'react';
import MenuItem from './MenuItem';

function Menu(props) {
    const menuItems = [
        {
            href: "/",
            text: "Home"
        },
        {
            href: "/about",
            text: "About"
        },
        {
            href: "/faq",
            text: "Faq"
        },
        {
            href: "/products",
            text: "Products"
        },
        {
            href: "/blog",
            text: "Blog"
        }
    ]
    return (
        <div className="header-upper-menu hidden-sm hidden-xs">
            <div className="menu-desktop ">
                <div id="nav">
                    <nav className="main-nav text-center">
                        <ul className="clearfix">
                            {
                                menuItems.map(({ href, text }, index) => <MenuItem key={index} href={href} text={text} />)
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Menu;