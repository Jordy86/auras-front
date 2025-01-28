import React, { useState } from "react";  // Retirer Input de l'import
import './Login.css';
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();  
        navigate('/admin/accueil'); 
    };

    return(
        <>
            <div className="login-container"> 
                <h4 className="text-center mb-4">Authentification Admin</h4> 
                <form onSubmit={handleLogin}>
                    <div className="mb-3"> 
                        <label htmlFor="pseudo" className="form-label">Pseudo</label> 
                        <input type="text" className="form-control" id="pseudo" name="pseudo" placeholder="Entrer votre pseudo" /> 
                    </div>
                    <div className="mb-3"> 
                        <label htmlFor="password" className="form-label">Password</label> 
                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" /> 
                    </div>
                    <button type="submit" className="btn btn-custom w-100">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
