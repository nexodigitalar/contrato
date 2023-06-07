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
              cuota <span className="color_text">mínima</span>
            </p>
            <p className="color_text">U$S 10.000</p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="color_text">promedio</span>
            </p>
            <p className="color_text">U$S 30.000</p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="color_text">máxima</span>
            </p>
            <p className="color_text">U$S 60.000</p>
          </div>
        </div>
      </section>

      <section className="cuotam_section">
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="color_text">mínima</span>
            </p>
            <p className="color_text">U$S 10.000</p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="color_text">promedio</span>
            </p>
            <p className="color_text">U$S 30.000</p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="color_text">máxima</span>
            </p>
            <p className="color_text">U$S 60.000</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CuotaMinMax;
