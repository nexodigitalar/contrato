/* Styles */
import "./PinInput.scss";

/* Components */
import Input from "@/components/Input/Input";

/* Hooks */
import { useState, useEffect } from "react";

const PinInput = ({ numberValidation, setValidated }) => {
  const [pinTyped, setPinTyped] = useState();
  const [error, setError] = useState(true);

  useEffect(() => {
    console.log("Número para validar:", numberValidation);
  }, [numberValidation]);

  const validatePin = (e) => {
    setPinTyped(e);
    setError(true);
    setTimeout(() => {
      if (numberValidation == e) {
        setValidated(true);
        setError(true);
      } else {
        setError(false);
      }
    }, 2000);
  };

  return (
    <div className="pinInput_container">
      <Input
        placeholder="PIN de validación"
        name="pin"
        value={pinTyped || ""}
        type="number"
        click={(e) => validatePin(e.target.value)}
        error={error}
      />
    </div>
  );
};

export default PinInput;
