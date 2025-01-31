import React from "react";
import { useLoader } from "./context/LoaderContext";
import LoaderComponent from "./shared/component/loader/LoaderComponent";
import { useEffect } from "react";
import Accueil from "./modules/client/pages/accueil/Accueil";

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
    <>
      <LoaderComponent />
      <div className="container">
        <Accueil/>
      </div>
    </>
  );
};

export default App;