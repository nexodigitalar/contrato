import "./Steps.scss";

const Steps = ({ text, textBold, number, active, click }) => {
  return (
    <div className={active ? "steps" : "steps steps_inactive"} onClick={click}>
      <div className="steps_container">
        <div className="steps_textContainer">
          <p className="steps_text">{text}</p>
          <p className="steps_textBold">{textBold}</p>
        </div>
        <p className="steps_number">{number}</p>
      </div>
      <div className="steps_line color_primary_gradient"></div>
    </div>
  );
};

export default Steps;
