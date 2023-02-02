import "./Header.scss";

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
          {logo ? (
            <img src={logo} />
          ) : (
            <p className="header_number">{number}</p>
          )}
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
