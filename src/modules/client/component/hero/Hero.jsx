import React from 'react';
import './Hero.css';
import CircleBgAnimation from "../circle/Circle";
import VerticaBgLines from "../vertical-bg-lines/Vertical-bg-lines";

const Hero = () => {

    return (
        <>
            <div className="hero-container">
                <div className="hero-info">
                    <h1 className="title">Timeless Elegance</h1>
                    <p className="description">
                    Discover our curated collection of exquisite jewelry pieces, crafted
                    with precision and passion. Each piece tells a unique story of beauty
                    and sophistication.
                    </p>
                    <button className="explore-btn">Explore</button>
                </div>
                <CircleBgAnimation size={300} top="30%" left="10%" />
                <CircleBgAnimation size={300} top="5%" right="10%" />
                <VerticaBgLines />
            </div>
        </>
    );
};

export default Hero;
