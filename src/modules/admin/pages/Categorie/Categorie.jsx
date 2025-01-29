import './Categorie.css';
import AdminMenu from '../../component/MenuAdmin/AdminMenu';
import { useState } from 'react';

const Categorie = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const [categories, setCategories] = useState([
        { id: 1, nom: "Bague de mariage", produits: 15 },
        { id: 2, nom: "Collier en or", produits: 10 },
        { id: 3, nom: "Bracelet en argent", produits: 8 },
        { id: 4, nom: "Montre de luxe", produits: 5 },
        { id: 5, nom: "Boucles d'oreilles", produits: 12 }
    ]);

    const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
    const [modalEditOpen, setModalEditOpen] = useState(false);
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [editName, setEditName] = useState("");
    const [newCategoryName, setNewCategoryName] = useState("");

    const openDeleteModal = (categorie) => {
        setSelectedCategory(categorie);
        setModalDeleteOpen(true);
    };

    const closeDeleteModal = () => {
        setModalDeleteOpen(false);
        setSelectedCategory(null);
    };

    const deleteCategory = () => {
        setCategories(categories.filter(cat => cat.id !== selectedCategory.id));
        closeDeleteModal();
    };

    const openEditModal = (categorie) => {
        setSelectedCategory(categorie);
        setEditName(categorie.nom);
        setModalEditOpen(true);
    };

    const closeEditModal = () => {
        setModalEditOpen(false);
        setSelectedCategory(null);
    };

    const saveEdit = () => {
        setCategories(categories.map(cat =>
            cat.id === selectedCategory.id ? { ...cat, nom: editName } : cat
        ));
        closeEditModal();
    };

    

    const closeAddModal = () => {
        setModalAddOpen(false);
    };

    const addCategory = () => {
        if (newCategoryName.trim() === "") return;
        const newCategory = {
            id: categories.length + 1,
            nom: newCategoryName,
            produits: 0
        };
        setCategories([...categories, newCategory]);
        closeAddModal();
    };

    return (
        <>
            <AdminMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <div className={`container-categorie ${menuOpen ? "menu-open" : ""}`}>
            <div className="categorie-header">
                <h2 className="product-title">Liste catégorie</h2>
                <button className="btn-add" onClick={() => setModalAddOpen(true)}>Ajouter une categorie <i className='bi bi-plus'></i></button>
            </div>
                
                <div className="product-table-container">
                    <table className="categorie-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nom</th>
                                <th>Produit associé</th>
                                <th id='th-action'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((categorie, index) => (
                                <tr key={categorie.id}>
                                    <td id='num'>{index + 1}</td>
                                    <td>{categorie.nom}</td>
                                    <td>{categorie.produits}</td>
                                    <td id="icon-action">
                                        <i className="icon-trash bi bi-trash" onClick={() => openDeleteModal(categorie)}></i>
                                        <i className="icon-edit bi bi-pencil-square" onClick={() => openEditModal(categorie)}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {modalDeleteOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Confirmation</h3>
                        <p>Voulez-vous vraiment supprimer <strong>{selectedCategory?.nom}</strong> ?</p>
                        <div className="modal-actions-delete">
                            <button className="btn-cancel" onClick={closeDeleteModal}>Annuler</button>
                            <button className="btn-confirm" onClick={deleteCategory}>Supprimer</button>
                        </div>
                    </div>
                </div>
            )}

            {modalEditOpen && (
                <div className="modal-overlay">
                    <div className="modal-content-add">
                        <div className="modal-header">
                            <h3>Modifier une catégorie</h3>
                            <span className="modal-close" onClick={closeEditModal}>&times;</span>
                        </div>
                        <label>Nom : </label> <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                        <div className="modal-actions">
                            <button className="btn-confirm-add" onClick={saveEdit}>Sauvegarder</button>
                        </div>
                    </div>
                </div>
            )}

            {modalAddOpen && (
                <div className="modal-overlay">
                    <div className="modal-content-add">
                        <div className="modal-header">
                            <h3>Ajouter une catégorie</h3>
                            <span className="modal-close" onClick={closeAddModal}>&times;</span>
                        </div>
                        <label>Nom :</label>
                        <input type="text" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} />
                        <div className="modal-actions">
                            <button className="btn-confirm-add" onClick={addCategory}>Enregistrer</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Categorie;
