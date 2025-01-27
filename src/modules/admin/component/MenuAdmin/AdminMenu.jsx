import React, { useState } from "react";
import { Link } from "react-router-dom";
import './AdminMenu.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Modal, Button } from "react-bootstrap";

const AdminMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
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
        <span className="menu-btn" onClick={toggleMenu}><i className="bi bi-list"></i></span>
        <span className="deconnexion" onClick={click_deconnexion}><i class="bi bi-power"></i></span>
      </div>


    <aside id="sidebar" className={`nav-bar ${menuOpen ? "active" : ""}`}>
      <ul class="nav-bar-left" id="sidebar-nav">
        <li class="nav-item">
            <i class="bi bi-speedometer2"></i> <span>Dashboard</span>
        </li>
        <li class="nav-item">
            <i class="bi bi-box"></i> <span>Produit</span>
        </li>
        <li class="nav-item">
            <i class="bi bi-folder"></i> <span>Catégorie</span>
        </li>
        <li class="nav-item">
            <i class="bi bi-file-text"></i> <span>Commande</span>
        </li>
        <li class="nav-item">
            <i class="bi bi-cart"></i> <span>Vente</span>
        </li>
        <li class="nav-item">
            <i class="bi bi-graph-up"></i> <span>Statistique</span>
        </li>
        <li class="nav-item">
            <i class="bi bi-gear"></i> <span>Paramétrage</span>
        </li>
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
          <Button variant="secondary" onClick={closeModal}>Annuler</Button>
          <Button variant="danger" onClick={deconnexion}>Confirmer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminMenu;
