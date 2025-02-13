import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLoader } from "./context/LoaderContext";
import LoaderComponent from "./shared/component/loader/LoaderComponent";
import Panier from "./modules/client/pages/panier/Panier";
import Shop from "./modules/client/pages/shop/Shop";
import Accueil from "./modules/client/pages/accueil/Accueil";

const App = () => {
  const { loadingOn, loadingOff } = useLoader();
  
  useEffect(() => {
    const loadData = async () => {
      loadingOn();
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } finally {
        loadingOff();
      }
    };
    loadData();
  }, []);

  return (
    <Router>
      <LoaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
