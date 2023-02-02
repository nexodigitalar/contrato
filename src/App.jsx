/* Styles */
import "./App.scss";

/* Components */
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";

/* React Router Dom */
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";

const App = () => {
  /*   useEffect(() => {
    localStorage.setItem(
      "contrato",
      JSON.stringify({ Producto: "Pesos Fijos" })
    );
  }, []); */

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
