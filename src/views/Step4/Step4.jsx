/* Styles & Img */
import "./Step4.scss";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

/* Hooks */
import { useSelector } from "react-redux";
import useFormatNumber from "@/hooks/useFormatNumber";
import { useNavigate } from "react-router-dom";
import useScrollTop from "@/hooks/useScrollTop";

const Step4 = () => {
  const navigate = useNavigate();
  const { simulador, cuotas, plazo, monto } = useSelector(
    (state) => state.data
  );
  const usuarios = useSelector((state) => state.user.usuarios);

  return (
    <div className="step4">
      <div className="step4_container">
        <Header text="RESUMEN" bold="DEL PLAN" logo={simulador} />
        <StepsContainer step={4} />

        <div className="step4_innerContainer">
          <section>
            <h3 className="step4_title">
              <span className="green">Resumen </span>del{" "}
              <span className="gray">plan</span>
            </h3>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="green">Monto</span> a{" "}
                <span className="gray">
                  recibir - $ {useFormatNumber(monto)}
                </span>
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
                <span className="gray">
                  cuota - $ {useFormatNumber(cuotas)}
                </span>
              </p>
            </div>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="green">Total</span> de{" "}
                <span className="gray">cuotas - {plazo}</span>
              </p>
            </div>
            {simulador === "Pesos Ajustables" ||
              simulador === "Diferencial Pesos Ajustables" ||
              (simulador === "Fecha Elegida" && (
                <div className="step4_descriptionContainer">
                  <FontAwesomeIcon
                    className="step4_icon"
                    icon={faChevronRight}
                  />
                  <p className="step4_text">
                    <span className="green">Índice</span> de{" "}
                    <span className="gray">reajuste - IPC</span>
                  </p>
                </div>
              ))}
          </section>
          <section className="step4_col2">
            <h3 className="step4_title">
              <span className="green">Resumen </span>del{" "}
              <span className="gray">grupo</span>
            </h3>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="green">Número</span> del{" "}
                <span className="gray">grupo - 550</span>
              </p>
            </div>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="green">Cantidad</span> de{" "}
                <span className="gray">integrantes - 400 personas</span>
              </p>
            </div>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="green">Plazo</span>{" "}
                <span className="gray">- 200 meses</span>
              </p>
            </div>
          </section>
        </div>

        <h3 className="step4_title">
          <span className="green">Validación </span>del{" "}
          <span className="gray">celular</span>
        </h3>
        <div className="step4_validationContainer">
          <div className="step4_validation_innerContainer">
            <Input placeholder="Número de celular" />
            <Button text="ENVIAR" type="secondary" />
          </div>
          <div className="step4_validation_innerContainer">
            <Input placeholder="PIN de validación" />
            <Button text="VALIDAR" type="secondary" />
          </div>
        </div>
        <p className="step4_error">
          * La validación del celular es una acción obligatoria antes de
          realizar la confirmación del contrato adquirido
        </p>

        <h3 className="step4_title">
          <span className="green">Observaciones </span>del{" "}
          <span className="gray">contrato</span>
        </h3>
        <p className="step4_finalText">
          Acá van todas las observaciones de las condiciones particularesAcá van
          todas las observaciones de las condiciones particularesAcá van todas
          las observaciones de las condiciones particularesAcá van todas las
          observaciones de las condiciones particularesAcá van todas las
          observaciones de las condiciones particularesAcá van todas las
          observaciones de las condiciones particularesAcá van todas las
          observaciones de las condiciones particularesAcá van todas las
          observaciones de las condiciones particularesAcá van todas las
          observaciones de las condiciones particularesAcá van todas las
          observaciones de las condiciones particularesAcá van todas las
          observaciones de las condiciones particularesAcá van todas las
          observaciones de las condiciones particulares
        </p>

        <div className="step4_buttonContainer">
          <Button
            text="Mostrar error de contrato"
            click={() => navigate("/error")}
          />
          <Button text="Confirmar contrato" click={() => navigate("/valid")} />
        </div>
      </div>
    </div>
  );
};

export default Step4;
