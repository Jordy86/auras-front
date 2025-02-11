import React from "react";
import "./Card-product.scss";

const CardProduct = (props) => {

    return (
        <>
        <div className="card-product-container">
            <div className="image">
                <img src={props.img_src} alt="product" />
            </div>
            <div className="descriptions">
                <div className="name">{props.name}</div>
                <div className="explore-btn"><button>magasin</button></div>
                
            </div>
        </div>
        </>
    );
};

export default CardProduct;