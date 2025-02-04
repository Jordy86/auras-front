import './Paiement.css';
import AdminMenu from '../../component/MenuAdmin/AdminMenu';
import { useState } from 'react';

const Paiement = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('default');
    const [sortBy, setSortBy] = useState('ref');
    const [modalAddOpen, setModalAddOpen] = useState(false);
    const [productRows, setProductRows] = useState(1);
    const [produitsSelectionnes, setProduitsSelectionnes] = useState([]);
    
    const addProductRow = () => {
        setProductRows(prevRows => prevRows + 1); 
    };

    const closeAddModal = () => {
        setModalAddOpen(false);
        setProductRows(1);  
        setProduitsSelectionnes([]); 
    };
    

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const commandes = [
        { id: 1, ref: 'absh-#457-sdff', date: '29-12-24', date_remise: '29-12-24', personne: 'Rasolondraibe', contact: '0344391450', produit: 'Bracelet (En or de 15g )', quantite: 3, prix: '450.000 Ar', status: 'Achevé' },
        { id: 2, ref: 'absh-#458-sdff', date: '30-12-24', date_remise: '29-12-24', personne: 'Andriamialy', contact: '0344391451', produit: 'Montre', quantite: 1, prix: '150.000 Ar', status: 'Inachevé' },
        { id: 3, ref: 'absh-#459-sdff', date: '31-12-24', date_remise: '29-12-24', personne: 'Ravelo', contact: '0344391452', produit: 'T-shirt', quantite: 2, prix: '100.000 Ar', status: 'Achevé' },
        { id: 4, ref: 'absh-#460-sdff', date: '01-01-25', date_remise: '29-12-24', personne: 'Faly', contact: '0344391453', produit: 'Chaussures', quantite: 1, prix: '200.000 Ar', status: 'Inachevé' },
        { id: 5, ref: 'absh-#461-sdff', date: '02-01-25', date_remise: '29-12-24', personne: 'Mamy', contact: '0344391454', produit: 'Sac', quantite: 4, prix: '300.000 Ar', status: 'Achevé' },
        { id: 6, ref: 'absh-#462-sdff', date: '03-01-25', date_remise: '29-12-24', personne: 'Tiana', contact: '0344391455', produit: 'Veste', quantite: 2, prix: '250.000 Ar', status: 'Inachevé' },
        { id: 7, ref: 'absh-#463-sdff', date: '04-01-25', date_remise: '29-12-24', personne: 'Hery', contact: '0344391456', produit: 'Pantalon', quantite: 1, prix: '120.000 Ar', status: 'Achevé' },
        { id: 8, ref: 'absh-#464-sdff', date: '05-01-25', date_remise: '29-12-24', personne: 'Zo', contact: '0344391457', produit: 'Pull', quantite: 3, prix: '180.000 Ar', status: 'Inachevé' },
        { id: 9, ref: 'absh-#465-sdff', date: '06-01-25', date_remise: '29-12-24', personne: 'Lalao', contact: '0344391458', produit: 'Casquette', quantite: 2, prix: '90.000 Ar', status: 'Achevé' },
        { id: 10, ref: 'absh-#466-sdff', date: '07-01-25', date_remise: '29-12-24', personne: 'Tsiory', contact: '0344391459', produit: 'Lunettes', quantite: 1, prix: '70.000 Ar', status: 'Inachevé' }
    ];

    const produits = [
        { id: 1, name: "Gourmette", type: "Bracelet", matiere: "Or", prix: "1.000.000 Ar" },
        { id: 2, name: "Bague de fiançailles", type: "Bague", matiere: "Or blanc", prix: "2.500.000 Ar" },
        { id: 3, name: "Collier en diamants", type: "Collier", matiere: "Or jaune", prix: "5.000.000 Ar" },
        { id: 4, name: "Boucles d'oreilles en perles", type: "Boucles d'oreilles", matiere: "Argent", prix: "800.000 Ar" },
        { id: 5, name: "Montre en or", type: "Montre", matiere: "Or rose", prix: "3.200.000 Ar" },
        { id: 6, name: "Chaîne en platine", type: "Chaîne", matiere: "Platine", prix: "4.000.000 Ar" },
        { id: 7, name: "Pendentif en émeraude", type: "Pendentif", matiere: "Or vert", prix: "1.800.000 Ar" },
        { id: 8, name: "Bracelet en cuir", type: "Bracelet", matiere: "Cuir", prix: "500.000 Ar" },
        { id: 9, name: "Alliance en or", type: "Bague", matiere: "Or", prix: "1.200.000 Ar" },
        { id: 10, name: "Broche en saphir", type: "Broche", matiere: "Or bleu", prix: "2.000.000 Ar" }
    ];

    const filteredCommandes = commandes
        .filter(commande => {
            if (statusFilter === 'default') return true;
            return commande.status.toLowerCase() === statusFilter;
        })
        .filter(commande => {
            return commande.ref.toLowerCase().includes(search.toLowerCase()) ||
                commande.personne.toLowerCase().includes(search.toLowerCase()) ||
                commande.produit.toLowerCase().includes(search.toLowerCase());
        })
        .sort((a, b) => {
            if (sortBy === 'ref') return a.ref.localeCompare(b.ref);
            if (sortBy === 'date') return new Date(a.date) - new Date(b.date);
            return a[sortBy].localeCompare(b[sortBy]);
        });



    const removeProductRow = () => {
        if (productRows > 1) { 
            setProductRows(prevRows => prevRows - 1); 
            setProduitsSelectionnes(prevSelection => prevSelection.slice(0, -1)); 
        }
    };

    const handleProductChange = (index, produitId, quantite) => {
        const newSelection = [...produitsSelectionnes];
        const produit = produits.find(p => p.id === produitId);
        const price = parseFloat(produit.prix.replace(/[^\d.-]/g, '').replace(',', '.'));
        newSelection[index] = { produit, quantite, price };
        setProduitsSelectionnes(newSelection);
    };
    
    const total = produitsSelectionnes.reduce((acc, { produit, quantite }) => {
        const prixProduit = parseFloat(produit?.prix.replace(/[^\d]/g, ''));
        return acc + (prixProduit || 0) * quantite;
    }, 0);    
    

    return (
        <>
            <AdminMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <div className={`container-commande ${menuOpen ? "menu-open" : ""}`}>
                <div className="commande-header">
                    <h2 className="product-title">Liste Paiement</h2>
                </div> <br />

                <div className="filters-container">
                    <div className="sort-search-container">
                        <div className="sort-select">
                            <label>
                            Trier par : <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                    <option value="ref">Réference</option>
                                    <option value="date">Date paiement</option>
                                    <option value="personne">Personne</option>
                                    <option value="produit">Produit</option>
                                    <option value="prix">Prix total</option>
                                </select>
                            </label>
                        </div>

                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="search-bar"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className='ajouter'>
                    <button className="btn-add" onClick={() => setModalAddOpen(true)}>Enregistrer une paiement <i className='bi bi-plus'></i></button>
                </div>

                <div className="product-table-container">
                    <table className="commande-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Référence</th>
                                <th>Date paiement</th>
                                <th>Personne</th>
                                <th>Produit</th>
                                <th>Quantité</th>
                                <th>Prix total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCommandes.map((commande, index) => (
                                <tr key={commande.id} >
                                    <td>{index + 1}</td>
                                    <td>{commande.ref}</td>
                                    <td>{commande.date}</td>
                                    <td>{commande.personne}</td>
                                    <td>{commande.produit}</td>
                                    <td>{commande.quantite}</td>
                                    <td>{commande.prix}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            {modalAddOpen && (
                <div className="modal-overlay">
                    <div className="modal-content-add">
                        <div className="modal-header">
                            <h3>Enregistrer une paiement</h3>
                            <span className="modal-close" onClick={closeAddModal}>&times;</span>
                        </div>
                        <div className='input'>
                            <input type="text" placeholder='Nom du client' />
                            <input type="text" placeholder='Contact' />
                        </div>
                        <div className='input'>
                            <input type="date" />
                        </div>
                        {[...Array(productRows)].map((_, index) => (
                            <div className='input' key={index}>
                                <select onChange={(e) => handleProductChange(index, parseInt(e.target.value), 1)}>
                                    <option value="" disabled selected>Sélectionnez le produit</option>
                                    {produits.map((produit, idx) => (
                                        <option id='option' key={idx} value={produit.id || produit.name}>{produit.name}</option>
                                    ))}
                                </select>
                                <input type="number" placeholder='Quantité' required min={1} defaultValue={1}
                                onChange={(e) => handleProductChange(index, produitsSelectionnes[index]?.produit?.id, parseInt(e.target.value) || 1)}
                                />
                            </div>
                        ))}
                       <div className="row-buttons">
                            <button className="btn-add-row" onClick={addProductRow}>+</button>
                            {productRows > 1 && (
                                <button className="btn-remove-row" onClick={removeProductRow}>-</button>
                            )}
                        </div>
                        <div className="modal-actions">
                            <div className='total'> <label>Total : {total.toLocaleString()} Ariary</label></div>
                            <button className="btn-confirm-add">Enregistrer</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Paiement;
