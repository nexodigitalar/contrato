/* Styles */
import "./StepsContainer.scss";

/* Components */
import Steps from "../Steps/Steps";

/* React Router */
import { useNavigate } from "react-router-dom";

const StepsContainer = ({ step }) => {
  const navigate = useNavigate();

  return (
    <div className="stepsContainer">
      <div className="stepsContainer_container">
        <Steps
          text="PRODUCTO"
          textBold="SELECCIONADO"
          number="1"
          active={step === 1 ? true : false}
          click={() => navigate("/")}
        />
        <Steps
          text="INGRESO"
          textBold="DATOS PERSONALES"
          number="2"
          active={step === 2 ? true : false}
          click={() => navigate("/datos-personales")}
        />
        <Steps
          text="DATOS"
          textBold="OCUPACIONALES"
          number="3"
          active={step === 3 ? true : false}
          click={() => navigate("/datos-ocupacionales")}
        />
        <Steps
          text="RESUMEN"
          textBold="DEL PLAN"
          number="4"
          active={step === 4 ? true : false}
          click={() => navigate("/resumen-plan")}
        />
      </div>
    </div>
  );
};

export default StepsContainer;
