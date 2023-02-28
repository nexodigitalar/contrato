/* Styles */
import "./PinInput.scss";

/* Components */
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Timer from "../Timer/Timer";

const PinInput = ({ phone, setSmsSent }) => {
  return (
    <div className="pinInput_container">
      <div className="pinInput_titleContainer">
        <h3 className="pinInput_title">
          Tu PIN fue enviado al número{" "}
          <span className="green">{phone.number}</span>
        </h3>
        <p className="pinInput_subtitle" onClick={() => setSmsSent(false)}>
          Cambiar número
        </p>
      </div>

      <div className="pinInput">
        <Input placeholder="PIN de validación" />
        <Button text="VALIDAR" type="secondary" />
      </div>

      <Timer countdown={new Date(new Date().getTime() + 31000)} />
    </div>
  );
};

export default PinInput;
