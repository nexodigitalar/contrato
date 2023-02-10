import "./Header.scss";
import fechaElegida from "@/assets/img/fecha-elegida.png";
import pesosFijos from "@/assets/img/pesos-fijos.png";
import diferencial from "@/assets/img/diferencial.png";
import cuotaLibre from "@/assets/img/cuota-libre.png";

const Header = ({ text, bold, logo, number }) => {
  return (
    <div className="header">
      <div className="header_container">
        <section className="header_titleContainer">
          <p className="header_title">
            {text}
            <br />
            <span className="header_titleBold">{bold}</span>
          </p>
          <div className="header_line"></div>
          {logo && logo === "Fecha Elegida" && (
            <img src={fechaElegida} className="header_logo" />
          )}
          {logo && logo === "Pesos Fijos" && (
            <img src={pesosFijos} className="header_logo" />
          )}
          {logo && (logo === "Pesos Ajustables" || logo === "Dolares") && (
            <img src={cuotaLibre} className="header_logo" />
          )}
          {logo &&
            (logo === "Diferencial Pesos Ajustables" ||
              logo === "Diferencial Pesos Fijos" ||
              logo === "Diferencial Dolares") && (
              <img src={diferencial} className="header_logo" />
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
