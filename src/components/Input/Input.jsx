import "./Input.scss";

const Input = ({ placeholder, click, name, value, error, type }) => {
  return (
    <div className="inputContainer">
      <input
        className={error === false ? "input border_error" : "input"}
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
