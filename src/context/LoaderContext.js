import React, { createContext, useState, useContext } from "react";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const loadingOn = () => setIsLoading(true);
  const loadingOff = () => setIsLoading(false);

  return (
    <LoaderContext.Provider value={{ isLoading, loadingOn, loadingOff }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
