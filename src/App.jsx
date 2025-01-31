import React from "react";
import { useLoader } from "./context/LoaderContext";
import LoaderComponent from "./shared/component/loader/LoaderComponent";
import { useEffect } from "react";
import Shop from "./modules/client/pages/shop/Shop";

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
        <Shop />
      </div>
    </>
  );
};

export default App;