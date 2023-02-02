/* Styles & Img */
import "./Step1.scss";
import capital from "@/assets/img/capital.png";
import cuota from "@/assets/img/cuota.png";
import totalCuotas from "@/assets/img/total-cuotas.png";
import cuotaEntre from "@/assets/img/cuota-entre.png";
import capitalEntre from "@/assets/img/capital-entre.png";
import adjudicacion from "@/assets/img/adjudicacion.png";
import indice from "@/assets/img/indice.png";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";
import Cards from "./components/Cards/Cards";
import Button from "../../components/Button/Button";

const Step1 = () => {
  return (
    <div className="step1">
      <div className="step1_container">
        <Header text="PRODUCTO" bold="SELECCIONADO" logo={cuotaLibre} />
        <StepsContainer />
        <h3 className="step1_title">
          <span className="step1_greenTitle">Producto</span> seleccionado{" "}
          <span className="step1_greenTitle">CUOTA LIBRE</span>
        </h3>
        <h3 className="step1_title">
          <span className="step1_greenTitle">Contrato</span> con modalidad{" "}
          <span className="step1_greenTitle">CUOTA LIBRE PESOS</span>
        </h3>
        <p className="step1_text">
          Tu <span className="step1_greenText">cuota promedio</span> determina
          tu capital a retirar. Podés pagar cualquier valor entre la cuota{" "}
          <span className="step1_greenText">mínima</span> y la{" "}
          <span className="step1_greenText">máxima</span>. Cuando sos
          favorecido, empezás a pagar la cuota promedio generada. Al hacer tus
          pagos, se te ofrecerá la cuota correspondiente a tu capital elegido,
          ajustado por <span className="step1_greenText">IPC</span>.
        </p>

        <section className="step1_imgContainer">
          <Cards
            titleGreen="Campo"
            title=""
            titleBold=" elegido"
            number="$1.000.000"
            img={capital}
          />
          <Cards
            titleGreen="Cuota"
            title=" para el"
            titleBold=" capital elegido"
            number="$8.574"
            img={cuota}
          />
          <Cards
            titleGreen="Total"
            title=" de"
            titleBold=" cuotas"
            number="100 meses"
            img={totalCuotas}
          />
        </section>

        <h3 className="step1_title">
          <span className="step1_greenTitle">Condiciones del contrato</span> en
          modalidad <span className="step1_greenTitle">CUOTA LIBRE PESOS</span>
        </h3>
        <section className="step1_imgContainer">
          <Cards
            titleGreen="Cuota"
            title=""
            titleBold=" entre"
            number="100 y 200"
            img={cuotaEntre}
          />
          <Cards
            titleGreen="Capital"
            title=""
            titleBold=" entre"
            number="$1.000.0000 y $10.000.000"
            img={capitalEntre}
          />
        </section>

        <h3 className="step1_title">
          <span className="step1_greenTitle">Otras</span> condiciones
          <br />
          $1.000.000
        </h3>
        <section className="step1_imgContainer">
          <Cards
            titleGreen="Adjudicación"
            title=""
            titleBold=""
            number="SORTEO o LICITACIÓN"
            img={adjudicacion}
          />
          <Cards
            titleGreen="Índice"
            title=" de reajuste
            capital y cuota"
            titleBold=""
            number="IPC"
            img={indice}
          />
        </section>

        <section className="step1_rightContainer">
          <h3 className="step1_title step1_right">
            <span className="step1_greenTitle">En la próxima página</span> verás
            más detalles
          </h3>
          <p className="step1_textSm">* Ver términos y condiciones</p>
          <Button text="Siguiente" click={() => null} />
        </section>
      </div>
    </div>
  );
};

export default Step1;
