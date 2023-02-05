/* Styles & Img */
import "./Step4.scss";
import cuotaLibre from "@/assets/img/cuota-libre.png";
import check from "@/assets/img/check.png";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";
import Button from "@/components/Button/Button";

const Step4 = () => {
  return (
    <div className="step4">
      <div className="step4_container">
        <Header text="RESUMEN" bold="DEL PLAN" logo={cuotaLibre} />
        <StepsContainer step={4} />

        <h3 className="step4_title">
          <span className="green">Resumen </span>del{" "}
          <span className="gray">plan</span>
        </h3>

        <div className="step4_innerContainer">
          <section>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="green">Monto</span> a{" "}
                <span className="gray">recibir - $ 1.000.000</span>
              </p>
            </div>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="green">Fecha</span> de{" "}
                <span className="gray">entrega - 17/02/2023</span>
              </p>
            </div>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="green">Valor</span> de{" "}
                <span className="gray">cuota - $ 8.574</span>
              </p>
            </div>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="green">Total</span> de{" "}
                <span className="gray">cuota - 100</span>
              </p>
            </div>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="green">Índice</span> de{" "}
                <span className="gray">reajuste - IPC</span>
              </p>
            </div>
          </section>
          <div className="step4_imgContainer">
            <img className="step4_img" src={check} />
          </div>
        </div>

        <div className="step4_buttonContainer">
          <Button text="Confirmar contrato" />
        </div>

        <h3 className="step4_title">
          Tus <span className="green">cuotas </span>
          <span className="gray">benificadas</span>
        </h3>
        <p className="step4_finalText">
          Texto suministrado por el sistemaTexto suministrado por el
          sistemaTexto suministrado por el sistemaTexto suministrado por el
          sistemaTexto suministrado por el sistemaTexto suministrado por el
          sistemaTexto suministrado por el sistemaTexto suministrado por el
          sistemaTexto suministrado por el sistemaTexto suministrado por el
          sistemaTexto suministrado por el sistemaTexto suministrado por el
          sistemaTexto suministrado por el sistemaTexto suministrado por el
          sistemaTexto suministrado por el sistema
        </p>
      </div>
    </div>
  );
};

export default Step4;
