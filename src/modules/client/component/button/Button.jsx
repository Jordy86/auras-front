import React from "react";
import "./Button.scss";

const Button = ({text, width='10rem', padding='0.7rem 2rem'}) => {
    return (
        <button className="custom-btn" style={{width: width, padding: padding}}>{text}</button>
    );
};

export default Button;