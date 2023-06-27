import "./Switch.scss";
import { useState, useEffect } from "react";

const Switch = ({ click, storage }) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setCheck(storage);
  }, [storage]);

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
