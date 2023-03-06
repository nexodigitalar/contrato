/* Styles */
import "./App.scss";

/* Hooks */
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  const [images, setImages] = useState();
  const page = useSelector((state) => state.page.value);
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
    getDataFromLocal();
  }, []);

  const getDataFromLocal = () => {
    /*     let data = JSON.parse(localStorage.getItem("contrato")); */
    let data = {
      cuoCap: "CAPITAL",
      cuotas: 130,
      entrega: "17/02/23",
      moneda: "USD",
      monto: 20000,
      plazo: 200,
      simulador: "Dolares",
    };
    dispatch(setData(data));
  };

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          {page === 1 && <Route path="/" element={<Step1 />} />}
          {page === 2 && (
            <Route
              path="/"
              element={<Step2 setImages={setImages} images={images} />}
            />
          )}
          {page === 3 && <Route path="/" element={<Step3 />} />}
          {page === 4 && <Route path="/" element={<Step4 />} />}
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
