import "./ErrorPage.scss";
import error from "@/assets/img/error.png";

const ErrorPage = () => {
  return (
    <div className="error">
      <div className="error_container">
        <div className="error_header">
          <p className="error_header_title">Confirmación de contrato</p>
          <div className="error_division"></div>
        </div>

        <section className="error_textContainer">
          <img src={error} alt="check" className="error_img" />

          <h2 className="error_title">
            Contrato
            <span className="gray">570-179</span> ha sido{" "}
            <span className="gray">rechazado</span>.
          </h2>
          <p className="error_text">
            También puede pagar en cualquiera de los locales de Red Pagos o
            Abitab.
          </p>

          <p className="error_text">
            Ante cualquier dificultad no dude en consultar con su asesor
            comercial o nuestro equipo de Servicio al Cliente llamando al 2915
            2295 o mediante el chat en nuestra pagina consorcio.uy
          </p>
        </section>
      </div>
    </div>
  );
};

export default ErrorPage;
