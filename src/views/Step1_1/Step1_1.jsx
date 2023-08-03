/* Styles & Img */
import "./Step1_1.scss";
import capital from "@/assets/img/capital.png";
import cuota from "@/assets/img/cuota.png";
import totalCuotas from "@/assets/img/total-cuotas.png";
import cuotaEntre from "@/assets/img/cuota-entre.png";
import capitalEntre from "@/assets/img/capital-entre.png";
import adjudicacion from "@/assets/img/adjudicacion.png";
import indice from "@/assets/img/indice.png";

import capital2 from "@/assets/img/capital2.png";
import cuota2 from "@/assets/img/cuota2.png";
import totalCuotas2 from "@/assets/img/total-cuotas2.png";
import cuotaEntre2 from "@/assets/img/cuota-entre2.png";
import capitalEntre2 from "@/assets/img/capital-entre2.png";
import adjudicacion2 from "@/assets/img/adjudicacion2.png";
import indice2 from "@/assets/img/indice2.png";

/* Data JSON */
import text from "@/utils/text.json";
import ReactHtmlParser from "react-html-parser";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";
import Cards from "./components/Cards/Cards";
import Button from "@/components/Button/Button";

/* Hooks */
import { useSelector } from "react-redux";
import useFormatNumber from "@/hooks/useFormatNumber";
import { useState, useEffect } from "react";

const Step1_1 = ({ changePage }) => {
  const {
    simulador,
    espera,
    final,
    normal,
    monto,
    plazo,
    cuotas,
    entrega,
    moneda,
  } = useSelector((state) => state.data);
  const [currency, setCurrency] = useState("$");
  const cuotasRango = useSelector((state) => state.crm.grupo);
  const infoGrupo = useSelector((state) => state.crm.grupo);

  useEffect(() => {
    if (moneda === "USD") {
      setCurrency("U$S");
    }
  });

  return (
    <div className="step1">
      {simulador && (
        <div className="step1_container">
          <Header
            text="PRODUCTO"
            bold="SELECCIONADO"
            logo={simulador}
            plazo={plazo}
          />
          <StepsContainer step={1} />
          <h3 className="step1_title">
            <span className="color_text">Producto</span> seleccionado{" "}
            <span className="color_text">
              {text[simulador].step1_titleSelected}
            </span>
          </h3>

          {simulador != "Fecha Elegida" ? (
            <>
              {/* Sección 1 */}
              <section className="step1_imgContainer">
                <Cards
                  titleGreen="Capital"
                  title=""
                  titleBold=" elegido"
                  number={`${currency} ${useFormatNumber(monto)}`}
                  img={plazo == 200 ? capital2 : capital}
                  plazo={plazo}
                />
                {simulador === "Diferencial Pesos Ajustables" ||
                simulador === "Diferencial Pesos Fijos" ||
                simulador === "Diferencial Dolares" ? (
                  <Cards
                    titleGreen="Cuota"
                    title=" para el"
                    titleBold=" capital elegido"
                    number={`<span class="step1_textCard">Espera</span> ${currency}${useFormatNumber(
                      espera
                    )}<br/> <span class="step1_textCard">Normal</span> ${currency}${useFormatNumber(
                      normal
                    )}<br/> <span class="step1_textCard">Final</span> ${currency}${useFormatNumber(
                      final
                    )}`}
                    img={plazo == 200 ? cuota2 : cuota}
                    plazo={plazo}
                  />
                ) : (
                  <Cards
                    titleGreen="Cuota"
                    title=" para el"
                    titleBold=" capital elegido"
                    number={`${currency} ${useFormatNumber(cuotas)}`}
                    img={plazo == 200 ? cuota2 : cuota}
                    plazo={plazo}
                  />
                )}
                <Cards
                  titleGreen="Total"
                  title=" de"
                  titleBold=" cuotas"
                  number={`${plazo} meses`}
                  img={plazo == 200 ? totalCuotas2 : totalCuotas}
                  plazo={plazo}
                />
              </section>

              {/* Sección 2 */}
              {simulador != "Diferencial Pesos Ajustables" &&
                simulador != "Diferencial Pesos Fijos" &&
                simulador != "Diferencial Dolares" && (
                  <>
                    <h3 className="step1_title ">
                      <span className="color_text">
                        Condiciones del contrato
                      </span>{" "}
                      en modalidad{" "}
                      <span className="color_text">
                        {" "}
                        {text[simulador].step1_title}
                      </span>
                    </h3>
                    <section className="step1_imgContainer ">
                      <Cards
                        titleGreen="Cuota"
                        title=""
                        titleBold=" entre"
                        number={`${currency} ${useFormatNumber(
                          cuotasRango.InfoGrupoProducto?.CuotasRangos[0]
                            .CuotaMinima
                        )}`}
                        number2={`${currency} ${useFormatNumber(
                          cuotasRango.InfoGrupoProducto?.CuotasRangos[0]
                            .CuotaMaxima
                        )}`}
                        img={plazo == 200 ? cuotaEntre2 : cuotaEntre}
                        plazo={plazo}
                      />

                      <Cards
                        titleGreen="Capital"
                        title=""
                        titleBold=" entre"
                        number={`${currency} ${useFormatNumber(
                          cuotasRango.InfoGrupoProducto?.CapitalesRangos[0]
                            .CapitalMinimo
                        )}`}
                        number2={`${currency} ${useFormatNumber(
                          cuotasRango.InfoGrupoProducto?.CapitalesRangos[0]
                            .CapitalMaximo
                        )}`}
                        img={plazo == 200 ? capitalEntre2 : capitalEntre}
                        plazo={plazo}
                      />
                    </section>
                  </>
                )}

              {/* Sección 3 */}

              <>
                <h3 className="step1_title ">
                  <span className="color_text">Otras</span> condiciones
                </h3>
                <section className="step1_imgContainer">
                  <Cards
                    titleGreen="Adjudicación"
                    title=""
                    titleBold=""
                    number={text[simulador].step1_adj}
                    img={plazo == 200 ? adjudicacion2 : adjudicacion}
                    plazo={plazo}
                  />
                  <Cards
                    titleGreen={text[simulador].step1_lastCard_green}
                    title={text[simulador].step1_lastCard}
                    titleBold=""
                    number={text[simulador].step1_lastCard_value}
                    img={plazo == 200 ? indice2 : indice}
                    plazo={plazo}
                  />
                </section>
              </>

              {infoGrupo.InfoGrupoProducto.CuotasBonificadas.length != 0 && (
                <>
                  <h3 className="step1_2_title step1_2_detail">
                    Detalle <span className="color_text">cuotas</span>{" "}
                    <span className="gray">bonificadas</span>
                  </h3>
                  <p className="step1_2_text">
                    Tipo de Bonificación:{" "}
                    {infoGrupo.InfoGrupoProducto.BonificacionTipo}
                  </p>
                  <p className="step1_2_text">
                    Bonificación Nombre:{" "}
                    {infoGrupo.InfoGrupoProducto.BonificacionNombre}
                  </p>
                  <p className="step1_2_text">
                    Cuotas bonificadas:{" "}
                    {infoGrupo.InfoGrupoProducto.CuotasBonificadas}
                  </p>
                  <p className="step1_2_text">
                    Total de cuotas bonificadas:{" "}
                    {infoGrupo.InfoGrupoProducto.TotalCuotasBonificadas}
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              <section className="step1_imgContainer_fechaElegida">
                <Cards
                  titleGreen="Capital"
                  title=""
                  titleBold=" elegido"
                  number={`${currency} ${useFormatNumber(monto)}`}
                  img={plazo == 200 ? capital2 : capital}
                  plazo={plazo}
                />
                <Cards
                  titleGreen="Fecha "
                  title="de "
                  titleBold="entrega"
                  number={entrega}
                  img={plazo == 200 ? cuotaEntre2 : cuotaEntre}
                  plazo={plazo}
                />
                <Cards
                  titleGreen="Valor "
                  title="de "
                  titleBold="cuota"
                  number={`${currency} ${useFormatNumber(cuotas)}`}
                  img={plazo == 200 ? cuota2 : cuota}
                  plazo={plazo}
                />
                <Cards
                  titleGreen="Total "
                  title="de "
                  titleBold="cuotas"
                  number={text[simulador].step1_cuo}
                  img={plazo == 200 ? totalCuotas2 : totalCuotas}
                  plazo={plazo}
                />
                <Cards
                  titleGreen={text[simulador].step1_lastCard_green}
                  title={text[simulador].step1_lastCard}
                  titleBold=""
                  number={text[simulador].step1_lastCard_value}
                  img={plazo == 200 ? indice2 : indice}
                  plazo={plazo}
                />
              </section>
            </>
          )}
          <section className="step1_rightContainer">
            <h3 className="step1_title step1_right ">
              <span className="color_text">En la próxima página</span> verás más
              detalles
            </h3>
            <div className="buttonContainer_steps">
              <p className="mobileOnly">Paso 1 de 4</p>
              <Button text="Siguiente" click={() => changePage(2)} />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Step1_1;
