import "./Input.scss";

const Input = ({ placeholder, error, type, click }) => {
  return (
    <div className="inputContainer">
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        onKeyUp={click}
      />
      <p className="input_error input_error_hidden">{error}</p>
    </div>
  );
};

export default Input;
