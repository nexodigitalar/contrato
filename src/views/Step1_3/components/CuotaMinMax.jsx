import "./CuotaMinMax.scss";
import { useSelector } from "react-redux";
import useFormatNumber from "@/hooks/useFormatNumber";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CuotaMinMax = () => {
  const { monto, cuotas, moneda, espera, normal, final } = useSelector(
    (state) => state.data
  );
  const grupo = useSelector((state) => state.crm.grupo);

  return (
    <div className="cuotam">
      <section className="cuotam_section">
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota{" "}
              <span className="color_text">{espera ? "espera" : "mínima"}</span>
            </p>
            <p className="color_text">
              {moneda === "USD" ? "U$S" : "$"}{" "}
              {espera
                ? useFormatNumber(espera)
                : useFormatNumber(
                    grupo.InfoGrupoProducto.CuotasRangos[0].CuotaMinima
                  )}
            </p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota{" "}
              <span className="color_text">
                {normal ? "normal" : "promedio"}
              </span>
            </p>
            <p className="color_text">
              {moneda === "USD" ? "U$S" : "$"}{" "}
              {normal ? useFormatNumber(normal) : useFormatNumber(cuotas)}
            </p>
          </div>
          <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
        </div>
        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              cuota{" "}
              <span className="color_text">{final ? "final" : "máxima"}</span>
            </p>
            <p className="color_text">
              {moneda === "USD" ? "U$S" : "$"}{" "}
              {final
                ? useFormatNumber(final)
                : useFormatNumber(
                    grupo.InfoGrupoProducto.CuotasRangos[0].CuotaMaxima
                  )}
            </p>
          </div>
        </div>
      </section>

      <section className="cuotam_section">
        {!espera && (
          <div className="cuotam_container">
            <div className="cuotam_textContainer">
              <p className="cuotam_text">
                capital <span className="color_text">mínimo</span>
              </p>
              <p className="color_text">
                {moneda === "USD" ? "U$S" : "$"}{" "}
                {useFormatNumber(
                  grupo.InfoGrupoProducto.CapitalesRangos[0].CapitalMinimo
                )}
              </p>
            </div>
            <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
          </div>
        )}

        <div className="cuotam_container">
          <div className="cuotam_textContainer">
            <p className="cuotam_text">
              capital <span className="color_text">promedio</span>
            </p>
            <p className="color_text">
              {" "}
              {moneda === "USD" ? "U$S" : "$"} {useFormatNumber(monto)}
            </p>
          </div>
          {!espera && (
            <FontAwesomeIcon className="cuotam_icon" icon={faChevronRight} />
          )}
        </div>

        {!espera && (
          <div className="cuotam_container">
            <div className="cuotam_textContainer">
              <p className="cuotam_text">
                capital <span className="color_text">máximo</span>
              </p>
              <p className="color_text">
                {moneda === "USD" ? "U$S" : "$"}{" "}
                {useFormatNumber(
                  grupo.InfoGrupoProducto.CapitalesRangos[0].CapitalMaximo
                )}
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default CuotaMinMax;
