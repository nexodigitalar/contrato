/* Styles */
import "./App.scss";

/* Hooks */
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "@/store/dataSlice/dataSlice";
import { setId } from "@/store/crmSlice/crmSlice";

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
  const [registrarCliente, setRegistrarCliente] = useState(false);

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
    let data = JSON.parse(localStorage.getItem("contrato"));
    /* let data = {
      apellido: "Apellido",
      codigo: "51",
      cuoCap: "CAPITAL",
      cuotas: 43400,
      email: "email@email.com",
      entrega: "17/02/23",
      moneda: "UYU",
      monto: 6200000,
      nombre: "Nombre",
      plazo: 200,
      simulador: "Pesos Fijos",
      telefono: "123456879",
    }; */
    dispatch(setData(data));
    /*     if (!registrarCliente) {
      RegistrarClienteCRM(data);
    } */
  };

  const RegistrarClienteCRM = async (data) => {
    await fetch(
      "http://190.64.74.3:8234/rest/APIConsorcio/RegistrarClienteCRM",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pUsuario: "APIConsorcioWeb",
          pPassword: "9u7y5.3C1o8n6s4o2r0c3i5o7.9u2y4",
          pCanal: "CONTRATO ONLINE",
          pSDTRegistrarClienteCRM: {
            Nombre: data.nombre,
            Apellido: data.apellido,
            Telefono: data.telefono,
            Email: data.email,
            ClienteIdExt: "0",
            ProductoCodigo: data.codigo,
            CapitalObjetivo: data.monto,
            CuotaPromedio: data.cuotas,
            Moneda: data.moneda,
            Plazo: data.plazo,
            PlazoEntrega: "0",
            Bonificadas: "0",
            UTMSource: "PruebaReg1",
            UTMMedium: "PruebaReg1",
            UTMCampaign: "PruebaReg1",
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((info) => {
        setRegistrarCliente(true);
        console.log(info);
        dispatch(
          setId({
            ventaId: info.pVentaOLId,
            empresaId: info.pEmpresaId,
            cliId: info.pCliId,
          })
        );
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
