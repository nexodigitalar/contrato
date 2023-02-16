/* Styles */
import "./Button.scss";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Button = ({ text, click, type, disabled }) => {
  return (
    <button
      className={type === "secondary" ? "buttonSecondary" : "button"}
      onClick={click}
      disabled={disabled}
    >
      {text}
      {type != "secondary" && (
        <FontAwesomeIcon className="button_icon" icon={faChevronRight} />
      )}
    </button>
  );
};

export default Button;
