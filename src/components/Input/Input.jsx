import "./Input.scss";
import { useEffect, useState } from "react";

const Input = ({ placeholder, click, name, value, error, type, disabled }) => {
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
        type={type}
        disabled={disabled}
      />
      {error === false &&
        name != "telefono" &&
        name != "email" &&
        name != "cedula" &&
        name != "pin" && <p className="input_error">Campo obligatorio</p>}
      {error === false && name === "telefono" && (
        <p className="input_error">Ingrese un número válido</p>
      )}
      {error === false && name === "email" && (
        <p className="input_error">Ingrese un email válido</p>
      )}
      {error === false && name === "pin" && (
        <p className="input_error">En PIN no es válido</p>
      )}
      {error === false && name === "cedula" && (
        <p className="input_error">Ingrese una cédula de 8 números</p>
      )}
    </div>
  );
};

export default Input;
