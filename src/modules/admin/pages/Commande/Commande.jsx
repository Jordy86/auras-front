import './Commande.css';
import AdminMenu from '../../component/MenuAdmin/AdminMenu';
import { useState } from 'react';

const Commande = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('default');
    const [sortBy, setSortBy] = useState('ref');
    const [selectedCommande, setSelectedCommande] = useState(null);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const commandes = [
        { id: 1, ref: 'absh-#457-sdff', date: '29-12-24', personne: 'Rasolondraibe', contact: '0344391450', produit: 'Bracelet', quantite: 3, prix: '450.000 Ar', status: 'Achevé' },
        { id: 2, ref: 'absh-#458-sdff', date: '30-12-24', personne: 'Andriamialy', contact: '0344391451', produit: 'Montre', quantite: 1, prix: '150.000 Ar', status: 'Inachevé' },
        { id: 3, ref: 'absh-#459-sdff', date: '31-12-24', personne: 'Ravelo', contact: '0344391452', produit: 'T-shirt', quantite: 2, prix: '100.000 Ar', status: 'Achevé' },
        { id: 4, ref: 'absh-#460-sdff', date: '01-01-25', personne: 'Faly', contact: '0344391453', produit: 'Chaussures', quantite: 1, prix: '200.000 Ar', status: 'Inachevé' },
        { id: 5, ref: 'absh-#461-sdff', date: '02-01-25', personne: 'Mamy', contact: '0344391454', produit: 'Sac', quantite: 4, prix: '300.000 Ar', status: 'Achevé' },
        { id: 6, ref: 'absh-#462-sdff', date: '03-01-25', personne: 'Tiana', contact: '0344391455', produit: 'Veste', quantite: 2, prix: '250.000 Ar', status: 'Inachevé' },
        { id: 7, ref: 'absh-#463-sdff', date: '04-01-25', personne: 'Hery', contact: '0344391456', produit: 'Pantalon', quantite: 1, prix: '120.000 Ar', status: 'Achevé' },
        { id: 8, ref: 'absh-#464-sdff', date: '05-01-25', personne: 'Zo', contact: '0344391457', produit: 'Pull', quantite: 3, prix: '180.000 Ar', status: 'Inachevé' },
        { id: 9, ref: 'absh-#465-sdff', date: '06-01-25', personne: 'Lalao', contact: '0344391458', produit: 'Casquette', quantite: 2, prix: '90.000 Ar', status: 'Achevé' },
        { id: 10, ref: 'absh-#466-sdff', date: '07-01-25', personne: 'Tsiory', contact: '0344391459', produit: 'Lunettes', quantite: 1, prix: '70.000 Ar', status: 'Inachevé' }
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

    const handleRowClick = (commande) => {
        if (commande.status === 'Inachevé') {
            setSelectedCommande(commande);
        }
    };

    const handleCloseModal = () => {
        setSelectedCommande(null);
    };

    const handleSavePayment = () => {
        // Logique pour enregistrer le paiement
        console.log('Paiement enregistré pour la commande:', selectedCommande);
        handleCloseModal();
    };

    return (
        <>
            <AdminMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <div className={`container-commande ${menuOpen ? "menu-open" : ""}`}>
                <div className="commande-header">
                    <h2 className="product-title">Liste commande</h2>
                </div>

                <div className="filters-container">
                    <div className="sort-search-container">
                        <div className="sort-select">
                            <label>
                            Trier par : <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                    <option value="ref">Réference</option>
                                    <option value="date">Date</option>
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

                        <div className="status-filter-card">
                            <h5>Filtrer par statut : </h5>
                            <div className="status-filter">
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="default"
                                    checked={statusFilter === 'default'}
                                    onChange={() => setStatusFilter('default')}
                                /> Tous
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="achevé"
                                    checked={statusFilter === 'achevé'}
                                    onChange={() => setStatusFilter('achevé')}
                                /> Achevé
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="status"
                                    value="inachevé"
                                    checked={statusFilter === 'inachevé'}
                                    onChange={() => setStatusFilter('inachevé')}
                                /> Inachevé
                            </label>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="product-table-container">
                    <table className="commande-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Référence</th>
                                <th>Date</th>
                                <th>Personne</th>
                                <th>Contact</th>
                                <th>Produit</th>
                                <th>Quantité</th>
                                <th>Prix total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCommandes.map((commande, index) => (
                                <tr key={commande.id} onClick={() => handleRowClick(commande)}>
                                    <td>{index + 1}</td>
                                    <td>{commande.ref}</td>
                                    <td>{commande.date}</td>
                                    <td>{commande.personne}</td>
                                    <td>{commande.contact}</td>
                                    <td>{commande.produit}</td>
                                    <td>{commande.quantite}</td>
                                    <td>{commande.prix}</td>
                                    <td>
                                        <span className={`badge ${commande.status === 'Achevé' ? 'bg-success' : 'bg-danger'}`}>
                                            <i className={`bi ${commande.status === 'Achevé' ? 'bi-check-circle' : 'bi-x-circle'} me-1`}></i>
                                            {commande.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {selectedCommande && (
                <div className="modal">
                    <div className="modal-content">
                        <div className='header-modal'>
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <h2>Enregistrer le paiement</h2>
                        </div>
                        <p><b>Référence : </b> {selectedCommande.ref}</p>
                        <p><b>Date : </b> {selectedCommande.date}</p>
                        <p> <b>Personne :</b> {selectedCommande.personne}</p>
                        <p><b>Contact :</b> {selectedCommande.contact}</p>
                        <p><b>Produit : </b> {selectedCommande.produit}</p>
                        <p><b> Quantité : </b> {selectedCommande.quantite}</p>
                        <p><b>Prix total : </b> {selectedCommande.prix}</p>
                        <button className='btn-confirm-add' onClick={handleSavePayment}>Enregistrer le paiement</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Commande;
