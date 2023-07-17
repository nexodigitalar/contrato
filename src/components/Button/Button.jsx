/* Styles */
import "./Button.scss";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Button = ({ text, click, disabled, back = false, next = true }) => {
  return (
    <button
      className={
        !next && !back
          ? "buttonSecondary color_primary_background"
          : "button color_primary_gradient"
      }
      onClick={click}
      disabled={disabled}
    >
      {back && <FontAwesomeIcon className="button_icon" icon={faChevronLeft} />}
      {text}
      {next && (
        <FontAwesomeIcon className="button_icon" icon={faChevronRight} />
      )}
    </button>
  );
};

export default Button;
