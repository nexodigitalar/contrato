/* Styles */
import "./SmsInput.scss";

/* Components */
import Button from "@/components/Button/Button";

import { useState, useEffect } from "react";

const SmsInput = ({ setSending, sending, validatePdf }) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(validatePdf.includes(false));
  }, [validatePdf]);

  return (
    <div className="smsinput_button">
      <Button
        text={
          sending ? (
            <p className="loaderContainer">
              <span className="loader"></span>
            </p>
          ) : (
            "Enviar"
          )
        }
        next={false}
        disabled={disabled}
        click={() => setSending(true)}
      />
    </div>
  );
};

export default SmsInput;
