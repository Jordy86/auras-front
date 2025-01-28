import './Nav.css';
import { Contact, Diamond, ShoppingCart } from "lucide-react";
import { menuItems } from "./NavMenuItem";
import { useEffect } from 'react';

const Nav = () => {
    useEffect( ()=> {
        document.addEventListener("DOMContentLoaded", () => {
            const nav = document.querySelector(".nav-container");
            let lastScrollY = window.scrollY;
            
            window.addEventListener("scroll", () => {
                const currentScrollY = window.scrollY;
            
                if (currentScrollY > lastScrollY) {
                nav.classList.add("hidden");
                } else {
                nav.classList.remove("hidden");
                }
            
                lastScrollY = currentScrollY;
            });
        });  
    }, []);
    
    return (
        <>
            <div className="nav-container">
                <div className="nav-content">
                    <div className="nav-logo">
                        <Diamond className="icon" />
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
            <div class="header-spacer"></div>
        </>
    );
};

export default Nav;
