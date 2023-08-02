import "./Loader.scss";
import { useEffect, useState } from "react";

const Loader = ({ lastStep }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, "3000");
  });

  return (
    <div className="loaderContainer">
      <div className="loaderInnerContainer">
        <svg
          version="1.1"
          id="_x31_"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 507.87 507.87"
          xmlSpace="preserve"
          className="loader"
        >
          <g>
            <polygon
              fill="#dce5e7"
              points="228.31,85.08 162.3,273.34 219.71,262 154.46,434.6 318.61,191.48 260.21,201.2 329.21,61.73 	"
            />
          </g>
        </svg>

        <svg
          version="1.1"
          id="_x31_"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 507.87 507.87"
          xmlSpace="preserve"
          className={
            lastStep ? "loader loaderBack_lastStep" : "loader loaderBack"
          }
        >
          <g>
            <polygon
              fill="#FFD500"
              points="228.31,85.08 162.3,273.34 219.71,262 154.46,434.6 318.61,191.48 260.21,201.2 329.21,61.73 	"
            />
          </g>
        </svg>
      </div>
      {show && (
        <p className="loaderText">
          Se está procesando la información. <br />
          Esto puede demorar unos minutos, <b>por favor no cierre la página</b>.
        </p>
      )}
    </div>
  );
};

export default Loader;
