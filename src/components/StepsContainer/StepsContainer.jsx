/* Styles */
import "./StepsContainer.scss";

/* Components */
import Steps from "../Steps/Steps";

/* Hooks */
import { changePageValidations } from "@/store/pageSlice/pageSlice";
import { useDispatch } from "react-redux";
import { setUsers } from "@/store/userSlice/userSlice";
import { setStep2, setStep3 } from "@/store/validationSlice/validationSlice";

const StepsContainer = ({ step, initialValues, amountValidatios }) => {
  const dispatch = useDispatch();

  const handleStep3 = () => {
    if (step === 2) {
      dispatch(setUsers(initialValues));
      dispatch(setStep2(amountValidatios));
    }
    dispatch(changePageValidations(3));
  };

  const handleStep4 = () => {
    if (step === 3) {
      dispatch(setStep3(amountValidatios));
    }
    dispatch(changePageValidations(4));
  };

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
          click={() => handleStep3()}
        />
        <Steps
          text="RESUMEN"
          textBold="DEL PLAN"
          number="4"
          active={step === 4 ? true : false}
          click={() => handleStep4()}
        />
      </div>
    </div>
  );
};

export default StepsContainer;
