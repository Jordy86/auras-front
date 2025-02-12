import React from "react";
import "./Scroll-layout.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ScrollLayout = (props)=> {

    return (
        <>
        <div className="scroll-container">
            <div className="header">
                <div className="title">{props.title}</div>
                <div className="action">
                    <div className="left" aria-label="Scroll left">
                        <ChevronLeft />
                    </div>
                    <div className="right" aria-label="Scroll right">
                        <ChevronRight />
                    </div>
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
        </>

    );
};

export default ScrollLayout;