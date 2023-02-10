/* Styles & Img */
import "./NavBar.scss";
import logo from "@/assets/img/logo.png";

const NavBar = ({ title, underline }) => {
  return (
    <div className="navBar">
      <div className="navBar_container">
        <img src={logo} alt="Logo Consorcio" className="navBar_logo" />
        <p className="navBar_title">
          {title} <span className="underline">{underline}</span>
        </p>
      </div>
    </div>
  );
};

export default NavBar;
