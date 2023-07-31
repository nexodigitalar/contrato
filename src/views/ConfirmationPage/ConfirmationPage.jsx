import "./ConfirmationPage.scss";
import check from "@/assets/img/check.png";
import { useEffect } from "react";
import wp from "@/assets/img/whatsapp.svg";
import { useSelector } from "react-redux";

/* Components */
import Button from "@/components/Button/Button";

/* useEffect(() => {
  localStorage.removeItem("contrato");
}, []); */

const ConfirmationPage = () => {
  const idConfirmation = useSelector((state) => state.crm.idConfirmation);

  return (
    <div className="confirmation">
      <div className="confirmation_container">
        <div className="confirmation_header">
          <p className="confirmation_header_title">Confirmación de contrato</p>
          <div className="confirmation_division"></div>
        </div>

        <section className="confirmation_textContainer">
          <img src={check} alt="check" className="confirmation_img" />

          <h2 className="confirmation_title">
            <span className="gray">Felicitaciones</span>, su contrato{" "}
            <span className="gray">{idConfirmation}</span> ha finalizado con{" "}
            <span className="gray">éxito</span>.
          </h2>
          <p className="confirmation_text">
            Ahora resta realizar el pago de la primera cuota para participar del
            próximo sorteo.
          </p>
          <p className="confirmation_text">
            Usted puede hacerlo ya mismo online, haciendo clic aquí debajo.
          </p>

          <div className="confirmation_buttonContainer">
            <a target="_blank" href="https://reporteconsorcio.com.uy">
              <Button text="PAGAR MI CUOTA" />
            </a>
            <a
              target="_blank"
              href="https://wa.me/+59894627000"
              className="confirmation_button color_primary_gradient"
            >
              CONTACTANOS{" "}
              <img src={wp} alt="icono whatsapp" className="button_icon" />
            </a>
          </div>

          <p className="confirmation_text">
            También puede pagar en cualquiera de los locales de Red Pagos o
            Abitab.
          </p>

          <p className="confirmation_text">
            Ante cualquier dificultad no dude en consultar con su asesor
            comercial o nuestro equipo de Servicio al Cliente llamando al 2915
            2295 o mediante el chat en nuestra pagina consorcio.uy
          </p>
          <p className="confirmation_text">
            Puedes <span className="gray">gestionar</span> y ver toda la
            información de tu contrato en el{" "}
            <a
              className="confirmation_anchor gray"
              target="_blank"
              href="https://reporteconsorcio.com.uy"
            >
              reporte online
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default ConfirmationPage;
