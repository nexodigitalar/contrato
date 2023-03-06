import "./Input.scss";
import { useEffect, useState } from "react";

const Input = ({ placeholder, click, name, value, error, type }) => {
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
      />
      {error === false && name != "telefono" && name != "email" && (
        <p className="input_error">Campo obligatorio</p>
      )}
      {error === false && name === "telefono" && (
        <p className="input_error">Ingrese un número válido</p>
      )}
      {error === false && name === "email" && (
        <p className="input_error">Ingrese un email válido </p>
      )}
    </div>
  );
};

export default Input;
