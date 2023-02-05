import "./Button.scss";

const Button = ({ text, click, type }) => {
  return (
    <button
      className={type === "secondary" ? "button buttonSecondary" : "button"}
      onClick={click}
    >
      {text}
    </button>
  );
};

export default Button;
