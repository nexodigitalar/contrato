import "./NavBar.scss";
import logo from "@/assets/img/logo.png";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar_container">
        <img src={logo} alt="Logo Consorcio" className="navBar_logo" />
        <p className="navBar_title">
          Contrato <span className="underline">online</span>
        </p>
      </div>
    </div>
  );
};

export default NavBar;
