/* Styles & Img */
import "./Step2.scss";
import cuotaLibre from "@/assets/img/cuota-libre.png";
import user from "@/assets/img/info-user.png";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";
import SelectInput from "../../components/SelectInput/SelectInput";
import InputForm from "./components/InputForm";
import Button from "@/components/Button/Button";

const Step2 = () => {
  return (
    <div className="step2">
      <div className="step2_container">
        <Header text="PRODUCTO" bold="SELECCIONADO" logo={cuotaLibre} />
        <StepsContainer />

        <div className="step2_innerContainer">
          <div>
            <h3 className="step2_title">
              ¿<span className="green">Cuántos </span>titulares{" "}
              <span className="gray">son</span>?
            </h3>
            <SelectInput />

            <h3 className="step2_title">
              <span className="green">Datos </span>del{" "}
              <span className="gray">titular</span>
            </h3>
            <InputForm />
          </div>
          <img src={user} />
        </div>

        <div className="step2_buttonContainer">
          <Button text="Siguiente" />
        </div>
      </div>
    </div>
  );
};

export default Step2;
