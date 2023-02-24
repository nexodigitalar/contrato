/* Styles & Img */
import "./Step2.scss";
import userPhoto from "@/assets/img/info-user.png";

/* Hooks */
import useScrollTop from "@/hooks/useScrollTop";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "@/store/pageSlice/pageSlice";
import { setUsers } from "@/store/userSlice/userSlice";
import { setStep2 } from "@/store/validationSlice/validationSlice";
import { useNavigate } from "react-router-dom";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";
import InputForm from "./components/InputForm";
import Button from "@/components/Button/Button";
import { useEffect } from "react";

const Step2 = () => {
  const { simulador } = useSelector((state) => state.data);
  const [initialValues, setInitialValues] = useState(undefined);
  const [amountValidatios, setAmountValidations] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    validateButton();
  }, [amountValidatios]);

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
    if (!isFalse) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="step2">
      <div className="step2_container">
        <Header text="DATOS" bold="DEL TITULAR" logo={simulador} />
        <StepsContainer step={2} />

        <div className="step2_innerContainer">
          <div>
            <h3 className="step2_title">
              ¿<span className="green">Cuántos </span>titulares{" "}
              <span className="gray">son</span>?
            </h3>

            <InputForm
              initialValues={initialValues}
              setInitialValues={setInitialValues}
              amountValidatios={amountValidatios}
              setAmountValidations={setAmountValidations}
            />
          </div>
          <div className="step2_imgContainer">
            <img src={userPhoto} className="step2_img" />
          </div>
        </div>

        <p className="step2_important">* Campos obligatorios</p>

        <div className="step2_buttonContainer">
          <Button
            text="Siguiente"
            click={() => {
              dispatch(changePage(3)),
                useScrollTop(),
                dispatch(setUsers(initialValues)),
                dispatch(setStep2(amountValidatios));
            }}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
