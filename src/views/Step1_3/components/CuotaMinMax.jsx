import "./CuotaMinMax.scss";
import { useSelector } from "react-redux";
import useFormatNumber from "@/hooks/useFormatNumber";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CuotaMinMax = () => {
  const data = useSelector((state) => state.data);
  const grupo = useSelector((state) => state.crm.grupo);

  return (
    <div className="cuotam">
      <section className="cuotam_section">
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="color_text">mínima</span>
            </p>
            <p className="color_text">
              U$S{" "}
              {useFormatNumber(
                grupo.InfoGrupoProducto.CuotasRangos[0].CuotaMinima
              )}
            </p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="color_text">promedio</span>
            </p>
            <p className="color_text">U$S {useFormatNumber(data.cuotas)}</p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota <span className="color_text">máxima</span>
            </p>
            <p className="color_text">
              U$S{" "}
              {useFormatNumber(
                grupo.InfoGrupoProducto.CuotasRangos[0].CuotaMaxima
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="cuotam_section">
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              capital <span className="color_text">mínimo</span>
            </p>
            <p className="color_text">
              U$S{" "}
              {useFormatNumber(
                grupo.InfoGrupoProducto.CapitalesRangos[0].CapitalMinimo
              )}
            </p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              capital <span className="color_text">promedio</span>
            </p>
            <p className="color_text">U$S {useFormatNumber(data.monto)}</p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              capital <span className="color_text">máximo</span>
            </p>
            <p className="color_text">
              U$S{" "}
              {useFormatNumber(
                grupo.InfoGrupoProducto.CapitalesRangos[0].CapitalMaximo
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CuotaMinMax;
