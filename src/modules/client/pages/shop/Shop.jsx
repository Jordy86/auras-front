import React from "react";
import "./Shop.scss";
import Nav from "../../component/nav/Nav";
import Filter from "../../component/filter/Filter";

const Shop = () => {
    return (
        <div className="shop-container">
            <Nav />
            <div className="shop-content">
                <div className="content">
                    <Filter />
                </div>
            </div>
        </div>
    );
};

export default Shop;