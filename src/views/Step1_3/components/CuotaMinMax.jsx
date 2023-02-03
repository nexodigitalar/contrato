import "./CuotaMinMax.scss";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CuotaMinMax = () => {
  return (
    <div className="cuotam">
      <section className="cuotam_section">
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="cuotam_greenText">mínima</span>
            </p>
            <p className="cuotam_greenText">U$S 10.000</p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="cuotam_greenText">promedio</span>
            </p>
            <p className="cuotam_greenText">U$S 30.000</p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="cuotam_greenText">máxima</span>
            </p>
            <p className="cuotam_greenText">U$S 60.000</p>
          </div>
        </div>
      </section>

      <section className="cuotam_section">
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="cuotam_greenText">mínima</span>
            </p>
            <p className="cuotam_greenText">U$S 10.000</p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="cuotam_greenText">promedio</span>
            </p>
            <p className="cuotam_greenText">U$S 30.000</p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="cuotam_greenText">máxima</span>
            </p>
            <p className="cuotam_greenText">U$S 60.000</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CuotaMinMax;
