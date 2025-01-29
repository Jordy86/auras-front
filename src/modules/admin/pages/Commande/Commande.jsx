import './Commande.css';
import AdminMenu from '../../component/MenuAdmin/AdminMenu';
import { useState } from 'react';

const Commande = () =>{
    const [menuOpen, setMenuOpen] = useState(true);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    
    return(
        <>
            <AdminMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <div className={`container-commande ${menuOpen ? "menu-open" : ""}`}>
                <h1>Commande</h1>
            </div>
        </>
    );
}
export default Commande;