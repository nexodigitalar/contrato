import "./Header.scss";
import pesosFijos from "@/assets/img/pesos-fijos.png";
import diferencial from "@/assets/img/diferencial.png";
import cuotaLibre from "@/assets/img/cuota-libre.png";
import pesosFijos2 from "@/assets/img/pesos-fijos2.png";
import diferencial2 from "@/assets/img/diferencial2.png";
import cuotaLibre2 from "@/assets/img/cuota-libre2.png";

const Header = ({ text, text2, bold, logo, number, plazo }) => {
  return (
    <div className="header">
      <div className="header_container">
        <section className="header_titleContainer">
          <p className="header_title">
            {text}
            <br />
            {text2} <span className="header_titleBold">{bold}</span>
          </p>
          <div className="header_line color_primary_background"></div>
          {logo && logo === "Pesos Fijos" && (
            <img
              src={plazo == 200 ? pesosFijos2 : pesosFijos}
              className="header_logo"
            />
          )}
          {logo && (logo === "Pesos Ajustables" || logo === "Dolares") && (
            <img
              src={plazo == 200 ? cuotaLibre2 : cuotaLibre}
              className="header_logo"
            />
          )}
          {logo &&
            (logo === "Diferencial Pesos Ajustables" ||
              logo === "Diferencial Pesos Fijos" ||
              logo === "Diferencial Dolares") && (
              <img
                src={plazo == 200 ? diferencial2 : diferencial}
                className="header_logo"
              />
            )}

          {!logo && <p className="header_number">{number}</p>}
        </section>
        <section>
          <p className="header_subtitle">Contrato Online</p>
        </section>
      </div>
      <div className="header_division"></div>
    </div>
  );
};

export default Header;
