/* Styles */
import "./StepsContainer.scss";

/* Components */
import Steps from "../Steps/Steps";

/* Hooks */
import { changePageValidations } from "@/store/pageSlice/pageSlice";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "@/store/userSlice/userSlice";
import { setStep2, setStep3 } from "@/store/validationSlice/validationSlice";
import { useState } from "react";
import { setLastPage } from "@/store/pageSlice/pageSlice";

const StepsContainer = ({ step, initialValues, amountValidations }) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const validationStep2 = useSelector((state) => state.validation.step2);
  const validationStep3 = useSelector((state) => state.validation.step3);
  const page = useSelector((state) => state.page.lastPage);

  const goToStep1 = () => {
    if (step === 2) {
      dispatch(setUsers(initialValues));
      dispatch(setStep2(amountValidations));
    } else if (step === 3) {
      dispatch(setStep3(amountValidations));
    }
    dispatch(changePageValidations(1));
  };

  const goToStep2 = () => {
    if (step === 3) {
      dispatch(setStep3(amountValidations));
    }
    dispatch(changePageValidations(2));
  };

  const goToStep3 = () => {
    if (step === 2) {
      dispatch(setUsers(initialValues));
      dispatch(setStep2(amountValidations));
      validateButton(3);
    } else if (step === 1) {
      validateButton(3);
    } else {
      dispatch(changePageValidations(3));
    }
  };

  const goToStep4 = () => {
    if (step === 3) {
      dispatch(setStep3(amountValidations));
      validateButton(4);
    } else if (step === 2) {
      dispatch(setUsers(initialValues));
      dispatch(setStep2(amountValidations));
      validateButton(4);
    } else if (step === 1) {
      validateButton(4);
    } else {
      dispatch(changePageValidations(4));
      dispatch(setLastPage());
    }
  };

  const validateButton = (number) => {
    let newArr = [];
    amountValidations?.map((form) => {
      for (let key in form) {
        if (form[key] === false || form[key] === "") {
          newArr.push(false);
        }
      }
    });

    if (page) {
      if (number === 3) {
        validationStep2.map((form) => {
          for (let key in form) {
            if (form[key] === false || form[key] === "") {
              newArr.push(false);
            }
          }
        });
      } else {
        validationStep2.map((form) => {
          for (let key in form) {
            if (form[key] === false || form[key] === "") {
              newArr.push(false);
            }
          }
        });
        validationStep3.map((form) => {
          for (let key in form) {
            if (form[key] === false || form[key] === "") {
              newArr.push(false);
            }
          }
        });
      }
    }

    let isFalse = newArr.some((bool) => bool === false);
    if (isFalse) {
      setDisabled(false);
    } else {
      setDisabled(true);
      if (number === 4) dispatch(setLastPage());
      dispatch(changePageValidations(number));
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
          click={() => goToStep1()}
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
