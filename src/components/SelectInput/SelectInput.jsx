import "./SelectInput.scss";
import { useEffect, useState } from "react";
import useBrowser from "@/hooks/useBrowser";

const SelectInput = ({
  placeholder,
  name,
  usuario,
  index,
  click,
  change,
  error,
  op1,
  op2,
  op3,
  op4,
}) => {
  const [styles, setStyles] = useState("selectInput border_empty");

  useEffect(() => {
    if (error === false) {
      setStyles("selectInput border_error");
    } else if (
      usuario[index][name] != undefined &&
      usuario[index][name] != ""
    ) {
      setStyles("selectInput");
    } else {
      setStyles("selectInput border_empty");
    }
  }, [usuario[index][name], error]);

  return (
    <div className="selectInput_container">
      <select
        id={name}
        name={name}
        defaultValue={
          usuario[index][name] != "" ? usuario[index][name] : "placeholder"
        }
        className={`${styles} ${useBrowser() && "selectIos"}`}
        onChange={change}
        onClick={click}
      >
        {placeholder && (
          <option value="placeholder" className="prueba" hidden>
            {placeholder}
          </option>
        )}
        <option value={op1}>{op1}</option>
        <option value={op2}>{op2}</option>
        {op3 && <option value={op3}>{op3}</option>}
        {op4 && <option value={op4}>{op4}</option>}
      </select>
      {error === false && <p className="input_error">Campo obligatorio</p>}
    </div>
  );
};

export default SelectInput;
