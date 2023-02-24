import "./InputDate.scss";
import DatePicker from "react-date-picker/dist/entry.nostyle";

const InputDate = ({ name, placeholder, click, valueFecha, error }) => {
  return (
    <form className="inputDate_form">
      <div className="inputDate_container">
        <p>{placeholder}</p>
        <DatePicker
          onChange={(value) => click(value)}
          value={valueFecha && new Date(valueFecha)}
          name={name}
          wrapperClassName="datePicker"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      {error === false && <p className="input_error">Campo obligatorio</p>}
    </form>
  );
};

export default InputDate;
