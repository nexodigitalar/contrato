/* Styles */
import "./SmsInput.scss";

/* Components */
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

const SmsInput = ({ setSmsSent, phone, setPhone }) => {
  const validatePhone = () => {
    let lengthValidation =
      phone.number.length <= 12 && phone.number.length >= 8;
    if (phone.number === "" || phone.number === "placeholder") {
      setPhone({ ...phone, validation: false });
      return false;
    } else {
      if (lengthValidation) {
        setPhone({ ...phone, validation: true });
        return true;
      } else {
        setPhone({ ...phone, validation: false });
        return false;
      }
    }
  };

  const submitPhone = () => {
    if (validatePhone()) {
      setSmsSent(true);
    }
  };

  return (
    <div className="smsInput">
      {/* <Input
        placeholder="Número de celular"
        name="telefono"
        value={phone.number}
        error={phone.validation}
        type="number"
        click={(e) => setPhone({ ...phone, number: e.target.value })}
        disabled={true}
      /> */}
      <p className="smsInput_number">{phone.number}</p>
      <Button text="ENVIAR" type="secondary" click={() => submitPhone()} />
    </div>
  );
};

export default SmsInput;
