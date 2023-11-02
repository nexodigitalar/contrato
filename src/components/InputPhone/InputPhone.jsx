import "./InputPhone.scss";
import { useEffect, useState } from "react";

const InputPhone = ({
  placeholder,
  click,
  name,
  value,
  error,
  type,
  message,
  disabled,
  onfocusout,
}) => {
  const [styles, setStyles] = useState("inputPhone empty");

  useEffect(() => {
    if (error === false) {
      setStyles("inputPhone border_error");
    } else if (value != undefined && value != "") {
      setStyles("inputPhone");
    } else {
      setStyles("inputPhone border_empty");
    }
  }, [value, error]);

  return (
    <div className="inputPhoneContainer">
      <input
        className={styles}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={click}
        onBlur={onfocusout}
        type={type}
        disabled={disabled}
      />
      {error === false && name === "telefono" && (
        <p className="input_error">{message}</p>
      )}
    </div>
  );
};

export default InputPhone;
