import "./InputDate.scss";
import { useState } from "react";
import DatePicker from "react-date-picker/dist/entry.nostyle";

const InputDate = ({ name, placeholder, click, value, error }) => {
  const [date, setDate] = useState();

  return (
    <form>
      <div className="inputDate_container">
        <p>{placeholder}</p>
        <DatePicker
          onChange={(value) => click(value)}
          value={value?.fechaNacimiento}
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
