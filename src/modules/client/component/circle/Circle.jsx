import React from "react";
import "./Circle.scss";

const CircleBgAnimation = ({ size = 300, top, left, right }) => {
    const style = {
        width: `${size}px`,
        height: `${size}px`,
        top: top,
        left: left,
        right: right
    };

    return <div className="circle" style={style}></div>;
};

export default CircleBgAnimation;
