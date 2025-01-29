import React from "react";
import { useLoader } from "./context/LoaderContext";
import LoaderComponent from "./shared/component/loader/LoaderComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AdminMenu from "./modules/admin/component/MenuAdmin/AdminMenu";
import Login from "./modules/admin/pages/LoginAdmin/Login";
import Dashboard from "./modules/admin/pages/Dashboard/Dashboard";
import Product from "./modules/admin/pages/Product/Product";
import Categorie from "./modules/admin/pages/Categorie/Categorie";

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
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/admin/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/admin/accueil" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/admin/product" element={<Product />} />
        </Routes>
        <Routes>
          <Route path="admin/categorie" element={<Categorie />} />
        </Routes>
        <LoaderComponent />
      </>
    </BrowserRouter>
  );
};

export default App;