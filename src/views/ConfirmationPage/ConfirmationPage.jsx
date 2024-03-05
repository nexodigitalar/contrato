import "./ConfirmationPage.scss";
import check from "@/assets/img/check.png";
import wp from "@/assets/img/whatsapp.svg";
import { useSelector } from "react-redux";

/* Components */
import Button from "@/components/Button/Button";
import { useEffect, useState } from "react";

const ConfirmationPage = () => {
  const idConfirmation = useSelector((state) => state.crm.idConfirmation);
  const codContrato = useSelector((state) => state.crm.codigoContrato);
  const [link, setLink] = useState("");

  const downloadPdf = (url, name) => {
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = `${name}.pdf`;
        a.click();
      });
    });
  };

  useEffect(() => {
    generateLinkPayment();
  }, []);

  const generateLinkPayment = async () => {
    let numberToSend = idConfirmation.split("-");
    let gruposCodigo = numberToSend[0];
    let numeroGrupoCodigo = numberToSend[1];

    await fetch(`${import.meta.env.VITE_URL}/WSPagoCuota`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pUsuario: import.meta.env.VITE_USUARIO,
        pPassword: import.meta.env.VITE_PASSWORD,
        pGruposCodigo: gruposCodigo,
        pNumeroGrupoCodigo: numeroGrupoCodigo,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.pCodigoRespuesta == "00") {
          setLink(data.pPagoCuotaResultado);
        } else {
          console.log(data);
          dispatch(changePage(5));
        }
      })
      .catch(() => {
        dispatch(changePage(5));
      });
  };

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

          <div className="confirmation_pdfContainer">
            <p
              className="confirmation_link"
              onClick={() =>
                downloadPdf(
                  `${import.meta.env.VITE_PDF_1}${codContrato}.pdf`,
                  "CondicionesParticulares"
                )
              }
            >
              Descargar Condiciones particulares, Anexos y Condiciones generales
            </p>
            <p
              className="confirmation_link"
              onClick={() =>
                downloadPdf(
                  `${import.meta.env.VITE_PDF_2}${codContrato}.pdf`,
                  "ServiciosElectronicosYPoliticaDePrivacidad"
                )
              }
            >
              Descargar Servicios Electrónicos y Política de Privacidad
            </p>
          </div>

          <p className="confirmation_text">
            Ahora resta realizar el pago de la primera cuota para participar del
            próximo sorteo.
          </p>
          <p className="confirmation_text">
            Usted puede hacerlo ya mismo online, haciendo clic aquí debajo.
          </p>

          <div className="confirmation_buttonContainer">
            <a
              target="_blank"
              href={link}
              className="contrato-paso-4-exito-cuota"
            >
              <Button text="PAGAR MI CUOTA" />
            </a>
            <a
              target="_blank"
              href="https://wa.me/+59894627000"
              className="confirmation_button color_primary_gradient contrato-paso-4-exito-contacto"
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
