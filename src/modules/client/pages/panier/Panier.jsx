import React from "react";
import "./Panier.scss";
import Nav from "../../component/nav/Nav";
import Footer from "../../component/footer/Footer";
import { Trash2 } from "lucide-react";
import Button from "../../component/button/Button";

const Panier = () => {

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
    ]

    return(
        <div className="panier-container">
            <Nav />
            <div className="panier-content">
                <div className="elements">
                    <div className="title">Panier</div>
                    {products.map((item, index) => (
                    <div className="element" key={index}>
                        <div className="img"><img src={item.img_src} alt=""/></div>
                        <div className="descriptionn"><p>{item.description}</p></div>
                        <div className="name">{item.name}</div>
                        <div className="price">{item.price}Ar</div>
                        <div className="trush"><Trash2 /></div>
                    </div>
                    ))}
                    <div className="checkout">
                        <Button text="Commander"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Panier;