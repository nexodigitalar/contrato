/* Styles & Img */
import "./Step3.scss";
import user from "@/assets/img/info-user.png";

/* React Router */
import { useNavigate } from "react-router-dom";

/* Hooks */
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "@/store/pageSlice/pageSlice";
import { useEffect, useState } from "react";
import { setStep3 } from "@/store/validationSlice/validationSlice";
import useScrollTop from "@/hooks/useScrollTop";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";
import InputForm from "./components/InputForm";
import Button from "@/components/Button/Button";
import PopUp from "./components/PopUp";

const Step3 = () => {
  const [amountValidations, setAmountValidations] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.user.usuarios);
  const { simulador } = useSelector((state) => state.data);

  useEffect(() => {
    validateButton();
  }, [amountValidations]);

  const validateButton = () => {
    let newArr = [];
    amountValidations.map((form) => {
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

  const handlePage4 = () => {
    dispatch(changePage(4));
    useScrollTop();
    dispatch(setStep3(amountValidations));
  };

  return (
    <>
      <div className="step3">
        <div className="step3_container">
          <Header text="DATOS" bold="OCUPACIONALES" logo={simulador} />
          <StepsContainer step={3} amountValidations={amountValidations} />

          <div className="step3_innerContainer">
            <div>
              {Array.from({ length: usuario.length }, (_, index) => (
                <InputForm
                  index={index}
                  key={index}
                  amountValidations={amountValidations}
                  setAmountValidations={setAmountValidations}
                />
              ))}
            </div>
            <div className="step3_imgContainer">
              <img className="step3_img" src={user} />
            </div>
          </div>

          <p className="step3_important">
            Importante: Verifique que todos los datos sean correctos, antes de
            seguir avanzando.
          </p>

          <div className="step3_buttonContainer">
            <Button
              text="Siguiente"
              click={() => setShowPopUp(true)}
              disabled={disabled}
            />
          </div>
        </div>
      </div>
      {showPopUp && (
        <PopUp setShowPopUp={setShowPopUp} handlePage4={handlePage4} />
      )}
    </>
  );
};

export default Step3;
