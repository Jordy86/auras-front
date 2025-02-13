import React from "react";
import "./Card-product-detail.scss";

const CardProductDetail = ({ img_src, description, name, price }) => {
    

    return (
        <div className="card-product-detail-container">
            <div className="img">
                <img src={img_src} alt={name} />
            </div>
            <div className="name">{name}</div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="price">{price} Ar</div>
        </div>
    );
};

export default CardProductDetail;