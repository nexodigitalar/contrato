/* Styles & Img */
import "./Step2.scss";
import cuotaLibre from "@/assets/img/cuota-libre.png";
import userPhoto from "@/assets/img/info-user.png";

/* Hooks */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";
import SelectInput from "../../components/SelectInput/SelectInput";
import InputForm from "./components/InputForm";
import Button from "@/components/Button/Button";

const Step2 = () => {
  const [user, setUser] = useState(1);
  const { simulador } = useSelector((state) => state.data);
  const navigate = useNavigate();

  useEffect(() => {}, [user]);

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
            <div className="inputForm_div">
              <SelectInput click={(e) => setUser(e.target.value)} />
            </div>

            {Array.from({ length: user }, (_, index) => (
              <div key={index}>
                <h3 className="step2_title">
                  <span className="green">Datos </span>del{" "}
                  <span className="gray">titular</span>
                </h3>
                <InputForm index={index} />
              </div>
            ))}
          </div>
          <div className="step2_imgContainer">
            <img src={userPhoto} className="step2_img" />
          </div>
        </div>

        <div className="step2_buttonContainer">
          <Button
            text="Siguiente"
            click={() => navigate("/datos-ocupacionales")}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
