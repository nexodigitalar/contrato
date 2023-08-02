import "./SelectMap.scss";
import { useEffect, useState } from "react";
import useBrowser from "@/hooks/useBrowser";

const SelectMap = ({
  placeholder,
  name,
  usuario,
  index,
  click,
  change,
  error,
  toMap,
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
        defaultValue={usuario[index][name] != "" ? usuario[index][name] : ""}
        className={`${styles} ${useBrowser() && "selectIos"}`}
        onChange={change}
        onClick={click}
      >
        <option value="" className="prueba" hidden>
          {placeholder}{" "}
        </option>

        {toMap.map((item, i) => {
          return (
            <option value={item.name} key={i}>
              {item.name.length > 30
                ? `${item.name.slice(0, 30)}...`
                : item.name}
            </option>
          );
        })}
      </select>
      {error === false && <p className="input_error">Campo obligatorio</p>}
    </div>
  );
};

export default SelectMap;
