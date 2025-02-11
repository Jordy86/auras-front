import React, { useEffect } from "react";
import WOW from "wowjs";
import "./Accueil.scss";
import Nav from "../../component/nav/Nav";
import Hero from "../../component/hero/Hero";
import ScrollLayout from "../../component/scroll-layout/Scroll-layout";
import CardProduct from "../../component/card-product/Card-product";
import Footer from "../../component/footer/Footer";
import CategorySection from "../../component/category-section/Category-section";
import VerticalBgLines from "../../component/vertical-bg-lines/Vertical-bg-lines";

const Accueil = () => {
    useEffect(() => {
        new WOW.WOW({ live: false }).init();
    }, []);

    const shuffleArray = (array) => {
        let shuffledArray = [...array]; // Créer une copie pour ne pas modifier l'original
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Génère un indice aléatoire
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Échange les éléments
        }
        return shuffledArray;
    };
    

    const items = [
        {
            src: "https://img.freepik.com/photos-gratuite/kit-carriere-modele-nature-morte_23-2150218026.jpg",
            title: "Collection Élégante",
            description: "Découvrez notre sélection raffinée de bijoux élégants.",
        },
        {
            src: "https://img.freepik.com/photos-gratuite/beau-modele-portant-des-bijoux-stylises_23-2150169316.jpg",
            title: "Luxe & Style",
            description: "Ajoutez une touche de luxe avec nos créations uniques.",
        },
        {
            src: "https://img.freepik.com/photos-gratuite/vue-laterale-homme-portant-collier_23-2149439813.jpg",
            title: "Artisanat Exquis",
            description: "Des bijoux faits à la main avec soin et passion.",
        },
    ];

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
        <div className="accueil-container">
            <div className="wow animate__animated animate__fadeInDown" data-wow-duration="1s">
                <Nav className="nav-container" />
            </div>
            <div className="wow animate__animated animate__fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
                <Hero className="hero-container" />
            </div>
            <div 
                className="wow animate__animated animate__fadeIn" 
                data-wow-duration="1s" 
                data-wow-delay="0.7s"
                data-wow-offset="100"
            >
                <CategorySection items={items}/>
            </div>
            <div className="circlebg">
                <ScrollLayout title="Nouveau produit">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="wow animate__animated animate__fadeInRight"
                            data-wow-delay={`${index * 0.3}s`}
                            data-wow-offset="300"
                        >
                            <CardProduct img_src={product.img_src} name={product.name} />
                        </div>
                    ))}
                </ScrollLayout>
            </div>
            <div 
                className="wow animate__animated animate__fadeIn" 
                data-wow-duration="1s" 
                data-wow-delay="0.7s"
                data-wow-offset="100"
                style={{marginTop: "5rem"}}
            >
                <CategorySection flexDirection="row" items={shuffleArray(items)}/>
            </div>
            <div 
                className="wow animate__animated animate__fadeIn linebg" 
                data-wow-duration="1s" 
                data-wow-delay="0.7s"
                data-wow-offset="100"
            >
                <CategorySection items={shuffleArray(items)}/>
                <VerticalBgLines />
            </div>
            <Footer />
        </div>
    );
};

export default Accueil;
