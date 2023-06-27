/* Styles */
import "./App.scss";

/* Hooks */
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "@/store/dataSlice/dataSlice";
import { setId } from "@/store/crmSlice/crmSlice";
import { setGrupo } from "@/store/crmSlice/crmSlice";
import { setError } from "@/store/errorSlice/errorSlice";

/* Components */
import Step1 from "@/views/Step1/Step1";
import Step2 from "@/views/Step2/Step2";
import Step3 from "@/views/Step3/Step3";
import Step4 from "@/views/Step4/Step4";
import MainLayout from "@/layout/MainLayout";
import ConfirmationLayout from "@/layout/ConfirmationLayout";
import ErrorPage from "@/views/ErrorPage/ErrorPage";
import ConfirmationPage from "@/views/ConfirmationPage/ConfirmationPage";
import { changePage } from "@/store/pageSlice/pageSlice";

const App = () => {
  const [images, setImages] = useState();
  const [spinner, setSpinner] = useState(true);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page.value);
  const registrarCliente = useSelector((state) => state.crm.ids);

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
      nombre: "Marquita",
      apellido: "Witt",
      email: "mwitti@sourceforge.net",
      telefono: "2294712186",
      cuoCap: "CAPITAL",
      cuotas: "715",
      entrega: "17/02/23",
      moneda: "USD",
      monto: "165000",
      plazo: "300",
      simulador: "Pesos Ajustables",
      codigo: "90",
    };

    dispatch(setData(data));
    if (!registrarCliente.ventaId) {
      RegistrarClienteCRM(data);
    }

    if (data.plazo == 200) {
      document.documentElement.setAttribute("data-theme", "cristal");
    } else {
      document.documentElement.setAttribute("data-theme", "pimba");
    }
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
          pUsuario: import.meta.env.VITE_USUARIO,
          pPassword: import.meta.env.VITE_PASSWORD,
          pCanal: "CONTRATO ONLINE",
          pVentaOLId: 0,
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
      .then((data) => {
        console.log("Registrar cliente CRM", data);
        if (data.pCodigoRespuesta == "00") {
          dispatch(
            setId({
              ventaId: data.pVentaOLId,
              empresaId: data.pEmpresaId,
              cliId: data.pCliId,
            })
          );
          TomarNumeroCRM(data.pVentaOLId);
        } else {
          dispatch(
            setError(`${data.pCodigoRespuesta}: ${data.pMensajeRespuesta}`)
          );
          dispatch(changePage(5));
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const TomarNumeroCRM = async (venta) => {
    await fetch("http://190.64.74.3:8234/rest/APIConsorcio/TomarNumeroCRM", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pUsuario: import.meta.env.VITE_USUARIO,
        pPassword: import.meta.env.VITE_PASSWORD,
        pVentaOLId: venta,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("TomarNumeroCRM", data);
        if (data.pCodigoRespuesta == "00") {
          InformacionGrupoContratoOnLine(data.pGrupo, venta);
        } else {
          dispatch(
            setError(`${data.pCodigoRespuesta}: ${data.pMensajeRespuesta}`)
          );
          dispatch(changePage(5));
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const InformacionGrupoContratoOnLine = async (grupoId, venta) => {
    await fetch(
      "http://190.64.74.3:8234/rest/APIConsorcio/InformacionGrupoContratoOnLine",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pUsuario: import.meta.env.VITE_USUARIO,
          pPassword: import.meta.env.VITE_PASSWORD,
          pGrupo: grupoId,
          pVentaOLId: venta,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("InformacionGrupoContratoOnLine", data);
        if (data.pCodigoRespuesta == "00") {
          dispatch(setGrupo(data.pSDTInformacionGrupoContratoOnLine));
        } else {
          dispatch(
            setError(`${data.pCodigoRespuesta}: ${data.pMensajeRespuesta}`)
          );
          dispatch(changePage(5));
        }
        setSpinner(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          {page === 1 && (
            <Route path="/" element={<Step1 spinner={spinner} />} />
          )}
          {page === 2 && (
            <Route
              path="/"
              element={<Step2 setImages={setImages} images={images} />}
            />
          )}
          {page === 3 && <Route path="/" element={<Step3 />} />}
          {page === 4 && <Route path="/" element={<Step4 images={images} />} />}
        </Route>
        <Route element={<ConfirmationLayout />}>
          {page === 5 && <Route path="/" element={<ErrorPage />} />}
          {page === 6 && <Route path="/" element={<ConfirmationPage />} />}
        </Route>
      </Routes>
    </>
  );
};

export default App;
