import React from "react";
import './Accueil.css';
import Nav from "../../component/nav/Nav";
import Hero from "../../component/hero/Hero";
import ScrollLayout from "../../component/scroll-layout/Scroll-layout";
import CardProduct from "../../component/card-product/Card-product";
import Footer from "../../component/footer/Footer";
import CategorySection from "../../component/category-section/Category-section";

const Accueil = () => {

    return (
        <div className="accueil-container">
            <Nav className="nav-container" />    
            <Hero className="hero-container" />
            <CategorySection />
            <div className="circlebg">
                <ScrollLayout title="Nouveau produit">
                    <CardProduct
                        img_src="https://img.freepik.com/photos-gratuite/joli-collier-luxe-bijoux-col_1339-7951.jpg?t=st=1738227880~exp=1738231480~hmac=1632d955bd863baf01619daef667e03feb18649d103a6d0d211d21b5724f5eea&w=360"
                        name="Colier en perles" 
                    />
                    <CardProduct
                        img_src="https://img.freepik.com/psd-gratuit/illustration-realiste-bague-mariage-isolee_23-2151551230.jpg?t=st=1738229683~exp=1738233283~hmac=d2ada3485a4c09eb541923c43be41f0d7f52a41537e5d4206f82b593a2744eeb&w=740"
                        name="Bague de fiancaille" 
                    />
                    <CardProduct
                        img_src="https://img.freepik.com/photos-gratuite/bracelets-faits-perles-pierres-colorees_114579-13013.jpg?t=st=1738229885~exp=1738233485~hmac=6ed437719cad004e3d22ad0997d7d82dee587d95693cb5c59229244e19685e7f&w=996"
                        name="Bracelet en perles" 
                    />
                    <CardProduct
                        img_src="https://img.freepik.com/photos-gratuite/gros-plan-femme-citrouille_23-2147687066.jpg?t=st=1738229993~exp=1738233593~hmac=65083d8296ac681c55167801a1f7d9371cf2b507286588b1684397392d08f807&w=996"
                        name="Boucle d'oreille stylée"
                    />
                </ScrollLayout>
            </div>
            <Footer />
        </div>
    );
};

export default Accueil;