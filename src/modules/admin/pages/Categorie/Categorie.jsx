import './Categorie.css';
import AdminMenu from '../../component/MenuAdmin/AdminMenu';
import { useState } from 'react';

const Categorie = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return(
        <>
            <AdminMenu menuOpen={menuOpen} toggleMenu={toggleMenu}/>
            <div className={`container-categorie ${menuOpen ? "menu-open" : ""}`}>
                <h1>CAteg</h1>
            </div>
        </>
    );
}

export default Categorie;