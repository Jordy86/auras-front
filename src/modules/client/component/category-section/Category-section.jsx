import React from "react";
import "./Category-section.css";
import CircleBgAnimation from "../circle/Circle";

const CategorySection = ({ flexDirection="row-reverse" } ) => {
    const style = {
        flexDirection: flexDirection    
    };

    return (
        <div className="category-section-container" style={style}>
            <CircleBgAnimation size={400} top="0" right="30" />
            <div className="image-container">
                <img 
                    src="https://img.freepik.com/photos-gratuite/kit-carriere-modele-nature-morte_23-2150218026.jpg?t=st=1738291019~exp=1738294619~hmac=1b5f4d7453b249fa85b2ba22aa30d74f5cd377470e7228f81720525b7bff9f42&w=996" 
                    alt="Collection de bijoux" 
                />
            </div>
            <div className="info-container">
                <h2 className="title">Collection Femme</h2>
                <p className="description">
                    Découvrez notre collection de bijoux pour femmes, alliant élégance et originalité. 
                    Chaque pièce est conçue avec soin pour sublimer votre beauté et exprimer votre style unique. 
                    Adoptez l'exceptionnel !
                </p>
                <button className="explore-button">Explore</button>
            </div>
        </div>
    );
};

export default CategorySection;