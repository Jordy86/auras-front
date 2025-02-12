import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="info">
                    <div className="title">Auras bijouterie</div>
                    <div className="contact">
                        <div className="mail">exemple@gmail.com</div>
                        <div className="whatsapp">+261 00 000 00</div>
                        <div className="tel">+261 00 000 00</div>
                    </div>
                </div>
                <div className="info2">
                </div>
            </div>
            <div className="copy">
            &copy; 2025 Elyse Mahefaniaina.
            </div>
        </div>
    );
};

export default Footer;