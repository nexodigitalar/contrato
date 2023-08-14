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
  const { plazo } = useSelector((state) => state.data);

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
                    Próximo sorteo:{" "}
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
                      Itinerario de adjudicaciones:{" "}
                    </span>
                    Los Grupos de Ahorro tienen un{" "}
                    <span className="color_text">
                      ágil ritmo de adjudicación o de selección de ganadores por
                      sorteo, licitación y fecha elegida
                    </span>{" "}
                    que hace que el plazo final de entrega se adelante a la
                    finalización del grupo.
                  </p>
                  <p className="step1_2_text">
                    El ritmo o itinerario de ganadores estimado en los grupos es
                    el siguiente:
                  </p>
                  <p className="step1_2_text color_text">
                    Para los Grupos de {plazo} meses:
                  </p>

                  {plazo === 200 ? (
                    <>
                      <p className="step1_2_text">
                        El{" "}
                        <span className="color_text">primer año del grupo</span>{" "}
                        (mes 1 al mes 12):{" "}
                        <span className="color_text">
                          4 ganadores mensuales
                        </span>
                        : 1 por sorteo, 2 por licitación libre y 1 por
                        licitación base, la cual comenzará con 99 cuotas en el
                        primer mes y luego irá decreciendo a razón de una cuota
                        por mes todos los meses.
                      </p>
                      <p className="step1_2_text color_text">
                        El primer año habrá 48 ganadores.
                      </p>
                      <p className="step1_2_text">
                        El{" "}
                        <span className="color_text">
                          segundo año del grupo
                        </span>{" "}
                        (meses 13 al 24):{" "}
                        <span className="color_text">3 ganadores por mes</span>,
                        1 por sorteo y 2 por licitación libre.
                      </p>
                      <p className="step1_2_text color_text">
                        Esto implica que habrá 36 ganadores en el segundo año.
                      </p>
                      <p className="step1_2_text color_text">
                        ¡En los primeros dos años habrá 84 ganadores!
                      </p>
                      <p className="step1_2_text">
                        Desde el{" "}
                        <span className="color_text">tercer año del grupo</span>{" "}
                        hasta el final (meses 25 al 200):
                        <span className="color_text">
                          2 ganadores mensuales
                        </span>
                        , 1 por sorteo y 1 por licitación libre.
                      </p>
                      <p className="step1_2_text">
                        Adicionalmente, se prevén adjudicaciones por Fecha
                        Elegida (con números entre el 1 y 400) que repercutirán
                        en
                        <span className="color_text">
                          una aceleración en el ritmo
                        </span>{" "}
                        de ganadores.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="step1_2_text">
                        El{" "}
                        <span className="color_text">primer año del grupo</span>{" "}
                        (mes 1 al mes 12):{" "}
                        <span className="color_text">
                          5 ganadores mensuales
                        </span>
                        : 1 por sorteo, 1 por licitación libre y 3 por
                        licitación base, la cual comenzará con 135 cuotas en el
                        primer mes y luego irá decreciendo.
                      </p>
                      <p className="step1_2_text color_text">
                        El primer año habrá 60 ganadores.
                      </p>
                      <p className="step1_2_text">
                        El{" "}
                        <span className="color_text">
                          segundo año del grupo
                        </span>{" "}
                        (meses 13 al 24):{" "}
                        <span className="color_text">4 ganadores por mes</span>,
                        1 por sorteo y 1 por licitación libre y 2 con licitación
                        con base.
                      </p>
                      <p className="step1_2_text color_text">
                        Esto implica que habrá 48 ganadores en el segundo año.
                        ¡En los primeros dos años habrá 108 ganadores!
                      </p>
                      <p className="step1_2_text">
                        El{" "}
                        <span className="color_text">
                          tercer año (meses 25 al 36)
                        </span>
                        :{" "}
                        <span className="color_text">
                          3 ganadores mensuales
                        </span>
                        : 1 por sorteo y 1 por licitación libre y 1 por
                        licitación con base.
                      </p>
                      <p className="step1_2_text color_text">
                        Luego del tercer año habría, de esta manera, 36
                        ganadores. Esto llevaría a acumular 144 ganadores en
                        tres años.
                      </p>
                      <p className="step1_2_text">
                        Desde el{" "}
                        <span className="color_text">
                          cuarto año del grupo y en adelante
                        </span>{" "}
                        (meses 37 a 300):{" "}
                        <span className="color_text">
                          2 ganadores mensuales
                        </span>
                        , 1 por sorteo y 1 por licitación alternándose,
                        mensualmente, una licitación libre y una con base.
                      </p>
                      <p className="step1_2_text color_text">
                        El cuarto año habría, de esta manera, 24 ganadores. Por
                        lo tanto ¡se acumulan 168 ganadores en los primeros 4
                        años del grupo!
                      </p>
                      <p className="step1_2_text">
                        Este régimen estimado adelanta considerablemente el
                        plazo para ser ganador. En el grupo,{" "}
                        <span className="color_text">
                          todos obtienen su capital antes
                        </span>
                        .
                      </p>
                    </>
                  )}
                  <p className="step1_2_text">
                    Como ves,{" "}
                    <span className="color_text">
                      todos ganan, todos concretan su proyecto. Con Consorcio
                      nadie pierde.
                    </span>
                  </p>
                  <p className="step1_2_text">
                    Este ha sido el ritmo de Adjudicaciones dispuesto como
                    estimado hasta el presente. Podrá variar en más o en menos
                    en función de las necesidades y conveniencias de cada Grupo
                    de Ahorro Previo, de acuerdo a lo previsto en la cláusula
                    10.3 y 1 9 de las Condiciones Generales del Contrato.
                  </p>
                </div>
              </div>

              {infoGrupo.InfoGrupoProducto.CuotasBonificadas.length != 0 && (
                <>
                  <h3 className="step1_2_title step1_2_detail">
                    <span className="gray">Detalle</span>{" "}
                    <span className="color_text">cuotas</span>{" "}
                    <span className="gray">bonificadas</span>
                  </h3>
                  <p className="step1_2_textSm">
                    Tipo de Bonificación:{" "}
                    {
                      infoGrupo.InfoGrupoProducto.CuotasBonificadas[0]
                        .BonificacionTipo
                    }
                  </p>
                  <p className="step1_2_textSm">
                    Bonificación Nombre:{" "}
                    {
                      infoGrupo.InfoGrupoProducto.CuotasBonificadas[0]
                        .BonificacionNombre
                    }
                  </p>
                  <p className="step1_2_textSm">
                    Cuotas bonificadas:{" "}
                    {
                      infoGrupo.InfoGrupoProducto.CuotasBonificadas[0]
                        .CuotasBonificadas
                    }
                  </p>
                  <p className="step1_2_textSm">
                    Total de cuotas bonificadas:{" "}
                    {
                      infoGrupo.InfoGrupoProducto.CuotasBonificadas[0]
                        .TotalCuotasBonificadas
                    }
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
              <Button
                text="Atrás"
                back={true}
                next={false}
                click={() => changePage(1)}
              />
              <div className="buttonContainer_steps">
                <p className="mobileOnly">Paso 1.1 de 4</p>
                <Button text="Siguiente" click={() => changePage(3)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Step1_2;
