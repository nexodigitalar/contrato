import "./Input.scss";

const Input = ({ placeholder }) => {
  return (
    <label>
      <input className="input" placeholder={placeholder} />
    </label>
  );
};

export default Input;
