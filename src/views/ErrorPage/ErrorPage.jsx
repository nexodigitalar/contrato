import "./ErrorPage.scss";
import error from "@/assets/img/error.png";
import wp from "@/assets/img/whatsapp.svg";
import { useSelector } from "react-redux";
import { useEffect } from "react";

/* Components */
import Button from "@/components/Button/Button";

const ErrorPage = () => {
  const idConfirmation = useSelector((state) => state.crm.idConfirmation);

  useEffect(() => {
    localStorage.removeItem("contrato");
  }, []);

  return (
    <div className="error">
      <div className="error_container">
        <div className="error_header">
          <p className="error_header_title">Error de contrato</p>
          <div className="error_division"></div>
        </div>

        <section className="error_textContainer">
          <img src={error} alt="check" className="error_img" />

          <h2 className="error_title">
            El contrato{" "}
            <span className="gray">
              {idConfirmation === undefined ? "" : idConfirmation}
            </span>{" "}
            ha sido <span className="gray">rechazado</span>.
          </h2>

          <p className="error_text">
            Ante cualquier dificultad no dude en consultar con su asesor
            comercial o nuestro equipo de Servicio al Cliente llamando al 2915
            2295 o mediante el chat en nuestra pagina consorcio.uy
          </p>

          <div className="error_buttonContainer">
            <a href="https://consorcio.uy/">
              <Button text="INTENTAR NUEVAMENTE" back={true} next={false} />
            </a>
            <a
              href="https://wa.me/+59894627000"
              className="error_button color_primary_gradient"
            >
              CONTACTANOS{" "}
              <img src={wp} alt="icono whatsapp" className="button_icon" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ErrorPage;
