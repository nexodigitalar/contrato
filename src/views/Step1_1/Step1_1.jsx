/* Styles & Img */
import "./Step1_1.scss";
import cuotaLibre from "@/assets/img/cuota-libre.png";
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
import Button from "@/components/Button/Button";

const Step1_1 = ({ changePage }) => {
  return (
    <div className="step1">
      <div className="step1_container">
        <Header text="PRODUCTO" bold="SELECCIONADO" logo={cuotaLibre} />
        <StepsContainer step={1} />
        <h3 className="step1_title">
          <span className="green">Producto</span> seleccionado{" "}
          <span className="green">CUOTA LIBRE</span>
        </h3>
        <h3 className="step1_title">
          <span className="green">Contrato</span> con modalidad{" "}
          <span className="green">CUOTA LIBRE PESOS</span>
        </h3>
        <p className="step1_text">
          Tu <span className="green">cuota promedio</span> determina tu capital
          a retirar. Podés pagar cualquier valor entre la cuota{" "}
          <span className="green">mínima</span> y la{" "}
          <span className="green">máxima</span>. Cuando sos favorecido, empezás
          a pagar la cuota promedio generada. Al hacer tus pagos, se te ofrecerá
          la cuota correspondiente a tu capital elegido, ajustado por{" "}
          <span className="green">IPC</span>.
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
          <span className="green">Condiciones del contrato</span> en modalidad{" "}
          <span className="green">CUOTA LIBRE PESOS</span>
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
          <span className="green">Otras</span> condiciones
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
            <span className="green">En la próxima página</span> verás más
            detalles
          </h3>
          <p className="step1_textSm">* Ver términos y condiciones</p>
          <Button text="Siguiente" click={() => changePage(2)} />
        </section>
      </div>
    </div>
  );
};

export default Step1_1;
