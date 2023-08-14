/* Styles */
import "./App.scss";

/* Hooks */
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "@/store/dataSlice/dataSlice";
import { setId } from "@/store/crmSlice/crmSlice";
import { setGrupo, setIdConfirmation } from "@/store/crmSlice/crmSlice";

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

  useEffect(() => {
    window.addEventListener("beforeunload", removeLocalStorage);
    return () => {
      window.removeEventListener("beforeunload", removeLocalStorage);
    };
  }, []);

  const removeLocalStorage = (e) => {
    localStorage.removeItem("contrato");
    e.returnValue = "";
  };

  const getDataFromLocal = () => {
    /*  let data = JSON.parse(localStorage.getItem("contrato")); */
    let data = {
      nombre: "Micky",
      apellido: "Greensite",
      email: "mgreensite7@nps.gov",
      telefono: "3516038709",
      cuoCap: "CAPITAL",
      cuotas: "715",
      moneda: "USD",
      monto: "165000",
      plazo: "300",
      simulador: "Pesos Fijos",
      codigo: "91",
      indice: "0",
      espera: "",
      normal: "",
      final: "",
    };

    if (data) {
      dispatch(setData(data));
      if (!registrarCliente.ventaId) {
        RegistrarClienteCRM(data);
      }

      if (data.plazo == 200) {
        document.documentElement.setAttribute("data-theme", "cristal");
      } else {
        document.documentElement.setAttribute("data-theme", "pimba");
      }
    } else {
      window.location.href = "https://consorcio.uy/";
    }
  };

  const RegistrarClienteCRM = async (data) => {
    await fetch(
      `${import.meta.env.VITE_URL}/RegistrarClienteCRM`,

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
            Indice: data.indice,
            UTMSource: "CONTRATO ONLINE",
            UTMMedium: "https://consorcio.uy/contrato/",
            UTMCampaign: "https://consorcio.uy/contrato/",
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
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
          console.log(data);
          dispatch(changePage(5));
        }
      })
      .catch(() => {
        dispatch(changePage(5));
      });
  };

  const TomarNumeroCRM = async (venta) => {
    await fetch(`${import.meta.env.VITE_URL}/TomarNumeroCRM`, {
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
        if (data.pCodigoRespuesta == "00") {
          InformacionGrupoContratoOnLine(data.pGrupo, venta);
          dispatch(setIdConfirmation(data.pGrupo + "-" + data.pGrupoNumero));
        } else {
          console.log(data);
          dispatch(changePage(5));
        }
      })
      .catch(() => {
        dispatch(changePage(5));
      });
  };

  const InformacionGrupoContratoOnLine = async (grupoId, venta) => {
    await fetch(`${import.meta.env.VITE_URL}/InformacionGrupoContratoOnLine`, {
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
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.pCodigoRespuesta == "00") {
          dispatch(setGrupo(data.pSDTInformacionGrupoContratoOnLine));
        } else {
          console.log(data);
          dispatch(changePage(5));
        }
        setSpinner(false);
      })
      .catch(() => {
        dispatch(changePage(5));
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
