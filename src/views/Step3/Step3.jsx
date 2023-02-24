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

const Step3 = () => {
  const [amountValidatios, setAmountValidations] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.user.usuarios);
  const savedValidations = useSelector((state) => state.validation.step3);
  const { simulador } = useSelector((state) => state.data);

  useEffect(() => {
    handleInitialValidations();
  }, []);

  useEffect(() => {
    validateButton();
  }, [amountValidatios]);

  const handleInitialValidations = () => {
    let values = {
      sexo: "",
      nacionalidad: "",
      email: "",
      pais: "",
      departamento: "",
      calle: "",
      puertaNumero: "",
      estadoCivil: "",
      residenteUruguayo: true,
      monedaIngreso: "",
      ingresosMensuales: "",
      empresaTrabaja: "",
      rubroEmpresa: "",
      actividadPrincipal: "",
      origenFondos: "",
      politicos: true,
    };
    console.log(usuario);

    if (amountValidatios.length === 0) {
      if (savedValidations.length != 0) {
        let reduxCopy = JSON.parse(JSON.stringify(savedValidations));
        setAmountValidations(reduxCopy);
      } else {
        let newArr = [];
        Array.from({ length: usuario.length }, (_, index) =>
          newArr.push(values)
        );
        setAmountValidations(newArr);
      }
    }
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
    if (!isFalse) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="step3">
      <div className="step3_container">
        <Header text="DATOS" bold="OCUPACIONALES" logo={simulador} />
        <StepsContainer step={3} />

        <div className="step3_innerContainer">
          <div>
            {Array.from({ length: usuario.length }, (_, index) => (
              <InputForm
                index={index}
                key={index}
                amountValidatios={amountValidatios}
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
            click={() => {
              dispatch(changePage(4)),
                useScrollTop(),
                dispatch(setStep3(amountValidatios));
            }}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
