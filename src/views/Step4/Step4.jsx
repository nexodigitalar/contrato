/* Styles & Img */
import "./Step4.scss";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";
import Button from "@/components/Button/Button";
import SmsContainer from "./components/SmsContainer/SmsContainer";

/* Hooks */
import { useSelector } from "react-redux";
import useFormatNumber from "@/hooks/useFormatNumber";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Step4 = ({ images }) => {
  const navigate = useNavigate();
  const ids = useSelector((state) => state.crm.ids);
  const { simulador, cuotas, plazo, monto } = useSelector(
    (state) => state.data
  );
  const usuario = useSelector((state) => state.user.usuarios);
  const infoGrupo = useSelector((state) => state.crm.grupo);
  const [confirmContract, setConfirmContract] = useState(true);

  useEffect(() => {
    ActualizarClienteCRM();
  }, []);

  /*   const mapUserIntento2 = () => {
    const arrOfPromises = usuario.map((user) => RegistrarClienteGestion(user));
    return Promise.all(arrOfPromises);
  }; */

  const convertFilesBase64 = () => {
    images.forEach((obj, index) => {
      let user = usuario[index];

      let reader = new FileReader();
      reader.readAsDataURL(obj.ciFrente);
      reader.onload = function () {
        let base64 = reader.result;
        WSCedulaContratoOnLine(user, base64);
      };
      /*    for (const image in obj) {
        let reader = new FileReader();
        reader.readAsDataURL(obj[image]);
        reader.onload = function () {
          let base64 = reader.result;
          WSCedulaContratoOnLine(user, base64);
        };
      } */
    });
  };

  const WSCedulaContratoOnLine = async (user, image) => {
    console.log("Servicio Imagen, cedula enviada:", user.cedula);
    /*    console.log("Cedula tipo:", typeof user.cedula);

    console.log("Imagen tipo:", typeof image); */
    await fetch(
      "http://190.64.74.3:8234/rest/APIConsorcio/WSCedulaContratoOnLine",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pUsuario: "APIConsorcioWeb",
          pPassword: "9u7y5.3C1o8n6s4o2r0c3i5o7.9u2y4",
          pNroDoc: Number(user.cedula),
          pVentaOLId: ids.ventaId,
          pDocBase64: image,
        }),
      }
    )
      .then((response) => response.json())
      .then((info) => {
        console.log(info);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const mapUsers = async () => {
    await Promise.all(
      usuario.map(async (user) => {
        await RegistrarClienteGestion(user);
      })
    );
  };

  const ActualizarClienteCRM = async () => {
    await fetch(
      "http://190.64.74.3:8234/rest/APIConsorcio/ActualizarClienteCRM",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pUsuario: "APIConsorcioWeb",
          pPassword: "9u7y5.3C1o8n6s4o2r0c3i5o7.9u2y4",
          pVentaOLId: ids.ventaId,
          pSDTActualizarClienteCRM: {
            EmpresaId: ids.empresaId,
            CliId: ids.cliId,
            EmpresaNombre: "",
            EmpresaClienteUlt: 0,
            CliNom: usuario[0].primerNombre,
            CliNom2: usuario[0].segundoNombre,
            CliApe1: usuario[0].primerApellido,
            CliApe2: usuario[0].segundoApellido,
            CliSexo: usuario[0].sexo,
            CliEdadRango: 0,
            CliDoc: Number(usuario[0].cedula),
            CliOcupacion: "",
            CliProf: "",
            CliFchLlam: "0000-00-00T00:00:00",
            CliDir: usuario[0].calle + usuario[0].puertaNumero,
            CliTel: "",
            CliMovil: usuario[0].telefono,
            CliTelTrb: "",
            CliTelInt: "",
            CliMail: usuario[0].email,
            CliMail1: "",
            DepartamentoId: 0,
            DepartamentoNombre: usuario[0].departamento,
            LocalidadId: 0,
            LocalidadNombre: "",
            CliBarrio: "Pocitos",
            CliTpoInt: "",
            CliMotivo: "",
            CliAsignado: "",
            CliUsrIng: "",
            CliUltLin: 0,
            CliTarUlt: 0,
            CliNomComp: "",
            CliTelComp: "",
            CliPrdUlt: 0,
            CliLinEstUlt: "",
            CliContIni: "",
            CliContDes: "",
            CliSupoId: "",
            CliSupoDes: "",
            CliFchNac: usuario[0].fechaNacimiento,
            CliEstCivil: usuario[0].estadoCivil,
            CliRepetido: "",
            CliGrupoUsuarioId: 0,
            CliIngresosMonId: "",
            CliCuotaIngreso: "",
            CliCargo: "",
            CliEmpAntiguedad: "",
            CliEmpTrabajoLugar: usuario[0].empresaTrabaja,
            CliIngresos: "0.00",
            CliDestino: "",
            CliOrigenFondo: usuario[0].origenFondos,
            CliConyugeIngreso: "0.00",
            CliConyugeMonId: "",
            CliConyugeActividad: "",
            CliConyugeDoc: "",
            CliConyugeNombre: "",
            CliEstado: "",
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.pCodigoRespuesta == "00") {
          console.log("CliDoc enviado en actualización:", usuario[0].cedula);
          /*    console.log("CliDoc tipo:", typeof usuario[0].cedula); */
          convertFilesBase64();
          /*   mapUsers(); */
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const RegistrarClienteGestion = async (user) => {
    console.log(user);
    await fetch(
      "http://190.64.74.3:8234/rest/APIConsorcio/RegistrarClienteGestion",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pUsuario: "APIConsorcioWeb",
          pPassword: "9u7y5.3C1o8n6s4o2r0c3i5o7.9u2y4",
          pVentaOLId: ids.ventaId,
          pEmpresaId: ids.empresaId,
          pCliId: ids.cliId,
          pSDTRegistrarClienteGestion: {
            LicenciaCodigo: 1,
            PersonaCodigo: 0,
            PersonaNombre1: user.primerNombre,
            PersonaNombre2: user.segundoNombre,
            PersonaApellido1: user.primerApellido,
            PersonaApellido2: user.segundoApellido,
            PersonaDireccion1: "Rincon649",
            PersonaDireccion2: "",
            PersonaTelefono1: "",
            PersonaTelefono2: "",
            PersonaTelefonoMovil1: user.telefono,
            PersonaTelefonoMovil2: "",
            PersonaFechaNacimiento: user.fechaNacimiento,
            EstadoCivilCodigo: 2,
            EstadoCivilNombre: user.estadoCivil,
            PersonaPaisCodigo: "",
            PersonaPaisNombre: user.nacionalidad,
            PersonaMail1: user.email,
            PersonaMail2: "",
            PersonaSexo: user.sexo,
            PersonaPaisResidenciaCodigo: "UY",
            PersonaPaisResidenciaNombre: user.pais,
            PersonaDepartamentoResCod: "MO",
            PersonaDepartamentoResNom: "",
            PersonaCiudadResCod: "",
            PersonaCiudadResNom: user.departamento,
            PersonaCalle: user.calle,
            PersonaPuerta: user.puertaNumero,
            PersonaApartamento: "",
            PersonaCodigoPostal: "",
            PersonaSectorActividadCodigo: 10,
            PersonaSectorActividadNombre: user.actividadPrincipal,
            PersonaSectorActividadBCUCodigo: 0,
            PersonaSectorActividadBCUNombre: "",
            PersonaSectorActividadCIIuCodigo: 0,
            PersonaSectorActividadCIIUNombre: "",
            PersonaSeparacionBienes: false,
            PersonaZonaCodigo: 0,
            PersonaZonaNombre: "",
            PersonaApellidosyNombres: "",
            PersonaLocalidadNombre: "",
            PersonaDocumento: user.cedula,
            PersonaOrigenInfo: "",
            PersonaOrigenFechaAlta: "0000-00-00T00:00:00",
            PersonaEsPEP: false,
            PersonaRelacionContacto: {
              PersonaRelacionContactoItems: [
                {
                  EmpresaId: ids.empresaId,
                  CliId: ids.cliId,
                  CliNom: user.primerNombre,
                  CliApe1: user.primerApellido,
                  CliApe2: user.segundoApellido,
                  CliDir: user.calle + user.puertaNumero,
                  CliTel: "",
                  CliMovil: user.telefono,
                },
              ],
            },
            PersonasRelacion: {
              PersonasRelacionItems: [
                {
                  PersonaCodigoRelacion: 0,
                  PersonaApellidoRelacion: "",
                  PersonaNombreRelacion: "",
                  PersonaRelacionCodigo: "",
                  PersonaRelacionNumeroDocumento: "",
                  PersonaRelacionOrigenInfo: "",
                  PersonaRelacionOrigenFechaAlta: "0000-00-00T00:00:00",
                },
              ],
            },
            TipoDocumento: {
              TipoDocumentoItems: [
                {
                  PersonaTipoDocumentoCodigo: "CI",
                  PersonaTipoDocumentoNombre: "CI",
                  PersonaNumeroDocumento: user.cedula,
                  PersonaDocumentoFechaVencimineto: "2028-05-02T00:00:00",
                  PersonaDocumentoBlobOrdinal: 0,
                  PersonaDocumentoOrigenInfo: "",
                  PersonaDocumentoFechaAltaOrigen: "0000-00-00T00:00:00",
                  PersonaDocumentoPrincipal: true,
                },
              ],
            },
            PersonaFechaAlta: "0000-00-00T00:00:00",
            PersonaFechaModificacion: "0000-00-00T00:00:00",
            PersonaIngresosImporte: user.ingresosMensuales,
            PersonaIngresosMonedaCodigo: 1,
            PersonaIngresosMonedaNombre: user.monedaIngreso,
            PersonaRiesgoLavado: 0,
            PersonaResidente: false,
            PersonaLugarTrabajoNombre: user.empresaTrabaja,
            PersonaLugarTrabajoDireccion: "Rincon 649",
            PersonaLugarTrabajoCargo: "TI",
            PersonaOrigenDeFondos: user.origenFondos,
            PersonaRubroEmpresa: user.rubroEmpresa,
            PersonaConyugeCodigo: 0,
            PersonaConyugeTipoDocumento: "",
            PersonaConyugeDocumento: "",
            PersonaConyugeNombre1: "",
            PersonaConyugeNombre2: "",
            PersonaConyugeApellido1: "",
            PersonaConyugeApellido2: "",
            PersonaConyugeSexo: "",
            PersonaConyugeFechaNac: "0000-00-00T00:00:00",
            PersonaConyugeMail: "",
            PersonaConyugeCelular: "",
            PersonaConyugeSectorActCod: 0,
            PersonaConyugeSectorActNombre: "",
            PersonaConyugeMonedaIngreso: 0,
            PersonaConyugeMonedaSimbolo: "",
            PersonaConyugeIngresos: 0,
            PersonaConyugeTrabajoNombre: "",
            PersonaConyugeTrabajoDireccion: "",
            PersonaConyugeTrabajoCargo: "",
            PersonaConyugeOrigenFondo: "",
            PersonaConyugeRubro: "",
          },
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const AltaContratoGestion = async () => {
    await fetch(
      "http://190.64.74.3:8234/rest/APIConsorcio/AltaContratoGestion",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pUsuario: "APIConsorcioWeb",
          pPassword: "9u7y5.3C1o8n6s4o2r0c3i5o7.9u2y4",
          pVentaOLId: ids.ventaId,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.pCodigoRespuesta != "00") {
          navigate("/error");
        } else {
          navigate("/valid");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="step4">
      <div className="step4_container">
        <Header text="RESUMEN" bold="DEL PLAN" logo={simulador} plazo={plazo} />
        <StepsContainer step={4} />

        <div className="step4_innerContainer">
          <section>
            <h3 className="step4_title">
              <span className="color_text">Resumen </span>del{" "}
              <span className="gray">plan</span>
            </h3>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="color_text">Monto</span> a{" "}
                <span className="gray">
                  recibir - $ {useFormatNumber(monto)}
                </span>
              </p>
            </div>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="color_text">Fecha</span> de{" "}
                <span className="gray">entrega - 17/02/2023</span>
              </p>
            </div>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="color_text">Valor</span> de{" "}
                <span className="gray">
                  cuota - $ {useFormatNumber(cuotas)}
                </span>
              </p>
            </div>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="color_text">Total</span> de{" "}
                <span className="gray">cuotas - {plazo}</span>
              </p>
            </div>
            {(simulador === "Pesos Ajustables" ||
              simulador === "Diferencial Pesos Ajustables" ||
              simulador === "Fecha Elegida") && (
              <div className="step4_descriptionContainer">
                <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
                <p className="step4_text">
                  <span className="color_text">Índice</span> de{" "}
                  <span className="gray">reajuste - IPC</span>
                </p>
              </div>
            )}
          </section>
          <section className="step4_col2">
            <h3 className="step4_title">
              <span className="color_text">Resumen </span>del{" "}
              <span className="gray">grupo</span>
            </h3>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="color_text">Número</span> del{" "}
                <span className="gray">grupo - {infoGrupo.Grupo}</span>
              </p>
            </div>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="color_text">Cantidad</span> de{" "}
                <span className="gray">
                  integrantes - {infoGrupo.GrupoMiembros} personas
                </span>
              </p>
            </div>
            <div className="step4_descriptionContainer">
              <FontAwesomeIcon className="step4_icon" icon={faChevronRight} />
              <p className="step4_text">
                <span className="color_text">Plazo</span>{" "}
                <span className="gray">- {infoGrupo.GrupoPlazo} meses</span>
              </p>
            </div>
          </section>
        </div>

        <h3 className="step4_title">
          <span className="color_text">Validación </span>del{" "}
          <span className="gray">celular</span>
        </h3>
        <SmsContainer setConfirmContract={setConfirmContract} />

        <h3 className="step4_title">
          <span className="color_text">Observaciones </span>del{" "}
          <span className="gray">contrato</span>
        </h3>
        <p className="step4_finalText">
          {infoGrupo.InfoGrupoProducto.Observaciones}
        </p>

        <div className="step4_buttonContainer">
          <Button
            text="Confirmar contrato"
            click={() => AltaContratoGestion()}
            disabled={confirmContract}
          />
        </div>
      </div>
    </div>
  );
};

export default Step4;
