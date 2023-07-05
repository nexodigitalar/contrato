/* Styles & Img */
import "./Step1_2.scss";

/* Components */
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";

/* Hooks */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Step1_2 = ({ changePage }) => {
  const [date, setDate] = useState("");
  const infoGrupo = useSelector((state) => state.crm.grupo);

  useEffect(() => {
    if (infoGrupo.FechaProximoSorteo)
      setDate(new Date(infoGrupo.FechaProximoSorteo));
  }, [infoGrupo]);

  return (
    <>
      {infoGrupo && (
        <div className="step1_2">
          <div className="step1_2_container">
            <Header
              text="DETALLE"
              text2="DEL"
              bold="GRUPO"
              number={infoGrupo.Grupo}
            />

            <section className="step1_2_innerContainer">
              <h3 className="step1_2_title">
                <span className="color_text">Detalles</span> que tenés que{" "}
                <span className="gray">conocer</span>
              </h3>

              <div className="step1_2_textContainer">
                <p className="step1_2_watermark">a</p>
                <p className="step1_2_text">
                  Plazo:{" "}
                  <span className="color_text">
                    {infoGrupo.GrupoPlazo} meses
                  </span>
                </p>
              </div>
              <div className="step1_2_textContainer">
                <p className="step1_2_watermark">b</p>
                <p className="step1_2_text">
                  Cantidad de integrantes:{" "}
                  <span className="color_text">
                    {infoGrupo.GrupoMiembros} personas
                  </span>
                </p>
              </div>
              {date && (
                <div className="step1_2_textContainer">
                  <p className="step1_2_watermark">c</p>
                  <p className="step1_2_text">
                    Primer sorteo:{" "}
                    <span className="color_text">
                      {date.toLocaleDateString()}
                    </span>
                  </p>
                </div>
              )}
              <div className="step1_2_textContainer">
                <p className="step1_2_watermark">d</p>
                <p className="step1_2_text">
                  Sorteos: <span className="color_text">mensuales</span>
                </p>
              </div>
              <div className="step1_2_textContainer">
                <p className="step1_2_watermark">e</p>
                <p className="step1_2_text">
                  <span className="color_text">Adjudicados:</span>{" "}
                  {infoGrupo.GrupoRitmoAdjudicaciones}
                </p>
              </div>
              <div className="step1_2_textContainer">
                <p className="step1_2_watermark">f</p>
                <div className="step1_2_infoContainer">
                  <p className="step1_2_text">
                    <span className="color_text">
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

              {infoGrupo.InfoGrupoProducto.CuotasBonificadas.length != 0 && (
                <>
                  <h3 className="step1_2_title step1_2_detail">
                    Detalle <span className="color_text">cuotas</span>{" "}
                    <span className="gray">bonificadas</span>
                  </h3>
                  <p className="step1_2_text">
                    Acá van todas las observaciones de las condiciones
                    particularesAcá van todas las observaciones de las
                    condiciones particularesAcá van todas las observaciones de
                    las condiciones particularesAcá van todas las observaciones
                    de las condiciones particularesAcá van todas las
                    observaciones de las condiciones particularesAcá van todas
                    las observaciones de las condiciones particularesAcá van
                    todas las observaciones de las condiciones particularesAcá
                    van todas las observaciones de las condiciones
                    particularesAcá van todas las observaciones de las
                    condiciones particularesAcá van todas las observaciones de
                    las condiciones particularesAcá van todas las observaciones
                    de las condiciones particularesAcá van todas las
                    observaciones de las condiciones particulares
                  </p>
                </>
              )}

              {infoGrupo.InfoGrupoProducto.Observaciones != "" && (
                <>
                  <h3 className="step1_2_title step1_2_detail">
                    Observaciones <span className="color_text">del</span>{" "}
                    <span className="gray">contrato</span>
                  </h3>
                  <p className="step1_2_text">
                    {infoGrupo.InfoGrupoProducto.Observaciones}
                  </p>
                </>
              )}
            </section>
            <div className="step1_2_buttonContainer">
              <Button text="Siguiente" click={() => changePage(3)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Step1_2;
