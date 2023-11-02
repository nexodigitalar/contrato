import "./Input.scss";
import { useEffect, useState } from "react";

const Input = ({
  placeholder,
  click,
  name,
  value,
  error,
  type,
  message,
  disabled,
  onfocusout,
  max = false,
}) => {
  const [styles, setStyles] = useState("input empty");

  useEffect(() => {
    if (error === false) {
      setStyles("input border_error");
    } else if (value != undefined && value != "") {
      setStyles("input");
    } else {
      setStyles("input border_empty");
    }
  }, [value, error]);

  return (
    <div className="inputContainer">
      <input
        className={styles}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={click}
        onBlur={onfocusout}
        type={type}
        disabled={disabled}
        maxLength={max ? "9" : undefined}
      />
      {error === false &&
        name != "email" &&
        name != "cedula" &&
        name != "cedulaConyuge" &&
        name != "pin" && <p className="input_error">Campo obligatorio</p>}

      {error === false && name === "email" && (
        <p className="input_error">{message}</p>
      )}
      {error === false && name === "pin" && (
        <p className="input_error">En PIN no es válido</p>
      )}
      {error === false && name === "cedula" && (
        <p className="input_error">{message}</p>
      )}
      {error === false && name === "cedulaConyuge" && (
        <p className="input_error">{message}</p>
      )}
    </div>
  );
};

export default Input;
