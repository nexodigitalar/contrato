import "./Input.scss";

const Input = ({ placeholder, click, name }) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      name={name}
      onChange={click}
    />
  );
};

export default Input;
