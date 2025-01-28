import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Modal, Button } from "react-bootstrap";
import Logo from '../../../../styles/images/Auras.PNG';



const AdminMenu = ({ menuOpen, toggleMenu }) => {
  const [showModal, setShowModal] = useState(false);

  const click_deconnexion = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const deconnexion = () => {
    setShowModal(false);
    console.log("Déconnecté !");
    alert("Vous avez été déconnecté !");
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
          <Link to="/admin/vente">
            <li className="nav-item">
              <i className="bi bi-cart"></i> <span>Vente</span>
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

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Déconnexion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Êtes-vous sûr(e) de vouloir vous déconnecter ?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Annuler
          </Button>
          <Button variant="danger" onClick={deconnexion}>
            Confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminMenu;
