/* Styles */
import "./PinInput.scss";

/* Components */
import Input from "@/components/Input/Input";

/* Hooks */
import { useState } from "react";

const PinInput = ({ numberValidation, setValidated }) => {
  const [pinTyped, setPinTyped] = useState();
  const [error, setError] = useState(true);

  const validatePin = (e) => {
    setPinTyped(e);
    setError(true);
    if (e.length == 6) {
      setTimeout(() => {
        if (numberValidation == e) {
          setValidated(true);
          setError(true);
        } else {
          setError(false);
        }
      }, 300);
    } else {
      setTimeout(() => {
        if (numberValidation == e) {
          setValidated(true);
          setError(true);
        } else {
          setError(false);
        }
      }, 2000);
    }
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
