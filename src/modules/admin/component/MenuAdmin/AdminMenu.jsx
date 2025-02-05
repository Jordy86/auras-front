import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const AdminMenu = ({ menuOpen, toggleMenu }) => {
  const [showModal, setShowModal] = useState(false);

  const click_deconnexion = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <div className="header">
        <div className="logo"><h1>Auras</h1></div>
        <span className="menu-btn" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </span>
        <span className="deconnexion" onClick={click_deconnexion}>
          <i className="bi bi-power"></i>
        </span>
      </div>

      <aside id="sidebar" className={`nav-bar ${menuOpen ? "active" : ""}`}>
        <ul className="nav-bar-left" id="sidebar-nav">
          <Link to="/admin/accueil">
            <li className="nav-item">
              <i className="bi bi-speedometer2"></i> <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/admin/product">
            <li className="nav-item">
              <i className="bi bi-box"></i> <span>Produit</span>
            </li>
          </Link>
          <Link to="/admin/categorie">
            <li className="nav-item">
              <i className="bi bi-folder"></i> <span>Catégorie</span>
            </li>
          </Link>
          <Link to="/admin/commande">
            <li className="nav-item">
              <i className="bi bi-file-text"></i> <span>Commande</span>
            </li>
          </Link>
          <Link to="/admin/paiement">
            <li className="nav-item">
            <i class="bi bi-credit-card"></i> <span>Paiement</span>
            </li>
          </Link>
          <Link to="/admin/statistique">
            <li className="nav-item">
              <i className="bi bi-graph-up"></i> <span>Statistique</span>
            </li>
          </Link>
          <Link to="/admin/parametrage">
            <li className="nav-item">
              <i className="bi bi-gear"></i> <span>Paramétrage</span>
            </li>
          </Link>
        </ul>
      </aside>

      {showModal &&(
          <div className="modal-overlay">
            <div className="modal-content-delete">
                <h3>Confirmation</h3>
                <p>Voulez-vous vraiment supprimer ? </p>
                <div className="modal-actions-delete">
                    <button className="btn-cancel" onClick={closeModal}>Annuler</button>
                    <button className="btn-confirm">Deconnexion</button>
                </div>
            </div>
          </div>
      )}
    </>
  );
};

export default AdminMenu;
