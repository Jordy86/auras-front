import React from "react";
import { useLoader } from "./context/LoaderContext";
import LoaderComponent from "./shared/component/loader/LoaderComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AdminMenu from "./modules/admin/component/MenuAdmin/AdminMenu";
import Login from "./modules/admin/pages/LoginAdmin/Login";
import Dashboard from "./modules/admin/pages/Dashboard/Dashboard";

const App = () => {
  const { loadingOn, loadingOff } = useLoader();
  useEffect(()=>{
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
      <LoaderComponent />
    </>
  </BrowserRouter>
  );
};

export default App;