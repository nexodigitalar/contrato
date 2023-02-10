/* Styles & Img */
import "./Step3.scss";
import cuotaLibre from "@/assets/img/cuota-libre.png";
import user from "@/assets/img/info-user.png";

/* React Router */
import { useNavigate } from "react-router-dom";

/* Hooks */
import { useSelector } from "react-redux";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";
import InputForm from "./components/InputForm";
import Button from "@/components/Button/Button";

/* Data JSON */
import { text } from "@/utils/text.js";

const Step3 = () => {
  const navigate = useNavigate();
  const { simulador } = useSelector((state) => state.data);

  return (
    <div className="step3">
      <div className="step3_container">
        <Header
          text="DATOS"
          bold="OCUPACIONALES"
          logo={text[simulador].step1_img}
        />
        <StepsContainer step={3} />

        <div className="step3_innerContainer">
          <InputForm />
          <div className="step3_imgContainer">
            <img className="step3_img" src={user} />
          </div>
        </div>

        <label className="step3_label">
          <input type="checkbox" id="cbox1" value="first_checkbox" /> Marcar la
          opción en caso de que usted haya desempeñado o desempeña, o parientes
          suyos dentro del primer grado de consanguinidad, funciones públicas o
          cargos políticos.
        </label>

        <p className="step3_important">
          Importante: Verifique que todos los datos sean correctos, antes de
          seguir avanzando.
        </p>

        <div className="step3_buttonContainer">
          <Button text="Siguiente" click={() => navigate("/resumen-plan")} />
        </div>
      </div>
    </div>
  );
};

export default Step3;
