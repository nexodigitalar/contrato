/* Styles */
import "./App.scss";

/* Components */
import MainLayout from "./layout/MainLayout";

/* Hooks */
import { useEffect } from "react";

/* React Router Dom */
import { Routes, Route, useLocation } from "react-router-dom";

/* Components */
import Step1 from "@/views/Step1/Step1";
import Step2 from "@/views/Step2/Step2";
import Step3 from "@/views/Step3/Step3";
import Step4 from "@/views/Step4/Step4";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/producto-seleccionado" element={<Step1 />} />
          <Route path="/datos-personales" element={<Step2 />} />
          <Route path="/datos-ocupacionales" element={<Step3 />} />
          <Route path="/resumen-plan" element={<Step4 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
