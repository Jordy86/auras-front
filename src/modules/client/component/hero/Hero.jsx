import React from 'react';
import './Hero.scss';
import CircleBgAnimation from "../circle/Circle";
import VerticaBgLines from "../vertical-bg-lines/Vertical-bg-lines";
import Button from '../button/Button';

const Hero = () => {

    return (
        <>
            <div className="hero-container">
                <div className="hero-info">
                    <h1 className="title">Timeless Elegance</h1>
                    <p className="description">
                        La beauté dans chaque détail, l’élégance dans chaque bijou.
                    </p>
                    <Button text={"Shop now"}/>
                </div>
                <CircleBgAnimation size={300} top="30%" left="10%" />
                <CircleBgAnimation size={300} top="5%" right="10%" />
                <VerticaBgLines />
            </div>
        </>
    );
};

export default Hero;
