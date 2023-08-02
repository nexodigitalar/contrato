/* Styles */
import "./SmsInput.scss";

/* Components */
import Button from "@/components/Button/Button";

import { useState, useEffect } from "react";

const SmsInput = ({ setSmsSent, validatePdf }) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(validatePdf.includes(false));
  }, [validatePdf]);

  return (
    <div className="smsinput_button">
      <Button
        text="Enviar"
        next={false}
        disabled={disabled}
        click={() => setSmsSent(true)}
      />
    </div>
  );
};

export default SmsInput;
