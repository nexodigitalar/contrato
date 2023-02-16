/* Styles & Img */
import "./Step1_3.scss";

/* React Router */
import { useNavigate } from "react-router-dom";

/* Data JSON */
import text from "@/utils/text.json";
import ReactHtmlParser from "react-html-parser";

/* Hooks */
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

/* Components */
import Header from "@/components/Header/Header";
import Switch from "@/components/Switch/Switch";
import Button from "@/components/Button/Button";
import CuotaMinMax from "./components/CuotaMinMax";

const Step1_3 = () => {
  const { simulador } = useSelector((state) => state.data);
  const [switchCheck, setSwitchCheck] = useState();
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    handleAmountChecks();
  }, []);

  useEffect(() => {
    handleValidations();
  }, [switchCheck]);

  const handleAmountChecks = () => {
    let numValidations = 0;
    switch (simulador) {
      case "Pesos Ajustables":
      case "Pesos Fijos":
      case "Diferencial Pesos Fijos":
      case "Diferencial Pesos Ajustables":
        numValidations = 6;
        break;
      case "Dolares":
      case "Diferencial Dolares":
        numValidations = 5;
        break;
      case "Fecha Elegida":
        numValidations = 4;
        break;
    }

    let arr = new Array(numValidations).fill("").map((_, i) => i + 1);
    let newArr = [];
    arr.forEach((n) => newArr.push(false));
    setSwitchCheck(newArr);
  };

  const handleValidations = () => {
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
        <Header text="USTED" bold="SELECCIONÓ" logo={simulador} />

        <section className="step1_3_innerContainer">
          <p className="step1_3_watermark">1</p>

          <section className="step1_3_infoContainer">
            <div className="step1_3_nav">
              <h3 className="step1_3_title">
                {ReactHtmlParser(text[simulador].step1_3_title1)}
              </h3>
              <div className="step1_3_switchContainer">
                <p className="step1_3_text text_mobile">Entendido</p>
                <Switch click={(value) => handleCheck(value, 0)} />
              </div>
            </div>

            <div>
              {ReactHtmlParser(text[simulador].step1_3_text1)}
              {simulador != "Fecha Elegida" && (
                <Button text="Ampliar información" />
              )}
            </div>
          </section>
        </section>

        {simulador != "Fecha Elegida" && (
          <section className="step1_3_innerContainer">
            <p className="step1_3_watermark">2</p>

            <section className="step1_3_infoContainer">
              <div className="step1_3_nav">
                <h3 className="step1_3_title">
                  {ReactHtmlParser(text[simulador].step1_3_title2)}
                </h3>
                <div className="step1_3_switchContainer">
                  <p className="step1_3_text text_mobile">Entendido</p>
                  <Switch click={(value) => handleCheck(value, 1)} />
                </div>
              </div>

              <div>{ReactHtmlParser(text[simulador].step1_3_text2)}</div>
            </section>
          </section>
        )}

        {simulador != "Fecha Elegida" && (
          <section className="step1_3_innerContainer">
            <p className="step1_3_watermark">3</p>

            <section className="step1_3_infoContainer">
              <div className="step1_3_nav">
                <h3 className="step1_3_title">
                  {ReactHtmlParser(text[simulador].step1_3_title3)}
                </h3>
                <div className="step1_3_switchContainer">
                  <p className="step1_3_text text_mobile">Entendido</p>
                  <Switch click={(value) => handleCheck(value, 2)} />
                </div>
              </div>

              <CuotaMinMax />
            </section>
          </section>
        )}

        {simulador != "Dolares" && simulador != "Diferencial Dolares" && (
          <section className="step1_3_innerContainer">
            <p className="step1_3_watermark">
              {simulador === "Fecha Elegida" ? 2 : 4}
            </p>

            <section className="step1_3_infoContainer">
              <div className="step1_3_nav">
                <h3 className="step1_3_title">
                  {ReactHtmlParser(text[simulador].step1_3_title4)}
                </h3>
                <div className="step1_3_switchContainer">
                  <p className="step1_3_text text_mobile">Entendido</p>
                  <Switch click={(value) => handleCheck(value, 3)} />
                </div>
              </div>

              <div>{ReactHtmlParser(text[simulador].step1_3_text4)}</div>
              {simulador != "Pesos Fijos" && <Button text="Ver condiciones" />}
            </section>
          </section>
        )}

        <section className="step1_3_innerContainer">
          {simulador === "Fecha Elegida" ? (
            <p className="step1_3_watermark">3</p>
          ) : (
            <p className="step1_3_watermark">
              {simulador === "Dolares" || simulador === "Dolares" ? 4 : 5}
            </p>
          )}

          <section className="step1_3_infoContainer">
            <div className="step1_3_nav">
              <h3 className="step1_3_title">
                {ReactHtmlParser(text[simulador].step1_3_title5)}
              </h3>
              <div className="step1_3_switchContainer">
                <p className="step1_3_text text_mobile">Entendido</p>
                <Switch click={(value) => handleCheck(value, 4)} />
              </div>
            </div>

            <div>{ReactHtmlParser(text[simulador].step1_3_text5)}</div>
          </section>
        </section>

        <section className="step1_3_innerContainer">
          {simulador === "Fecha Elegida" ? (
            <p className="step1_3_watermark">4</p>
          ) : (
            <p className="step1_3_watermark">
              {simulador === "Dolares" || simulador === "Dolares" ? 5 : 6}
            </p>
          )}

          <section className="step1_3_infoContainer">
            <div className="step1_3_nav">
              <h3 className="step1_3_title">
                {ReactHtmlParser(text[simulador].step1_3_title6)}
              </h3>
              <div className="step1_3_switchContainer">
                <p className="step1_3_text text_mobile">Entendido</p>
                <Switch click={(value) => handleCheck(value, 5)} />
              </div>
            </div>

            <div>{ReactHtmlParser(text[simulador].step1_3_text6)}</div>
          </section>
        </section>

        <div className="step1_3_buttonContainer">
          <Button
            text="Siguiente"
            click={() => navigate("/datos-personales")}
            disabled={disabled}
          />
        </div>
        <p className="step1_3_subtext">
          * Debe aceptar todas las informaciones correspondientes para poder
          confirmar el contrato
        </p>
      </div>
    </div>
  );
};

export default Step1_3;
