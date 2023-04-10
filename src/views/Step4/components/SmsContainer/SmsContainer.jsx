/* Styles */
import "./SmsContainer.scss";

/* Components */
import SmsInput from "../SmsInput/SmsInput";
import PinInput from "../PinInput/PinInput";

/* Hooks */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SmsContainer = () => {
  const [smsSent, setSmsSent] = useState(false);
  const [numberValidation, setNumberValidation] = useState(
    Math.floor(100000 + Math.random() * 900000)
  );
  const usuario = useSelector((state) => state.user.usuarios);
  const ids = useSelector((state) => state.crm.ids);
  const [phone, setPhone] = useState({
    validation: "",
    number: usuario[0].telefono,
  });

  /*   useEffect(() => {
    if (smsSent) {
      EnvioSMSContratoOnLine();
    }
  }, [smsSent]); */

  const EnvioSMSContratoOnLine = async () => {
    await fetch(
      "http://190.64.74.3:8234/rest/APIConsorcio/ActualizarClienteCRM",
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
          pMsjSMS: "Mensaje prueba",
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
      {smsSent ? (
        <PinInput
          phone={phone}
          setSmsSent={setSmsSent}
          numberValidation={numberValidation}
        />
      ) : (
        <SmsInput setSmsSent={setSmsSent} setPhone={setPhone} phone={phone} />
      )}
    </div>
  );
};

export default SmsContainer;
