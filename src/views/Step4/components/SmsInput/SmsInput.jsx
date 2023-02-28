/* Styles */
import "./SmsInput.scss";

/* Components */
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

const SmsInput = ({ setSmsSent, phone, setPhone }) => {
  const validatePhone = (e) => {
    let lengthValidation = e.length <= 12 && e.length >= 8;

    if (e === "" || e === "placeholder") {
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
    let validation = validatePhone(phone.number);
    if (validation) {
      setSmsSent(true);
    }
  };

  return (
    <div className="smsInput">
      <Input
        placeholder="Número de celular"
        name="telefono"
        value={phone.number}
        error={phone.validation}
        type="number"
        click={(e) => setPhone({ ...phone, number: e.target.value })}
      />
      <Button text="ENVIAR" type="secondary" click={() => submitPhone()} />
    </div>
  );
};

export default SmsInput;
