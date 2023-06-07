/* Styles */
import "./SmsContainer.scss";

/* Components */
import SmsInput from "../SmsInput/SmsInput";
import PinInput from "../PinInput/PinInput";

/* Hooks */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SmsContainer = ({ setConfirmContract }) => {
  const [smsSent, setSmsSent] = useState(false);
  const [validated, setValidated] = useState(false);
  const usuario = useSelector((state) => state.user.usuarios);
  const [numberValidation, setNumberValidation] = useState(
    Math.floor(100000 + Math.random() * 900000)
  );
  const [phone, setPhone] = useState({
    validation: "",
    number: usuario[0].telefono,
  });
  const ids = useSelector((state) => state.crm.ids);

  useEffect(() => {
    if (smsSent) {
      EnvioSMSContratoOnLine();
    }
  }, [smsSent]);

  useEffect(() => {
    if (validated) {
      setConfirmContract(false);
    }
  }, [validated]);

  const EnvioSMSContratoOnLine = async () => {
    await fetch(
      "http://190.64.74.3:8234/rest/APIConsorcio/EnvioSMSContratoOnLine",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pUsuario: "APIConsorcioWeb",
          pPassword: "9u7y5.3C1o8n6s4o2r0c3i5o7.9u2y4",
          pVentaOLId: ids.ventaId,
          pTelMovil: usuario[0].telefono,
          pMsjSMS: "Tu PIN de confirmación es: " + numberValidation,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="smsContainer">
      {validated ? (
        <p className="validated">
          Tu celular fue validado{" "}
          <span className="color_text">correctamente</span>
        </p>
      ) : (
        <>
          {smsSent ? (
            <PinInput
              phone={phone}
              setSmsSent={setSmsSent}
              numberValidation={numberValidation}
              envioSms={() => EnvioSMSContratoOnLine()}
              setValidated={setValidated}
            />
          ) : (
            <SmsInput
              setSmsSent={setSmsSent}
              setPhone={setPhone}
              phone={phone}
            />
          )}
          <p className="sms_warning">
            * La validación del celular es una acción obligatoria antes de
            realizar la confirmación del contrato adquirido
          </p>
        </>
      )}
    </div>
  );
};

export default SmsContainer;
