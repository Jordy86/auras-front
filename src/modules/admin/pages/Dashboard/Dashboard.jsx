import { Link } from "react-router-dom";
import AdminMenu from "../../component/MenuAdmin/AdminMenu";
import './Dashboard.css';

const Dashboard = () =>{
    return (
        <>
            <AdminMenu/>
            <div className="content">
                <h1>Coucou Dashboard</h1>
                <p>Bienvenue dans votre espace d'administration !</p>
            </div>
        </>
    );
}
export default Dashboard;