/* Styles & Img */
import "./Spinner.scss";

import { useEffect, useState } from "react";

const Spinner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, "3000");
  });

  return (
    <div className="spinnerContainer">
      <div className="spinner"></div>
      {show && (
        <p className="text">
          Se está procesando la información. <br />
          Esto puede demorar unos minutos, <b>por favor no cierre la página</b>.
        </p>
      )}
    </div>
  );
};

export default Spinner;
