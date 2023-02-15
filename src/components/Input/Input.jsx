import "./Input.scss";

<<<<<<< HEAD
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
=======
const Input = ({ placeholder, click, name, value }) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={click}
    />
>>>>>>> validations
  );
};

export default Input;
