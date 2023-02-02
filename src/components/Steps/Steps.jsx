import "./Steps.scss";

const Steps = ({ text, textBold, number, active }) => {
  return (
    <div className="steps">
      <div className="steps_container">
        <div className="steps_textContainer">
          <p className="steps_text">{text}</p>
          <p className="steps_textBold">{textBold}</p>
        </div>
        <p className="steps_number">{number}</p>
      </div>
      <div className="steps_line"></div>
    </div>
  );
};

export default Steps;
