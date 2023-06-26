/* Styles & Img */
import "./NavBar.scss";
import logo from "@/assets/img/logo.png";
import cristal from "@/assets/img/cristal.png";
import pimba from "@/assets/img/pimba.png";

const NavBar = ({ title, underline, plazo, image = true }) => {
  return (
    <div className="navBar">
      <div className="navBar_container">
        <img src={logo} alt="Logo Consorcio" className="navBar_logo" />
        <div className="navBar_innerContainer">
          <p className="navBar_title color_text">
            {title} <span className="underline">{underline}</span>
          </p>
          {image && (
            <img src={plazo == 200 ? cristal : pimba} className="navBar_img" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
