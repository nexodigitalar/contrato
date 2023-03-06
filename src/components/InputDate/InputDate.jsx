import "./InputDate.scss";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useEffect, useState } from "react";

const InputDate = ({ name, placeholder, click, valueFecha, error }) => {
  const [styles, setStyles] = useState("input empty");
  const [date, setDate] = useState();

  useEffect(() => {
    if (error === false) {
      setStyles("inputDate_container border_error");
    } else if (valueFecha != undefined && valueFecha != "") {
      setStyles("inputDate_container");
    } else {
      setStyles("inputDate_container border_empty");
    }
  }, [valueFecha, error]);

  useEffect(() => {
    if (valueFecha) {
      setDate(new Date(valueFecha));
    }
  }, []);

  return (
    <form className="inputDate_form">
      <div className={styles}>
        {(!date || !valueFecha) && <p className="inputDate_p">{placeholder}</p>}
        <DatePicker
          onChange={(value) => {
            setDate(value), click(value);
          }}
          value={date}
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
