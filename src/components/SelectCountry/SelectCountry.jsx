import "./SelectCountry.scss";
import { useEffect, useState } from "react";
import countries from "@/utils/countries.json";

const SelectCountry = ({
  placeholder,
  name,
  usuario,
  index,
  click,
  change,
  error,
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
        className={styles}
        onChange={change}
        onClick={click}
      >
        <option value="placeholder" className="prueba" hidden>
          * País{" "}
        </option>

        {countries.map((item, i) => {
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

export default SelectCountry;
