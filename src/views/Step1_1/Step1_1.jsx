/* Styles & Img */
import "./Step1_1.scss";
import capital from "@/assets/img/capital.png";
import cuota from "@/assets/img/cuota.png";
import totalCuotas from "@/assets/img/total-cuotas.png";
import cuotaEntre from "@/assets/img/cuota-entre.png";
import capitalEntre from "@/assets/img/capital-entre.png";
import adjudicacion from "@/assets/img/adjudicacion.png";
import indice from "@/assets/img/indice.png";

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

const Step1_1 = ({ changePage }) => {
  const { simulador, espera, final, normal, monto, plazo, cuotas, entrega } =
    useSelector((state) => state.data);

  return (
    <div className="step1">
      {simulador && (
        <div className="step1_container">
          <Header text="PRODUCTO" bold="SELECCIONADO" logo={simulador} />
          <StepsContainer step={1} />
          <h3 className="step1_title">
            <span className="green">Producto</span> seleccionado{" "}
            <span className="green">{text[simulador].step1_titleSelected}</span>
          </h3>

          {simulador != "Fecha Elegida" ? (
            <>
              <h3 className="step1_title ">
                <span className="green">Contrato</span> con modalidad{" "}
                <span className="green">{text[simulador].step1_title}</span>
              </h3>
              <p className="step1_text">
                {ReactHtmlParser(text[simulador].step1_text)}
              </p>

              {/* Sección 1 */}
              <section className="step1_imgContainer">
                <Cards
                  titleGreen="Capital"
                  title=""
                  titleBold=" elegido"
                  number={`$ ${useFormatNumber(monto)}`}
                  img={capital}
                />
                {simulador === "Diferencial Pesos Ajustables" ||
                simulador === "Diferencial Pesos Fijos" ||
                simulador === "Diferencial Dolares" ? (
                  <Cards
                    titleGreen="Cuota"
                    title=" para el"
                    titleBold=" capital elegido"
                    number={`<span class="step1_textCard">Espera</span> $${useFormatNumber(
                      espera
                    )}<br/> <span class="step1_textCard">Normal</span> $${useFormatNumber(
                      normal
                    )}<br/> <span class="step1_textCard">Final</span> $${useFormatNumber(
                      final
                    )}`}
                    img={cuota}
                  />
                ) : (
                  <Cards
                    titleGreen="Cuota"
                    title=" para el"
                    titleBold=" capital elegido"
                    number={`$ ${useFormatNumber(cuotas)}`}
                    img={cuota}
                  />
                )}
                <Cards
                  titleGreen="Total"
                  title=" de"
                  titleBold=" cuotas"
                  number={`${plazo} meses`}
                  img={totalCuotas}
                />
              </section>

              {/* Sección 2 */}
              {simulador != "Diferencial Pesos Ajustables" &&
                simulador != "Diferencial Pesos Fijos" &&
                simulador != "Diferencial Dolares" && (
                  <>
                    <h3 className="step1_title ">
                      <span className="green">Condiciones del contrato</span> en
                      modalidad{" "}
                      <span className="green">
                        {" "}
                        {text[simulador].step1_title}
                      </span>
                    </h3>
                    <section className="step1_imgContainer ">
                      <Cards
                        titleGreen="Cuota"
                        title=""
                        titleBold=" entre"
                        number={text[simulador].step1_cuo}
                        img={cuotaEntre}
                      />

                      <Cards
                        titleGreen={text[simulador].step1_lastCard_green}
                        title={text[simulador].step1_lastCard}
                        titleBold=""
                        number={text[simulador].step1_lastCard_value}
                        img={indice}
                      />

                      <Cards
                        titleGreen="Capital"
                        title=""
                        titleBold=" entre"
                        number={text[simulador].step1_cap}
                        img={capitalEntre}
                      />
                    </section>
                  </>
                )}

              {/* Sección 3 */}

              <>
                <h3 className="step1_title ">
                  <span className="green">Otras</span> condiciones
                </h3>
                <section className="step1_imgContainer">
                  <Cards
                    titleGreen="Adjudicación"
                    title=""
                    titleBold=""
                    number={text[simulador].step1_adj}
                    img={adjudicacion}
                  />
                  <Cards
                    titleGreen={text[simulador].step1_lastCard_green}
                    title={text[simulador].step1_lastCard}
                    titleBold=""
                    number={text[simulador].step1_lastCard_value}
                    img={indice}
                  />
                </section>
              </>

              <section className="step1_rightContainer">
                <h3 className="step1_title step1_right ">
                  <span className="green">En la próxima página</span> verás más
                  detalles
                </h3>
                <p className="step1_textSm">* Ver términos y condiciones</p>
                <Button text="Siguiente" click={() => changePage(2)} />
              </section>
            </>
          ) : (
            <section className="step1_imgContainer_fechaElegida">
              <Cards
                titleGreen="Capital"
                title=""
                titleBold=" elegido"
                number={`$ ${useFormatNumber(monto)}`}
                img={capital}
              />
              <Cards
                titleGreen="Fecha "
                title="de "
                titleBold="entrega"
                number={entrega}
                img={cuotaEntre}
              />
              <Cards
                titleGreen="Valor "
                title="de "
                titleBold="cuota"
                number={cuotas}
                img={cuota}
              />
              <Cards
                titleGreen="Total "
                title="de "
                titleBold="cuotas"
                number={text[simulador].step1_cuo}
                img={totalCuotas}
              />
              <Cards
                titleGreen={text[simulador].step1_lastCard_green}
                title={text[simulador].step1_lastCard}
                titleBold=""
                number={text[simulador].step1_lastCard_value}
                img={indice}
              />
            </section>
          )}
        </div>
      )}
    </div>
  );
};

export default Step1_1;
