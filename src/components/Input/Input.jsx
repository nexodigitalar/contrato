import "./Input.scss";

const Input = ({ placeholder, click, name, value, error }) => {
  return (
    <div className="inputContainer">
      <input
        className={error === false ? "input error" : "input"}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={click}
      />
      {error === false && <p className="input_error">Campo obligatorio</p>}
    </div>
  );
};

export default Input;
