/* Styles */
import "./SmsContainer.scss";

/* Components */
import SmsInput from "../SmsInput/SmsInput";
import PinInput from "../PinInput/PinInput";
import Timer from "../Timer/Timer";

/* Hooks */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SmsContainer = ({ setConfirmContract, validatePdf }) => {
  const [smsSent, setSmsSent] = useState(false);
  const [validated, setValidated] = useState(false);
  const usuario = useSelector((state) => state.user.usuarios);
  const [numberValidation, setNumberValidation] = useState(
    Math.floor(100000 + Math.random() * 900000)
  );
  const [phone, setPhone] = useState({
    validation: "",
    number: "+" + usuario[0].telefonoCod + " " + usuario[0].telefono,
  });
  const ids = useSelector((state) => state.crm.ids);

  useEffect(() => {
    let tel = usuario[0].telefono.toString();
    if (tel.charAt(0) == 0) tel = tel.slice(1, tel.length);
    setPhone({
      ...phone,
      number: "+" + usuario[0].telefonoCod + " " + parseInt(tel),
    });
  }, []);

  useEffect(() => {
    if (smsSent) {
      EnvioSMSContratoOnLine();
    }
  }, [smsSent]);

  /*  useEffect(() => {
    console.log("cod numero", numberValidation);
  }, [numberValidation]); */

  useEffect(() => {
    if (validated && validatePdf) {
      setConfirmContract(false);
    }
  }, [validated]);

  const EnvioSMSContratoOnLine = async () => {
    let tel = usuario[0].telefono.toString();
    if (tel.charAt(0) == 0) tel = tel.slice(1, tel.length);

    await fetch(`${import.meta.env.VITE_URL}/EnvioSMSContratoOnLine`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pUsuario: import.meta.env.VITE_USUARIO,
        pPassword: import.meta.env.VITE_PASSWORD,
        pVentaOLId: ids.ventaId,
        pTelMovil: usuario[0].telefonoCod + tel,
        pMsjSMS: "Tu PIN de validacion es: " + numberValidation,
      }),
    })
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
          <div className="smsInput">
            <p className="smsInput_number">Recibir Token por SMS</p>
            {smsSent ? (
              <PinInput
                numberValidation={numberValidation}
                setValidated={setValidated}
              />
            ) : (
              <SmsInput setSmsSent={setSmsSent} validatePdf={validatePdf} />
            )}
          </div>

          <div className="timerContainer">
            <p className="sms_text">
              Tu código será enviado al número {phone.number}
            </p>
            {smsSent && <Timer envioSms={() => EnvioSMSContratoOnLine()} />}
          </div>
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
