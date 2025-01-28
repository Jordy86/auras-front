import AdminMenu from "../../component/MenuAdmin/AdminMenu";
import React, { useState } from "react";
import ProductGrid from "../../component/ProductGrid/ProductGrid"; // Import du composant ProductGrid
import "./Product.css";

const Product = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const [viewMode, setViewMode] = useState("grid");

    const products = [
        {
            id: 1,
            name: "Bracelets",
            description: "Un bracelet élégant et moderne pour toutes les occasions.",
            material: "Or",
            price: "150 000 Ar",
            imageUrl: "https://www.abbottlyon.com/cdn/shop/products/STOCKCLOVERWEBREADYMODEL-03_935x1056_crop_center.jpg",
        },
        {
            id: 2,
            name: "Colliers",
            description: "Collier raffiné, parfait pour vos soirées spéciales.",
            material: "Argent",
            price: "120 000 Ar",
            imageUrl: "https://ayabijoux.fr/13425-large_default_2x/collier-neige-acier-or.jpg",
        },
        {
            id: 3,
            name: "Bagues",
            description: "Une bague intemporelle pour des moments uniques.",
            material: "Inoxydable",
            price: "80 000 Ar",
            imageUrl: "https://bijouxcailloux.fr/wp-content/uploads/2024/02/bague-simone-portee-800x902.jpg",
        },
        {
            id: 4,
            name: "Bracelets",
            description: "Un bracelet élégant et moderne pour toutes les occasions.",
            material: "Or",
            price: "150 000 Ar",
            imageUrl: "https://www.abbottlyon.com/cdn/shop/products/STOCKCLOVERWEBREADYMODEL-03_935x1056_crop_center.jpg",
        },
        {
            id: 5,
            name: "Colliers",
            description: "Collier raffiné, parfait pour vos soirées spéciales.",
            material: "Argent",
            price: "120 000 Ar",
            imageUrl: "https://ayabijoux.fr/13425-large_default_2x/collier-neige-acier-or.jpg",
        },
        {
            id: 6,
            name: "Bagues",
            description: "Une bague intemporelle pour des moments uniques.",
            material: "Inoxydable",
            price: "80 000 Ar",
            imageUrl: "https://bijouxcailloux.fr/wp-content/uploads/2024/02/bague-simone-portee-800x902.jpg",
        },
    ];

    return (
        <>
            <AdminMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <div className={`dashboard-content ${menuOpen ? "menu-open" : ""}`}>
                <div className="product-header">
                    <h2 className="product-title">Produits</h2>
                    <div className="view-toggle">
                        <button
                            className={`view-button ${viewMode === "grid" ? "active" : ""}`}
                            onClick={() => setViewMode("grid")}
                        >
                            Grille
                        </button>
                        <button
                            className={`view-button ${viewMode === "list" ? "active" : ""}`}
                            onClick={() => setViewMode("list")}
                        >
                            Liste
                        </button>
                    </div>
                </div>

                {viewMode === "list" ? (
                    <div className="product-table-container">
                        <table className="product-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nom</th>
                                    <th>Description</th>
                                    <th>Matière</th>
                                    <th className="col-end">Prix</th>
                                    <th className="col-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.material}</td>
                                        <td className="col-end">{product.price}</td>
                                        <td className="col-end">
                                            <button className="action-btn view-btn">Voir détails</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <ProductGrid products={products} /> // Utilisation du composant ProductGrid
                )}
            </div>
        </>
    );
};

export default Product;
