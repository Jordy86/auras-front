import AdminMenu from "../../component/MenuAdmin/AdminMenu";
import React, { useState } from "react";


const Product = () =>{
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <AdminMenu menuOpen={menuOpen} toggleMenu={toggleMenu}/>
            <div className={`dashboard-content ${menuOpen ? "menu-open" : ""}`}>
                <h1>B.B.T.</h1>
                <p>GG less rall ah</p>
            </div>
        </>
    );
}
export default Product;