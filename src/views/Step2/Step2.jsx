/* Styles & Img */
import "./Step2.scss";
import userPhoto from "@/assets/img/info-user.png";
import userPhoto2 from "@/assets/img/info-user2.png";

/* Hooks */
import useScrollTop from "@/hooks/useScrollTop";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "@/store/pageSlice/pageSlice";
import { setUsers } from "@/store/userSlice/userSlice";
import { setStep2 } from "@/store/validationSlice/validationSlice";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";
import InputForm from "./components/InputForm";
import Button from "@/components/Button/Button";
import { useEffect } from "react";

const Step2 = ({ setImages, images }) => {
  const { simulador, plazo } = useSelector((state) => state.data);
  const [initialValues, setInitialValues] = useState(undefined);
  const [amountValidations, setAmountValidations] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

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

  return (
    <div className="step2">
      <div className="step2_container">
        <Header
          text="DATOS"
          bold="DEL TITULAR"
          logo={simulador}
          plazo={plazo}
        />
        <StepsContainer
          step={2}
          initialValues={initialValues}
          amountValidations={amountValidations}
        />

        <div className="step2_innerContainer">
          <div>
            <h3 className="step2_title">
              ¿<span className="color_text">Cuántos </span>titulares{" "}
              <span className="gray">son</span>?
            </h3>

            <InputForm
              initialValues={initialValues}
              setInitialValues={setInitialValues}
              amountValidations={amountValidations}
              setAmountValidations={setAmountValidations}
              setImages={setImages}
              images={images}
            />
          </div>
          <div className="step2_imgContainer">
            <img
              src={plazo == 200 ? userPhoto2 : userPhoto}
              className="step2_img"
            />
          </div>
        </div>

        {disabled && (
          <p className="step2_important">
            * Completá los campos obligatorios para continuar
          </p>
        )}

        <div className="step2_buttonContainer">
          <Button
            text="Siguiente"
            click={() => {
              dispatch(changePage(3)),
                useScrollTop(),
                dispatch(setUsers(initialValues)),
                dispatch(setStep2(amountValidations));
            }}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
