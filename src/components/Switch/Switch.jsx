import "./Switch.scss";
import { useState } from "react";

const Switch = ({ click }) => {
  const [check, setCheck] = useState(false);

  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={() => {
          setCheck(!check), click(!check);
        }}
        checked={check}
      />
      <span className="switch_circle"></span>
    </label>
  );
};

export default Switch;
