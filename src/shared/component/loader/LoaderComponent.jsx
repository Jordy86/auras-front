import React from "react";
import { useLoader } from "../../../context/LoaderContext";
import "./LoaderComponent.scss";

const LoaderComponent = () => {
  const { isLoading } = useLoader();

  if (!isLoading) return null;

  return (
    <div className="overlay">
      <div className="loader"></div>
    </div>
  );
};

export default LoaderComponent;
