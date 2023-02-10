/* Styles */
import "./App.scss";

/* Hooks */
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData } from "@/store/dataSlice/dataSlice";

/* Components */
import Step1 from "@/views/Step1/Step1";
import Step2 from "@/views/Step2/Step2";
import Step3 from "@/views/Step3/Step3";
import Step4 from "@/views/Step4/Step4";
import MainLayout from "@/layout/MainLayout";
import ConfirmationLayout from "@/layout/ConfirmationLayout";
import ErrorPage from "@/views/ErrorPage/ErrorPage";
import ConfirmationPage from "@/views/ConfirmationPage/ConfirmationPage";

const App = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  useEffect(() => {
    saveLocal();
  }, []);

  const saveLocal = () => {
    let data = {
      simulador: "Pesos Fijos",
      cuoCap: "CAPITAL",
      moneda: "UYU",
      monto: 5300000,
      plazo: 200,
      cuotas: 34450,
      espera: 3500,
      normal: 6500,
      final: 9500,
      entrega: "17/02/23",
      LeadMontoNecesita: "100000_300000",
    };
    localStorage.setItem("contrato", JSON.stringify(data));
    dispatch(setData(data));
  };

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Step1 />} />
          <Route path="/datos-personales" element={<Step2 />} />
          <Route path="/datos-ocupacionales" element={<Step3 />} />
          <Route path="/resumen-plan" element={<Step4 />} />
        </Route>
        <Route element={<ConfirmationLayout />}>
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/valid" element={<ConfirmationPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
