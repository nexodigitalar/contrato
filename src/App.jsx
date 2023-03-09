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
    /* let data = JSON.parse(localStorage.getItem("contrato")); */
    let data = {
      apellido: "TestApellido",
      cuoCap: "CAPITAL",
      cuotas: 6500,
      email: "test@test.com",
      entrega: "17/02/23",
      moneda: "UYU",
      monto: 1000000,
      nombre: "TestNombre",
      plazo: 200,
      simulador: "Pesos Ajustables",
      telefono: "123123456",
    };
    dispatch(setData(data));
    RegistrarClienteCRM(data);
  };

  const RegistrarClienteCRM = async (data) => {
    await fetch(
      "http://190.64.74.3:8234/Web.NetEnvironment/rest/APIConsorcio/RegistrarClienteCRM",
      {
        method: "POST",
        headers: {
          pUsuario: "APIConsorcioWeb",
          pPassword: "9u7y5.3C1o8n6s4o2r0c3i5o7.9u2y4",
          pCanal: "CONTRATO ONLINE",
          pSDTRegistrarClienteCRM: {
            Nombre: data.nombre,
            Apellido: data.apellido,
            Telefono: data.telefono,
            Email: data.email,
            ClienteIdExt: "0",
            ProductoCodigo: "50",
            CapitalObjetivo: data.monto.toString(),
            CuotaPromedio: data.cuotas.toString(),
            Moneda: data.moneda,
            Plazo: data.plazo.toString(),
            PlazoEntrega: data.entrega,
            Bonificadas: "0",
            UTMSource: "CONTRATO ONLINE",
            UTMMedium: "https://consorcio.uy/contrato/",
            UTMCampaign: " https://consorcio.uy/contrato/",
          },
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
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
