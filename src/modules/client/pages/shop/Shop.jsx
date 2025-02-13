import React from "react";
import "./Shop.scss";
import Nav from "../../component/nav/Nav";
import Filter from "../../component/filter/Filter";
import CardProductDetail from "../../component/card-product-detail/Card-product-detail";

const Shop = () => {

    const products = [
        {
            img_src: "https://img.freepik.com/photos-gratuite/joli-collier-luxe-bijoux-col_1339-7951.jpg",
            name: "Collier en perles",
            price: 49.99,
            description: "Un magnifique collier en perles, parfait pour une occasion spéciale."
        },
        {
            img_src: "https://img.freepik.com/psd-gratuit/illustration-realiste-bague-mariage-isolee_23-2151551230.jpg",
            name: "Bague de fiançailles",
            price: 299.99,
            description: "Une bague de fiançailles élégante et intemporelle."
        },
        {
            img_src: "https://img.freepik.com/photos-gratuite/gros-plan-femme-citrouille_23-2147687066.jpg",
            name: "Boucle d'oreille stylée",
            price: 19.99,
            description: "Des boucles d'oreille modernes et tendance."
        },
        {
            img_src: "https://img.freepik.com/photos-gratuite/bracelets-faits-perles-pierres-colorees_114579-13013.jpg",
            name: "Bracelet en perles",
            price: 34.99,
            description: "Un bracelet artisanal en perles et pierres colorées."
        },
        {
            img_src: "https://img.freepik.com/photos-gratuite/joli-collier-luxe-bijoux-col_1339-7951.jpg",
            name: "Collier en perles",
            price: 49.99,
            description: "Un magnifique collier en perles, parfait pour une occasion spéciale."
        },
        {
            img_src: "https://img.freepik.com/psd-gratuit/illustration-realiste-bague-mariage-isolee_23-2151551230.jpg",
            name: "Bague de fiançailles",
            price: 299.99,
            description: "Une bague de fiançailles élégante et intemporelle."
        },
        {
            img_src: "https://img.freepik.com/photos-gratuite/gros-plan-femme-citrouille_23-2147687066.jpg",
            name: "Boucle d'oreille stylée",
            price: 19.99,
            description: "Des boucles d'oreille modernes et tendance."
        },
        {
            img_src: "https://img.freepik.com/photos-gratuite/bracelets-faits-perles-pierres-colorees_114579-13013.jpg",
            name: "Bracelet en perles",
            price: 34.99,
            description: "Un bracelet artisanal en perles et pierres colorées."
        },
        {
            img_src: "https://img.freepik.com/photos-gratuite/joli-collier-luxe-bijoux-col_1339-7951.jpg",
            name: "Collier en perles",
            price: 49.99,
            description: "Un magnifique collier en perles, parfait pour une occasion spéciale."
        },
        {
            img_src: "https://img.freepik.com/psd-gratuit/illustration-realiste-bague-mariage-isolee_23-2151551230.jpg",
            name: "Bague de fiançailles",
            price: 299.99,
            description: "Une bague de fiançailles élégante et intemporelle."
        },
        {
            img_src: "https://img.freepik.com/photos-gratuite/gros-plan-femme-citrouille_23-2147687066.jpg",
            name: "Boucle d'oreille stylée",
            price: 19.99,
            description: "Des boucles d'oreille modernes et tendance."
        },
        {
            img_src: "https://img.freepik.com/photos-gratuite/bracelets-faits-perles-pierres-colorees_114579-13013.jpg",
            name: "Bracelet en perles",
            price: 34.99,
            description: "Un bracelet artisanal en perles et pierres colorées."
        },
        {
            img_src: "https://img.freepik.com/photos-gratuite/joli-collier-luxe-bijoux-col_1339-7951.jpg",
            name: "Collier en perles",
            price: 49.99,
            description: "Un magnifique collier en perles, parfait pour une occasion spéciale."
        },
        {
            img_src: "https://img.freepik.com/psd-gratuit/illustration-realiste-bague-mariage-isolee_23-2151551230.jpg",
            name: "Bague de fiançailles",
            price: 299.99,
            description: "Une bague de fiançailles élégante et intemporelle."
        },
        {
            img_src: "https://img.freepik.com/photos-gratuite/gros-plan-femme-citrouille_23-2147687066.jpg",
            name: "Boucle d'oreille stylée",
            price: 19.99,
            description: "Des boucles d'oreille modernes et tendance."
        },
        {
            img_src: "https://img.freepik.com/photos-gratuite/bracelets-faits-perles-pierres-colorees_114579-13013.jpg",
            name: "Bracelet en perles",
            price: 34.99,
            description: "Un bracelet artisanal en perles et pierres colorées."
        },
    ];

    return (
        <div className="shop-container">
            <Nav />
            <div className="shop-content">
                <div className="content">
                    <Filter />
                    <div className="product-content">
                        {products.map( (product, index)=> (
                            <CardProductDetail 
                                key={index}
                                img_src = {product.img_src}
                                description = {product.description}
                                name = {product.name}
                                price ={product.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;