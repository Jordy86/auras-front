import React from "react";
import './Accueil.css';
import Nav from "../../component/nav/Nav";
import Hero from "../../component/hero/Hero";

const Accueil = () => {

    return (
        <div className="accueil-container">
            <Nav className="nav-container" />    
            <Hero className="hero-container" />
        </div>
    );
};

export default Accueil;