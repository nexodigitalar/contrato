/* Styles */
import "./StepsContainer.scss";

/* Components */
import Steps from "../Steps/Steps";

/* Hooks */
import { changePageValidations } from "@/store/pageSlice/pageSlice";
import { useDispatch } from "react-redux";
import { setUsers } from "@/store/userSlice/userSlice";
import { setStep2, setStep3 } from "@/store/validationSlice/validationSlice";
import { useState } from "react";

const StepsContainer = ({ step, initialValues, amountValidatios }) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);

  const goToStep2 = () => {
    if (step === 3) {
      dispatch(setStep3(amountValidatios));
    }
    dispatch(changePageValidations(2));
  };

  const goToStep3 = () => {
    if (step === 2) {
      dispatch(setUsers(initialValues));
      dispatch(setStep2(amountValidatios));
    }
    if (amountValidatios) validateButton();
    if (disabled) dispatch(changePageValidations(3));
  };

  const goToStep4 = () => {
    if (step === 3) {
      dispatch(setStep3(amountValidatios));
    }
    if (amountValidatios) validateButton();
    if (disabled) dispatch(changePageValidations(4));
  };

  const validateButton = () => {
    let newArr = [];
    amountValidatios.map((form) => {
      for (let key in form) {
        if (form[key] === false || form[key] === "") {
          newArr.push(false);
        }
      }
    });
    let isFalse = newArr.some((bool) => bool === false);
    if (isFalse) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
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
          click={() => goToStep2()}
        />
        <Steps
          text="DATOS"
          textBold="OCUPACIONALES"
          number="3"
          active={step === 3 ? true : false}
          click={() => goToStep3()}
        />
        <Steps
          text="RESUMEN"
          textBold="DEL PLAN"
          number="4"
          active={step === 4 ? true : false}
          click={() => goToStep4()}
        />
      </div>
    </div>
  );
};

export default StepsContainer;
