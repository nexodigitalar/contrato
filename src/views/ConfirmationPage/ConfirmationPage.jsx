import "./ConfirmationPage.scss";
import check from "@/assets/img/check.png";

/* Components */
import Button from "@/components/Button/Button";

const ConfirmationPage = () => {
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
            <span className="gray">570-179</span> ha finalizado con{" "}
            <span className="gray">éxito</span>.
          </h2>
          <p className="confirmation_text">
            Ahora resta realizar el pago de la primera cuota para participar del
            próximo sorteo.
          </p>
          <p className="confirmation_text">
            Usted puede hacerlo ya mismo online, haciendo clic aquí debajo.
          </p>
          <Button text="PAGAR MI CUOTA" />
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
            información de tu contrato en el
            <span className="gray"> reporte online</span>.
          </p>
          <p className="confirmation_text">
            Descargar <span className="gray">PDF</span> de herramientas
            electrónicas y condiciones particulares completas
          </p>
        </section>
      </div>
    </div>
  );
};

export default ConfirmationPage;
