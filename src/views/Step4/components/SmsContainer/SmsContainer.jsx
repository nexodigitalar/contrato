/* Styles */
import "./SmsContainer.scss";

/* Components */
import SmsInput from "../SmsInput/SmsInput";
import PinInput from "../PinInput/PinInput";

/* Hooks */
import { useState } from "react";

const SmsContainer = () => {
  const [smsSent, setSmsSent] = useState(false);
  const [phone, setPhone] = useState({ validation: "", number: "" });

  return (
    <div className="smsContainer">
      {smsSent ? (
        <PinInput phone={phone} setSmsSent={setSmsSent} />
      ) : (
        <SmsInput setSmsSent={setSmsSent} setPhone={setPhone} phone={phone} />
      )}
    </div>
  );
};

export default SmsContainer;
