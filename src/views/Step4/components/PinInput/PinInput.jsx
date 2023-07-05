/* Styles */
import "./PinInput.scss";

/* Components */
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Timer from "../Timer/Timer";

/* Hooks */
import { useState, useEffect } from "react";

const PinInput = ({
  phone,
  setSmsSent,
  numberValidation,
  envioSms,
  setValidated,
}) => {
  const [pinTyped, setPinTyped] = useState();
  const [error, setError] = useState(true);

  useEffect(() => {
    console.log("Número para validar:", numberValidation);
  }, [numberValidation]);

  const validatePin = () => {
    if (numberValidation == pinTyped) {
      setValidated(true);
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className="pinInput_container">
      <div className="pinInput_titleContainer">
        <h3 className="pinInput_title">
          Tu PIN fue enviado al número{" "}
          <span className="color_text">{phone.number}</span>
        </h3>
        {/*  <p className="pinInput_subtitle" onClick={() => setSmsSent(false)}>
          Cambiar número
        </p> */}
      </div>

      <div className="pinInput">
        <Input
          placeholder="PIN de validación"
          name="pin"
          value={pinTyped || ""}
          type="number"
          click={(e) => setPinTyped(e.target.value)}
          error={error}
        />
        <Button text="VALIDAR" type="secondary" click={() => validatePin()} />
      </div>

      <Timer
        countdown={new Date(new Date().getTime() + 31000)}
        envioSms={envioSms}
      />
    </div>
  );
};

export default PinInput;
