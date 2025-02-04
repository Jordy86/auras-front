import './Parametrage.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AdminMenu from '../../component/MenuAdmin/AdminMenu';
import { useState,useRef  } from 'react';
import Logo from '../../../../styles/images/Auras.PNG';

const Parametrage = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const [updateCompte, setUpdateCompte] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [updateContact, setUpdateContact] = useState(false);
    const [updateLogo, setUpdateLogo] = useState(false);
    const [selectedLogo, setSelectedLogo] = useState(Logo); 

    const openUpdateCompte = () => {
        setUpdateCompte(true);
        setIsChangingPassword(false); 
    };
    
    const closeUpdateCompte = () => {
        setUpdateCompte(false);
        setIsChangingPassword(false); 
    };

    const openChangePasswordModal = () => {
        setIsChangingPassword(true);
    };

    const openUpdateContact = () =>{
        setUpdateContact(true);
    }

    const closeUpdateContact=()=>{
        setUpdateContact(false);
    }

    const openUpdateLogo=()=>{
        setUpdateLogo(true);
    }

    const closeUpdateLogo =()=>{
        setUpdateLogo(false);
        setSelectedLogo(Logo);
    }
    const fileInputRef = useRef(null);

    const handleLogoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedLogo(URL.createObjectURL(file));
        }
    };
    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };



    return (
        <>
            <AdminMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <div className={`parametrage-content ${menuOpen ? "menu-open" : ""}`}>
                <h2 className="product-title">Paramétrage </h2> <br />
                <div className={`card-parametre ${menuOpen ? "menu-open" : ""}`}>
                    <h4>Espace compte <i className='bi bi-pencil-square' onClick={openUpdateCompte}></i> </h4>
                    <div className='information'>
                        <p><b>Email : </b> radomaheninarandrianajanahary@gmail.com </p>
                        <p><b>Password : </b> ****** </p>
                    </div> <br />
                </div>
                <div className={`card-parametre ${menuOpen ? "menu-open" : ""}`}>
                    <h4>Logo <i className='bi bi-pencil-square' onClick={openUpdateLogo}></i> </h4>
                    <div className='information'>
                        <img src={Logo} alt="" />
                    </div> <br />
                </div>
                <div className={`card-parametre-contact ${menuOpen ? "menu-open" : ""}`}>
                    <h4>Contact <i className='bi bi-pencil-square' onClick={openUpdateContact}></i> </h4>
                    <div className='information'>
                        <p><b>Contact : </b> 034 43 914 50 </p>
                        <p><b>Email : </b> rado@gmail.com </p>
                        <p><b>Adresse : </b> Andoharanofotsy, Antananarivo Madagascar </p>
                    </div> <br />
                </div>

                {updateCompte && (
                    <div className="modal-overlay">
                        <div className="modal-content-add">
                            <div className="modal-header">
                                <h3>Espace compte</h3>
                                <span className="modal-close" onClick={closeUpdateCompte}>&times;</span>
                            </div>

                            {!isChangingPassword ? (
                                <>
                                    <div className='input'>
                                        <input type="text" placeholder='email' defaultValue={"radomaheninarandrianajanahary@gmail.com"} />
                                    </div>
                                    <div className='input'> 
                                        <div className="change-password" onClick={openChangePasswordModal}>
                                            Changer de mot de passe <i className='bi bi-arrow-right'></i>
                                        </div>
                                    </div>
                                    <div className="modal-actions">
                                        <button className="btn-confirm-add">Enregistrer</button>
                                    </div>
                                </>
                            ) : (
                        
                                <>
                                    <h6>Modifier mot de passe</h6>
                                    <div className='input'>
                                        <input type="password" placeholder="Ancien mot de passe " />
                                    </div>
                                    <div className='input'>
                                        <input type="password" placeholder="Nouveau mot de passe" />
                                    </div>
                                    <div className='input'>
                                        <input type="password" placeholder="Confirmer le mot de passe" />
                                    </div>
                                    <div className="modal-actions">
                                        <button className="btn-confirm-add">Enregistrer</button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {updateContact && (
                    <div className="modal-overlay">
                        <div className="modal-content-add">
                            <div className="modal-header">
                                <h3>Contact </h3>
                                <span className="modal-close" onClick={closeUpdateContact}>&times;</span>
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='email' defaultValue={"radomaheninarandrianajanahary@gmail.com"} />
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='contact' defaultValue={"034 43 914 50"} />
                            </div>
                            <div className='input'>
                                <input type="text" placeholder='adresse' defaultValue={"Andoharanofotsy,Antananarivo Madagascar "} />
                            </div>
                            <div className="modal-actions">
                                <button className="btn-confirm-add">Enregistrer</button>
                            </div>
                            
                        </div>
                    </div>
                )}
                {updateLogo && (
                    <div className="modal-overlay">
                        <div className="modal-content-add">
                            <div className="modal-header">
                                <h3>Logo </h3>
                                <span className="modal-close" onClick={closeUpdateLogo}>&times;</span>
                            </div>
                            <img src={selectedLogo} alt="Logo" style={{ cursor: "pointer" }} onClick={handleImageClick} />
                            
                            <input 
                                type="file" 
                                accept="image/*" 
                                ref={fileInputRef} 
                                style={{ display: "none" }} 
                                onChange={handleLogoChange} 
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Parametrage;
