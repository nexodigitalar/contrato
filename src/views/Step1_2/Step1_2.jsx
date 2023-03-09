/* Styles & Img */
import "./Step1_2.scss";

/* Components */
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";

/* Hooks */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGrupo } from "@/store/crmSlice/crmSlice";

const Step1_2 = ({ changePage }) => {
  const venta = useSelector((state) => state.crm.ventaId);
  const infoGrupo = useSelector((state) => state.crm.grupo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!infoGrupo) {
      TomarNumeroCRM();
    }
  }, []);

  useEffect(() => {
    const dataGrupo = {
      GrupoId: "CRI580",
      GrupoNombre: "CRISTAL 580",
      GrupoPlazo: 200,
      GrupoMiembros: 400,
      FechaProximoSorteo: "2023-03-01T18:00:00",
      GrupoRitmoAdjudicaciones:
        "Ya hay 48 ganadores, 352 continúan participando. Este grupo finalizará en 182 meses.",
    };
    dispatch(setGrupo(dataGrupo));
  }, []);

  const TomarNumeroCRM = async () => {
    await fetch(
      "http://190.64.74.3:8234/Web.NetEnvironment/rest/APIConsorcio/TomarNumeroCRM",
      {
        method: "POST",
        headers: {
          pUsuario: "APIConsorcioWeb",
          pPassword: "9u7y5.3C1o8n6s4o2r0c3i5o7.9u2y4",
          pVentaOLId: venta,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let infoData = {
          pGrupo: "575",
          pGrupoNumero: "033",
        };
        InformacionGrupoContratoOnLine(infoData.pGrupo);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const InformacionGrupoContratoOnLine = async (grupoId) => {
    await fetch(
      "http://190.64.74.3:8234/Web.NetEnvironment/rest/APIConsorcio/InformacionGrupoContratoOnLine",
      {
        method: "POST",
        headers: {
          pUsuario: "APIConsorcioWeb",
          pPassword: "9u7y5.3C1o8n6s4o2r0c3i5o7.9u2y4",
          pGrupoId: grupoId,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const dataGrupo = {
          GrupoId: "CRI580",
          GrupoNombre: "CRISTAL 580",
          GrupoPlazo: 200,
          GrupoMiembros: 400,
          FechaProximoSorteo: "2023-03-01T18:00:00",
          GrupoRitmoAdjudicaciones:
            "Ya hay 48 ganadores, 352 continúan participando. Este grupo finalizará en 182 meses.",
        };
        dispatch(setGrupo(dataGrupo));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      {infoGrupo ? (
        <div className="step1_2">
          <div className="step1_2_container">
            <Header
              text="PRODUCTO"
              bold="SELECCIONADO"
              number={infoGrupo.GrupoId}
            />

            <section className="step1_2_innerContainer">
              <h3 className="step1_2_title">
                <span className="green">Detalles</span> que tenés que{" "}
                <span className="gray">conocer</span>
              </h3>

              <div className="step1_2_textContainer">
                <p className="step1_2_watermark">a</p>
                <p className="step1_2_text">
                  Plazo:{" "}
                  <span className="green">{infoGrupo.GrupoPlazo} meses</span>
                </p>
              </div>
              <div className="step1_2_textContainer">
                <p className="step1_2_watermark">b</p>
                <p className="step1_2_text">
                  Cantidad de integrantes:{" "}
                  <span className="green">
                    {infoGrupo.GrupoMiembros} personas
                  </span>
                </p>
              </div>
              <div className="step1_2_textContainer">
                <p className="step1_2_watermark">c</p>
                <p className="step1_2_text">
                  Primer sorteo: <span className="green">01/02/2023</span>
                </p>
              </div>
              <div className="step1_2_textContainer">
                <p className="step1_2_watermark">d</p>
                <p className="step1_2_text">
                  Sorteos: <span className="green">mensuales</span>
                </p>
              </div>
              <div className="step1_2_textContainer">
                <p className="step1_2_watermark">e</p>
                <div className="step1_2_infoContainer">
                  <p className="step1_2_text">
                    <span className="green">
                      {" "}
                      Itinerario de adjudcaciones:{" "}
                    </span>
                    El primer año (mes 1 al mes 12): 4 ganadores mensuales: 1
                    por sorteo, 2 por licitación libre y 1 por licitación base,
                    la cual comenzará con 99 cuotas en el primer mes y luego irá
                    decreciendo a razón de una cuota por mes todos los meses. El
                    primer año habrá 48 ganadores.
                  </p>
                  <p className="step1_2_text">
                    El segundo año (meses 13 al 24): 3 ganadores por mes, 1 por
                    sorteo y 2 por licitación libre. Esto implica que habrá 36
                    ganadores en el segundo año.
                  </p>
                  <p className="step1_2_text">
                    ¡En los primeros dos años habrá 84 ganadores!
                  </p>
                  <p className="step1_2_text">
                    Desde el tercer año hasta el final (meses 25 al 200) 2
                    ganadores mensuales 1 por sorteo y 1 por licitación libre.
                  </p>
                  <p className="step1_2_text">
                    Adicionalmente, se prevén en el entorno de las 40
                    adjudicaciones por Fecha Elegida (butacas asignadas entre el
                    1 y 400) que repercutirán en una aceleración en el ritmo de
                    ganadores.
                  </p>
                  <p className="step1_2_text">
                    Esto adelanta considerablemente el plazo para ser ganador.
                    En grupo, todos obtienen su capital antes. Como ves, todos
                    ganan, todos concretan su proyecto. En Consorcio nadie
                    pierde.
                  </p>
                </div>
              </div>
            </section>
            <div className="step1_2_buttonContainer">
              <Button text="Siguiente" click={() => changePage(3)} />
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default Step1_2;
