import React from "react";
import "./Shop.scss";
import Nav from "../../component/nav/Nav";
import Filter from "../../component/filter/Filter";
import CardProduct from "../../component/card-product/Card-product";

const Shop = () => {

    const products = [
        {
            img_src: "https://img.freepik.com/photos-gratuite/joli-collier-luxe-bijoux-col_1339-7951.jpg",
            name: "Collier en perles",
        },
        {
            img_src: "https://img.freepik.com/psd-gratuit/illustration-realiste-bague-mariage-isolee_23-2151551230.jpg",
            name: "Bague de fiançailles",
        },
        {
            img_src: "https://img.freepik.com/photos-gratuite/bracelets-faits-perles-pierres-colorees_114579-13013.jpg",
            name: "Bracelet en perles",
        },
        {
            img_src: "https://img.freepik.com/photos-gratuite/gros-plan-femme-citrouille_23-2147687066.jpg",
            name: "Boucle d'oreille stylée",
        },
    ];

    return (
        <div className="shop-container">
            <Nav />
            <div className="shop-content">
                <div className="content">
                    <Filter />
                    <div className="product-content">
                    {products.map((product, index) => (
                        <div className="product-shop">
                            <CardProduct key={index} img_src={product.img_src} name={product.name} />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;