import './Statistique.css';
import AdminMenu from '../../component/MenuAdmin/AdminMenu';
import { useState } from 'react';

const Statistique = () =>{
    const [menuOpen, setMenuOpen] = useState(true);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return(
        <>
            <AdminMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <div className={`statistique-content ${menuOpen ? "menu-open" : ""}`}>
                <h2 className="product-title">Statistique </h2> <br />
                
            </div>
        </>
    );
}
export default Statistique;