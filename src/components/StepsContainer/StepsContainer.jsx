/* Styles */
import "./StepsContainer.scss";

/* Components */
import Steps from "../Steps/Steps";

/* Hooks */
import { changePageValidations } from "@/store/pageSlice/pageSlice";
import { useDispatch } from "react-redux";

const StepsContainer = ({ step }) => {
  const dispatch = useDispatch();

  return (
    <div className="stepsContainer">
      <div className="stepsContainer_container">
        <Steps
          text="PRODUCTO"
          textBold="SELECCIONADO"
          number="1"
          active={step === 1 ? true : false}
          click={() => dispatch(changePageValidations(1))}
        />
        <Steps
          text="INGRESO"
          textBold="DATOS PERSONALES"
          number="2"
          active={step === 2 ? true : false}
          click={() => dispatch(changePageValidations(2))}
        />
        <Steps
          text="DATOS"
          textBold="OCUPACIONALES"
          number="3"
          active={step === 3 ? true : false}
          click={() => dispatch(changePageValidations(3))}
        />
        <Steps
          text="RESUMEN"
          textBold="DEL PLAN"
          number="4"
          active={step === 4 ? true : false}
          click={() => dispatch(changePageValidations(4))}
        />
      </div>
    </div>
  );
};

export default StepsContainer;
