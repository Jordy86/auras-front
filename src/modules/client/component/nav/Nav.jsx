import React from 'react';
import './Nav.scss';
import { Contact, ShoppingCart } from "lucide-react";
import { menuItems } from "./NavMenuItem";
import logo from "../../../../assets/image/logo.png";

const Nav = () => {
    return (
        <>
            <div className="nav-container">
                <div className="nav-content">
                    <div className="nav-logo">
                        <img src={logo} alt=''/>
                    </div>

                    <div className="nav-menu">
                        {menuItems.map((item) => (
                            <button key={item} className="nav-menu-item">
                                {item}
                            </button>
                        ))}
                    </div>

                    <div className="nav-contact">
                        <button className="contact-button">
                            <ShoppingCart className="icon" />
                            <span>Panier</span>
                        </button>
                        <button className="contact-button">
                            <Contact className="icon" />
                            <span>Contact</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="header-spacer"></div>
        </>
    );
};

export default Nav;
