import React from "react";
import "./Card-product.scss";
import Button from "../button/Button";

const CardProduct = (props) => {

    return (
        <>
        <div className="card-product-container">
            <div className="image">
                <img src={props.img_src} alt="product" />
            </div>
            <div className="descriptions">
                <div className="name">{props.name}</div>
                <div className="explore-btn">
                    <Button 
                        text="Shop"
                        width="fit-content"
                        padding='0.5rem 2rem'
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default CardProduct;