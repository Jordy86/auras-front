import { Link } from "react-router-dom";
import AdminMenu from "../../component/MenuAdmin/AdminMenu";
import './Dashboard.css';
import React,{ useState } from "react";


const Dashboard = () =>{
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);


    return (
        <>
            <AdminMenu menuOpen={menuOpen} toggleMenu={toggleMenu}/>
            <div className={`dashboard-content ${menuOpen ? "menu-open" : ""}`}>
                <h1>Coucou Dashboard</h1>
                <p>Bienvenue dans votre espace d'administration !</p>
            </div>
        </>
    );
}
export default Dashboard;