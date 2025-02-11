import React from "react";
import "./Shop.scss";
import Nav from "../../component/nav/Nav";
import Filter from "../../component/filter/Filter";

const Shop = () => {
    return (
        <div className="shop-container">
            <Nav />
            <Filter />
        </div>
    );
};

export default Shop;