import "./Input.scss";

const Input = ({ placeholder, click, name, value }) => {
  return (
    <input
      className="input"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={click}
    />
  );
};

export default Input;
