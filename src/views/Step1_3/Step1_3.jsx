/* Styles & Img */
import "./Step1_3.scss";

/* Data JSON */
import text from "@/utils/text.json";
import ReactHtmlParser from "react-html-parser";

/* Hooks */
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "@/store/pageSlice/pageSlice";
import { setAccept } from "@/store/validationSlice/validationSlice";
import { useEffect, useState } from "react";
import useScrollTop from "@/hooks/useScrollTop";

/* Components */
import Header from "@/components/Header/Header";
import Switch from "@/components/Switch/Switch";
import Button from "@/components/Button/Button";
import CuotaMinMax from "./components/CuotaMinMax";

const Step1_3 = ({ goBack }) => {
  const { simulador, plazo } = useSelector((state) => state.data);
  const accept = useSelector((state) => state.validation.accept);
  const [switchCheck, setSwitchCheck] = useState();
  const [disabled, setDisabled] = useState(true);
  const [storage, setStorage] = useState(false);
  const [numValidations, setNumValidations] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    handleAmountChecks();
  }, []);

  useEffect(() => {
    validateButton();
  }, [switchCheck]);

  const handleAmountChecks = () => {
    let numValidate = 0;
    switch (simulador) {
      case "Pesos Ajustables":
      case "Pesos Fijos":
      case "Diferencial Pesos Fijos":
      case "Diferencial Pesos Ajustables":
        numValidate = 6;
        break;
      case "Dolares":
      case "Diferencial Dolares":
        numValidate = 5;
        break;
    }

    setNumValidations(numValidate);

    if (accept.length > 0) {
      setStorage(true);
      setSwitchCheck(accept);
    } else {
      setStorage(false);
      let arr = new Array(numValidate).fill("").map((_, i) => i + 1);
      let newArr = [];
      arr.forEach((n) => newArr.push(false));
      setSwitchCheck(newArr);
    }
  };

  const validateButton = () => {
    if (switchCheck) {
      let isFalse = switchCheck.some((bool) => bool === false);
      if (!isFalse) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  };

  const handleCheck = (value, i) => {
    const updatedAreas = [...switchCheck];
    updatedAreas[i] = value;
    setSwitchCheck(updatedAreas);
  };

  return (
    <div className="step1_3">
      <div className="step1_3_container">
        <Header text="USTED" bold="SELECCIONÓ" logo={simulador} plazo={plazo} />

        <section className="step1_3_innerContainer">
          <p className="step1_3_watermark">1</p>

          <section className="step1_3_infoContainer">
            <h3 className="step1_3_title">
              {ReactHtmlParser(text[simulador].step1_3_title1)}
            </h3>

            <div>
              {ReactHtmlParser(text[simulador].step1_3_text1)}
              <div className="step1_3_buttonInnercontainer">
                <a
                  href="https://consorcio.uy/preguntas-frecuentes/"
                  target="_blank"
                >
                  <Button text="Ampliar información" />
                </a>
                <div className="step1_3_switchInnercontainer">
                  <p className="step1_3_text text_mobile">Entendido</p>
                  <Switch
                    storage={storage}
                    click={(value) => handleCheck(value, 0)}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="step1_3_innerContainer">
          <p className="step1_3_watermark">2</p>

          <section className="step1_3_infoContainer">
            <h3 className="step1_3_title">
              {ReactHtmlParser(text[simulador].step1_3_title2)}
            </h3>

            <div>{ReactHtmlParser(text[simulador].step1_3_text2)}</div>
            <div className="step1_3_switchContainer">
              <p className="step1_3_text text_mobile">Entendido</p>
              <Switch
                storage={storage}
                click={(value) => handleCheck(value, 1)}
              />
            </div>
          </section>
        </section>

        <section className="step1_3_innerContainer">
          <p className="step1_3_watermark">3</p>

          <section className="step1_3_infoContainer">
            <h3 className="step1_3_title">
              {ReactHtmlParser(text[simulador].step1_3_title3)}
            </h3>

            <CuotaMinMax />
            <div className="step1_3_switchContainer">
              <p className="step1_3_text text_mobile">Entendido</p>
              <Switch
                storage={storage}
                click={(value) => handleCheck(value, 2)}
              />
            </div>
          </section>
        </section>

        {simulador != "Dolares" && simulador != "Diferencial Dolares" && (
          <section className="step1_3_innerContainer">
            <p className="step1_3_watermark">4</p>

            <section className="step1_3_infoContainer">
              <h3 className="step1_3_title">
                {ReactHtmlParser(text[simulador].step1_3_title4)}
              </h3>

              <div>{ReactHtmlParser(text[simulador].step1_3_text4)}</div>
              {simulador != "Pesos Fijos" ? (
                <div className="step1_3_buttonInnercontainer">
                  <a
                    href="https://consorcio.uy/preguntas-frecuentes/"
                    target="_blank"
                  >
                    <Button text="Más información" />
                  </a>

                  <div className="step1_3_switchInnercontainer">
                    <p className="step1_3_text text_mobile">Entendido</p>

                    <Switch
                      storage={storage}
                      click={(value) => handleCheck(value, 3)}
                    />
                  </div>
                </div>
              ) : (
                <div className="step1_3_switchContainer">
                  <p className="step1_3_text text_mobile">Entendido</p>

                  <Switch
                    storage={storage}
                    click={(value) => handleCheck(value, 3)}
                  />
                </div>
              )}
            </section>
          </section>
        )}

        <section className="step1_3_innerContainer">
          <p className="step1_3_watermark">
            {simulador === "Dolares" || simulador === "Diferencial Dolares"
              ? 4
              : 5}
          </p>

          <section className="step1_3_infoContainer">
            <h3 className="step1_3_title">
              {ReactHtmlParser(text[simulador].step1_3_title5)}
            </h3>

            <div>{ReactHtmlParser(text[simulador].step1_3_text5)}</div>

            <div className="step1_3_switchContainer">
              <p className="step1_3_text text_mobile">Entendido</p>

              {(simulador === "Dolares" ||
                simulador === "Diferencial Dolares") && (
                <Switch
                  storage={storage}
                  click={(value) => handleCheck(value, 3)}
                />
              )}
              {simulador != "Dolares" && simulador != "Diferencial Dolares" && (
                <Switch
                  storage={storage}
                  click={(value) => handleCheck(value, 4)}
                />
              )}
            </div>
          </section>
        </section>

        <section className="step1_3_innerContainer">
          <p className="step1_3_watermark">
            {simulador === "Dolares" || simulador === "Dolares" ? 5 : 6}
          </p>

          <section className="step1_3_infoContainer">
            <h3 className="step1_3_title">
              {ReactHtmlParser(text[simulador].step1_3_title6)}
            </h3>

            <div>{ReactHtmlParser(text[simulador].step1_3_text6)}</div>

            <div className="step1_3_switchContainer">
              <p className="step1_3_text text_mobile">Entendido</p>

              {(simulador === "Dolares" ||
                simulador === "Diferencial Dolares") && (
                <Switch
                  storage={storage}
                  click={(value) => handleCheck(value, 4)}
                />
              )}
              {simulador != "Dolares" && simulador != "Diferencial Dolares" && (
                <Switch
                  storage={storage}
                  click={(value) => handleCheck(value, 5)}
                />
              )}
            </div>
          </section>
        </section>

        <p className="step1_3_subtext">
          * Para continuar, debe confirmar con el botón entendido cada uno de
          los {numValidations} puntos.
        </p>

        <div className="step1_3_buttonContainer">
          <Button
            text="Atrás"
            back={true}
            next={false}
            click={() => goBack(2)}
          />
          <div className="buttonContainer_steps">
            <p className="mobileOnly">Paso 1.2 de 4</p>
            <Button
              text="Siguiente"
              click={() => {
                dispatch(setAccept(switchCheck)),
                  dispatch(changePage(2)),
                  useScrollTop();
              }}
              disabled={disabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1_3;
