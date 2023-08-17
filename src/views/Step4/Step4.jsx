/* Styles & Img */
import "./Step4.scss";

/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

/* Components */
import Header from "@/components/Header/Header";
import StepsContainer from "@/components/StepsContainer/StepsContainer";
import Button from "@/components/Button/Button";
import Loader from "@/components/Loader/Loader";
import SmsContainer from "./components/SmsContainer/SmsContainer";

/* Hooks */
import { useSelector, useDispatch } from "react-redux";
import useFormatNumber from "@/hooks/useFormatNumber";
import { useState, useEffect } from "react";
import { blockPages, changePage } from "@/store/pageSlice/pageSlice";
import { setCodContrato } from "@/store/crmSlice/crmSlice";

import countries from "@/utils/countries.json";
import departamentos from "@/utils/departamentos.json";
import estadoCivil from "@/utils/estadoCivil.json";
import actividad from "@/utils/actividad.json";

const Step4 = ({ images }) => {
  const dispatch = useDispatch();
  const ids = useSelector((state) => state.crm.ids);
  const { simulador, cuotas, plazo, monto, moneda } = useSelector(
    (state) => state.data
  );
  const usuario = useSelector((state) => state.user.usuarios);
  const infoGrupo = useSelector((state) => state.crm.grupo);
  const [confirmContract, setConfirmContract] = useState(true);
  const [spinner, setSpinner] = useState(true);
  const [currency, setCurrency] = useState("$");
  const [validatePdf, setValidatePdf] = useState([false, false]);
  const [contratoId, setContratoId] = useState();

  const checkLengthCedula = (user) => {
    if (user.cedula.length === 8) {
      return `0${user.cedula}`;
    } else {
      return user.cedula;
    }
  };

  useEffect(() => {
    if (moneda === "USD") {
      setCurrency("U$S");
    }
  });

  useEffect(() => {
    dispatch(blockPages());
    ActualizarClienteCRM(usuario[0]);
  }, []);

  const handleValidationsPdf = (i) => {
    const newArr = validatePdf.map((item, index) => {
      if (i === index) {
        return !item;
      } else {
        return item;
      }
    });
    setValidatePdf(newArr);
  };

  async function mapUsers(user) {
    let userDoc = checkLengthCedula(user);
    let otherUsers = usuario.slice(1, usuario.length);

    await sendFrenteFile(userDoc, 0);
    await sendDorsoFile(userDoc, 0);

    for (let i = 0; i < otherUsers.length; i++) {
      await ActualizarClienteCRMOther(otherUsers[i], i);
      await AltaContratoGestion();
    }
  }

  async function ActualizarClienteCRM(user) {
    let userDoc = checkLengthCedula(user);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/ActualizarClienteCRM`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pUsuario: import.meta.env.VITE_USUARIO,
            pPassword: import.meta.env.VITE_PASSWORD,
            pVentaOLId: ids.ventaId,
            pSDTActualizarClienteCRM: {
              EmpresaId: ids.empresaId,
              CliId: ids.cliId,
              EmpresaNombre: "",
              EmpresaClienteUlt: 0,
              CliNom: user.primerNombre,
              CliNom2: user.segundoNombre,
              CliApe1: user.primerApellido,
              CliApe2: user.segundoApellido,
              CliSexo: user.sexo,
              CliEdadRango: 0,
              CliDoc: userDoc,
              CliOcupacion: "",
              CliProf: "",
              CliFchLlam: "0000-00-00T00:00:00",
              CliDir: user.calle + user.puertaNumero,
              CliTel: "",
              CliMovil: user.telefono,
              CliTelTrb: "",
              CliTelInt: "",
              CliMail: user.email,
              CliMail1: "",
              DepartamentoId: 0,
              DepartamentoNombre: user.departamento,
              LocalidadId: 0,
              LocalidadNombre: "",
              CliBarrio: "",
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
              CliFchNac: user.fechaNacimiento,
              CliEstCivil: user.estadoCivil,
              CliRepetido: "",
              CliGrupoUsuarioId: 0,
              CliIngresosMonId: "",
              CliCuotaIngreso: "",
              CliCargo: "",
              CliEmpAntiguedad: "",
              CliEmpTrabajoLugar: user.empresaTrabaja,
              CliIngresos: user.ingresosMensuales,
              CliDestino: "",
              CliOrigenFondo: user.origenFondos,
              CliConyugeIngreso: "0.00",
              CliConyugeMonId: "",
              CliConyugeActividad: user.actividadPrincipalConyuge,
              CliConyugeDoc: user.cedulaConyuge,
              CliConyugeNombre: user.primerNombreConyuge,
              CliEstado: "",
            },
          }),
        }
      );

      const data = await response.json();

      if (data.pCodigoRespuesta == "00") {
        RegistrarClienteGestion(user);
      } else {
        console.log(data);
        dispatch(changePage(5));
      }
    } catch (error) {
      dispatch(changePage(5));
    }
  }

  async function RegistrarClienteGestion(user) {
    let userDoc = checkLengthCedula(user);
    let paisCod = countries.find((item) => item.name === user.pais);
    let departamentoCod = departamentos.find(
      (item) => item.name === user.departamento
    );
    departamentoCod = departamentoCod ? departamentoCod.cod : 0;
    let estadoCivilCod = estadoCivil.find(
      (item) => item.name === user.estadoCivil
    );
    let actividadCod = actividad.find(
      (item) => item.name === user.actividadPrincipal
    );
    let actividadCodConyuge = actividad.find(
      (item) => item.name === user.actividadPrincipalConyuge
    );
    actividadCodConyuge = actividadCodConyuge ? actividadCodConyuge.cod : 0;
    let monedaCod = user.monedaIngreso === "Pesos Uruguayos" ? 1 : 2;

    console.log("Registro cliente se mando:", {
      pVentaOLId: ids.ventaId,
      pEmpresaId: ids.empresaId,
      pCliId: ids.cliId,
    });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/RegistrarClienteGestion`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pUsuario: import.meta.env.VITE_USUARIO,
            pPassword: import.meta.env.VITE_PASSWORD,
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
              PersonaDireccion1: user.calle + " " + user.puertaNumero,
              PersonaDireccion2: "",
              PersonaTelefono1: "",
              PersonaTelefono2: "",
              PersonaTelefonoMovil1: user.telefono,
              PersonaTelefonoMovil2: "",
              PersonaFechaNacimiento: user.fechaNacimiento,
              EstadoCivilCodigo: estadoCivilCod.cod,
              EstadoCivilNombre: user.estadoCivil,
              PersonaPaisCodigo: "",
              PersonaPaisNombre: user.nacionalidad,
              PersonaMail1: user.email,
              PersonaMail2: "",
              PersonaSexo: user.sexo,
              PersonaPaisResidenciaCodigo: paisCod.alpha2,
              PersonaPaisResidenciaNombre: user.pais,
              PersonaDepartamentoResCod: departamentoCod,
              PersonaDepartamentoResNom: user.departamento,
              PersonaCiudadResCod: "",
              PersonaCiudadResNom: "",
              PersonaCalle: user.calle,
              PersonaPuerta: user.puertaNumero,
              PersonaApartamento: "",
              PersonaCodigoPostal: "",
              PersonaSectorActividadCodigo: actividadCod.cod,
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
              PersonaDocumento: userDoc,
              PersonaOrigenInfo: "",
              PersonaOrigenFechaAlta: "0000-00-00T00:00:00",
              PersonaEsPEP: user.pep,
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
                    PersonaNumeroDocumento: userDoc,
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
              PersonaIngresosMonedaCodigo: monedaCod,
              PersonaIngresosMonedaNombre: user.monedaIngreso,
              PersonaRiesgoLavado: 0,
              PersonaResidente: user.residenteUruguayo,
              PersonaLugarTrabajoNombre: user.empresaTrabaja,
              PersonaLugarTrabajoDireccion: "-",
              PersonaLugarTrabajoCargo: "-",
              PersonaOrigenDeFondos: user.origenFondos,
              PersonaRubroEmpresa: user.rubroEmpresa,
              PersonaConyugeCodigo: 0,
              PersonaConyugeTipoDocumento: "",
              PersonaConyugeDocumento: user.cedulaConyuge,
              PersonaConyugeNombre1: user.primerNombreConyuge,
              PersonaConyugeNombre2: user.segundoNombreConyue,
              PersonaConyugeApellido1: user.primerApellidoConyuge,
              PersonaConyugeApellido2: user.segundoApellidoConyuge,
              PersonaConyugeSexo: "",
              PersonaConyugeFechaNac: user.fechaNacimientoConyuge,
              PersonaConyugeMail: "",
              PersonaConyugeCelular: "",
              PersonaConyugeSectorActCod: actividadCodConyuge,
              PersonaConyugeSectorActNombre: user.actividadPrincipalConyuge,
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
      );

      const data = await response.json();

      if (data.pCodigoRespuesta == "00") {
        if (usuario.length > 1) {
          mapUsers(user);
        } else {
          await sendFrenteFile(userDoc, 0);
          await sendDorsoFile(userDoc, 0);
          await AltaContratoGestion();
          setSpinner(false);
        }
      } else {
        console.log(data);
        dispatch(changePage(5));
      }
    } catch (error) {
      dispatch(changePage(5));
    }
  }

  /* Para otros clientes */

  async function ActualizarClienteCRMOther(user, i) {
    let userDoc = checkLengthCedula(user);
    try {
      const responseUser = await fetch(
        `${import.meta.env.VITE_URL}/ActualizarClienteCRM`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pUsuario: import.meta.env.VITE_USUARIO,
            pPassword: import.meta.env.VITE_PASSWORD,
            pVentaOLId: ids.ventaId,
            pSDTActualizarClienteCRM: {
              EmpresaId: ids.empresaId,
              CliId: "0",
              EmpresaNombre: "",
              EmpresaClienteUlt: 0,
              CliNom: user.primerNombre,
              CliNom2: user.segundoNombre,
              CliApe1: user.primerApellido,
              CliApe2: user.segundoApellido,
              CliSexo: user.sexo,
              CliEdadRango: 0,
              CliDoc: userDoc,
              CliOcupacion: "",
              CliProf: "",
              CliFchLlam: "0000-00-00T00:00:00",
              CliDir: user.calle + user.puertaNumero,
              CliTel: "",
              CliMovil: user.telefono,
              CliTelTrb: "",
              CliTelInt: "",
              CliMail: user.email,
              CliMail1: "",
              DepartamentoId: 0,
              DepartamentoNombre: user.departamento,
              LocalidadId: 0,
              LocalidadNombre: "",
              CliBarrio: "",
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
              CliFchNac: user.fechaNacimiento,
              CliEstCivil: user.estadoCivil,
              CliRepetido: "",
              CliGrupoUsuarioId: 0,
              CliIngresosMonId: "",
              CliCuotaIngreso: "",
              CliCargo: "",
              CliEmpAntiguedad: "",
              CliEmpTrabajoLugar: user.empresaTrabaja,
              CliIngresos: user.ingresosMensuales,
              CliDestino: "",
              CliOrigenFondo: user.origenFondos,
              CliConyugeIngreso: "0.00",
              CliConyugeMonId: "",
              CliConyugeActividad: user.actividadPrincipalConyuge,
              CliConyugeDoc: user.cedulaConyuge,
              CliConyugeNombre: user.primerNombreConyuge,
              CliEstado: "",
            },
          }),
        }
      );

      const data = await responseUser.json();

      if (data.pCodigoRespuesta === "00") {
        await RegistrarClienteGestionOther(
          user,
          data.pCliId,
          data.pEmpresaId,
          i
        );
      } else {
        console.log(data);
        dispatch(changePage(5));
      }
    } catch (error) {
      dispatch(changePage(5));
    }
  }

  async function RegistrarClienteGestionOther(user, idUser, idEmpresa, i) {
    let userDoc = checkLengthCedula(user);
    let paisCod = countries.find((item) => item.name === user.pais);
    let departamentoCod = departamentos.find(
      (item) => item.name === user.departamento
    );
    departamentoCod = departamentoCod ? departamentoCod.cod : 0;
    let estadoCivilCod = estadoCivil.find(
      (item) => item.name === user.estadoCivil
    );
    let actividadCod = actividad.find(
      (item) => item.name === user.actividadPrincipal
    );
    let actividadCodConyuge = actividad.find(
      (item) => item.name === user.actividadPrincipalConyuge
    );
    let monedaCod = user.monedaIngreso === "Pesos Uruguayos" ? 1 : 2;

    try {
      const responseUser = await fetch(
        `${import.meta.env.VITE_URL}/RegistrarClienteGestion`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pUsuario: import.meta.env.VITE_USUARIO,
            pPassword: import.meta.env.VITE_PASSWORD,
            pVentaOLId: ids.ventaId,
            pEmpresaId: idEmpresa,
            pCliId: idUser,
            pSDTRegistrarClienteGestion: {
              LicenciaCodigo: 1,
              PersonaCodigo: 0,
              PersonaNombre1: user.primerNombre,
              PersonaNombre2: user.segundoNombre,
              PersonaApellido1: user.primerApellido,
              PersonaApellido2: user.segundoApellido,
              PersonaDireccion1: user.calle + " " + user.puertaNumero,
              PersonaDireccion2: "",
              PersonaTelefono1: "",
              PersonaTelefono2: "",
              PersonaTelefonoMovil1: user.telefono,
              PersonaTelefonoMovil2: "",
              PersonaFechaNacimiento: user.fechaNacimiento,
              EstadoCivilCodigo: estadoCivilCod.cod,
              EstadoCivilNombre: user.estadoCivil,
              PersonaPaisCodigo: "",
              PersonaPaisNombre: user.nacionalidad,
              PersonaMail1: user.email,
              PersonaMail2: "",
              PersonaSexo: user.sexo,
              PersonaPaisResidenciaCodigo: paisCod.alpha2,
              PersonaPaisResidenciaNombre: user.pais,
              PersonaDepartamentoResCod: departamentoCod,
              PersonaDepartamentoResNom: user.departamento,
              PersonaCiudadResCod: "",
              PersonaCiudadResNom: "",
              PersonaCalle: user.calle,
              PersonaPuerta: user.puertaNumero,
              PersonaApartamento: "",
              PersonaCodigoPostal: "",
              PersonaSectorActividadCodigo: actividadCod.cod,
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
              PersonaDocumento: userDoc,
              PersonaOrigenInfo: "",
              PersonaOrigenFechaAlta: "0000-00-00T00:00:00",
              PersonaEsPEP: user.pep,
              PersonaRelacionContacto: {
                PersonaRelacionContactoItems: [
                  {
                    EmpresaId: idEmpresa,
                    CliId: idUser,
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
                    PersonaNumeroDocumento: userDoc,
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
              PersonaIngresosMonedaCodigo: monedaCod,
              PersonaIngresosMonedaNombre: user.monedaIngreso,
              PersonaRiesgoLavado: 0,
              PersonaResidente: user.residenteUruguayo,
              PersonaLugarTrabajoNombre: user.empresaTrabaja,
              PersonaLugarTrabajoDireccion: "-",
              PersonaLugarTrabajoCargo: "-",
              PersonaOrigenDeFondos: user.origenFondos,
              PersonaRubroEmpresa: user.rubroEmpresa,
              PersonaConyugeCodigo: 0,
              PersonaConyugeTipoDocumento: "",
              PersonaConyugeDocumento: user.cedulaConyuge,
              PersonaConyugeNombre1: user.primerNombreConyuge,
              PersonaConyugeNombre2: user.segundoNombreConyue,
              PersonaConyugeApellido1: user.primerApellidoConyuge,
              PersonaConyugeApellido2: user.segundoApellidoConyuge,
              PersonaConyugeSexo: "",
              PersonaConyugeFechaNac: user.fechaNacimientoConyuge,
              PersonaConyugeMail: "",
              PersonaConyugeCelular: "",
              PersonaConyugeSectorActCod: actividadCodConyuge,
              PersonaConyugeSectorActNombre: user.actividadPrincipalConyuge,
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
      );

      const data = await responseUser.json();

      if (data.pCodigoRespuesta === "00") {
        await sendFrenteFile(userDoc, i + 1);
        await sendDorsoFile(userDoc, i + 1);
      } else {
        console.log(data);
        dispatch(changePage(5));
      }
    } catch (error) {
      dispatch(changePage(5));
    }
  }

  /* Fin para otros clientes */

  async function sendFrenteFile(doc, index) {
    let reader = new FileReader();
    reader.readAsDataURL(images[index].ciFrente);

    return new Promise((resolve, reject) => {
      reader.onload = async function setFile() {
        var arrayAux = [];
        let base64 = reader.result;
        arrayAux = base64.split(",");
        let result = arrayAux[1];
        resolve(
          WSCedulaContratoOnLine(
            doc,
            "CI_FRENTE",
            result,
            images[index].ciFrente.name,
            images[index].ciFrente.type
          )
        );
      };
    });
  }

  async function sendDorsoFile(doc, index) {
    let readerDorso = new FileReader();
    readerDorso.readAsDataURL(images[index].ciDorso);

    return new Promise((resolve, reject) => {
      readerDorso.onload = async function setFile() {
        var arrayAux = [];
        let base64 = readerDorso.result;
        arrayAux = base64.split(",");
        let result = arrayAux[1];
        resolve(
          WSCedulaContratoOnLine(
            doc,
            "CI_DORSO",
            result,
            images[index].ciDorso.name,
            images[index].ciDorso.type
          )
        );
      };
    });
  }

  async function WSCedulaContratoOnLine(doc, type, image, name, extension) {
    let cropExtension = extension.replace("image/", "");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/WSCedulaContratoOnLine`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pUsuario: import.meta.env.VITE_USUARIO,
            pPassword: import.meta.env.VITE_PASSWORD,
            pVentaOLId: ids.ventaId,
            pNroDoc: doc,
            pTipoDoc: type,
            pDocBase64: image,
            pDocNombre: name,
            pDocExtension: cropExtension,
          }),
        }
      );

      const data = await response.json();

      if (data.pCodigoRespuesta == "00") {
        console.log("Respuesta Cedula", data);
      } else {
        console.log("Error Cedula", data);
        dispatch(changePage(5));
      }
    } catch (error) {
      dispatch(changePage(5));
    }
  }

  async function AltaContratoGestion() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/AltaContratoGestion`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pUsuario: import.meta.env.VITE_USUARIO,
            pPassword: import.meta.env.VITE_PASSWORD,
            pVentaOLId: ids.ventaId,
          }),
        }
      );

      const data = await response.json();

      if (data.pCodigoRespuesta === "00") {
        setContratoId(data.pContratoCodigo);
        dispatch(setCodContrato(data.pContratoCodigo));
        setSpinner(false);
      } else {
        console.log(data);
        dispatch(changePage(5));
      }
    } catch (error) {
      dispatch(changePage(5));
    }
  }

  async function ConfirmarRechazarContrato() {
    setSpinner(true);
    let userDoc = checkLengthCedula(usuario[0]);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_URL}/ConfirmarRechazarContrato`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pUsuario: import.meta.env.VITE_USUARIO,
            pPassword: import.meta.env.VITE_PASSWORD,
            pVentaOLId: ids.ventaId,
            pNroDoc: userDoc,
            pContratoCodigo: contratoId,
            pConfirmarRechazar: "C",
          }),
        }
      );

      const data = await response.json();

      if (data.pCodigoRespuesta === "00" || data.pMensajeRespuesta == "OK!") {
        dispatch(changePage(6));
        setSpinner(false);
      } else {
        console.log(data);
        dispatch(changePage(5));
      }
    } catch (error) {
      dispatch(changePage(5));
    }
  }

  /* Download pdf */

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

  return (
    <>
      {spinner ? (
        <Loader lastStep={true} />
      ) : (
        <div className="step4">
          <div className="step4_container">
            <Header
              text="RESUMEN"
              bold="DEL PLAN"
              logo={simulador}
              plazo={plazo}
            />
            <StepsContainer step={4} />

            <div className="step4_innerContainer">
              <section>
                <h3 className="step4_title">
                  <span className="color_text">Resumen </span>del{" "}
                  <span className="gray">plan</span>
                </h3>
                <div className="step4_descriptionContainer">
                  <FontAwesomeIcon
                    className="step4_icon"
                    icon={faChevronRight}
                  />
                  <p className="step4_text">
                    <span className="color_text">Monto</span> a{" "}
                    <span className="gray">
                      recibir - {currency} {useFormatNumber(monto)}
                    </span>
                  </p>
                </div>
                <div className="step4_descriptionContainer">
                  <FontAwesomeIcon
                    className="step4_icon"
                    icon={faChevronRight}
                  />
                  <p className="step4_text">
                    <span className="color_text">Valor</span> de{" "}
                    <span className="gray">
                      cuota - {currency} {useFormatNumber(cuotas)}
                    </span>
                  </p>
                </div>
                <div className="step4_descriptionContainer">
                  <FontAwesomeIcon
                    className="step4_icon"
                    icon={faChevronRight}
                  />
                  <p className="step4_text">
                    <span className="color_text">Total</span> de{" "}
                    <span className="gray">cuotas - {plazo}</span>
                  </p>
                </div>
                {(simulador === "Pesos Ajustables" ||
                  simulador === "Diferencial Pesos Ajustables") && (
                  <div className="step4_descriptionContainer">
                    <FontAwesomeIcon
                      className="step4_icon"
                      icon={faChevronRight}
                    />
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
                  <FontAwesomeIcon
                    className="step4_icon"
                    icon={faChevronRight}
                  />
                  <p className="step4_text">
                    <span className="color_text">Número</span> del{" "}
                    <span className="gray">grupo - {infoGrupo?.Grupo}</span>
                  </p>
                </div>
                <div className="step4_descriptionContainer">
                  <FontAwesomeIcon
                    className="step4_icon"
                    icon={faChevronRight}
                  />
                  <p className="step4_text">
                    <span className="color_text">Cantidad</span> de{" "}
                    <span className="gray">
                      integrantes - {infoGrupo?.GrupoMiembros} personas
                    </span>
                  </p>
                </div>
                <div className="step4_descriptionContainer">
                  <FontAwesomeIcon
                    className="step4_icon"
                    icon={faChevronRight}
                  />
                  <p className="step4_text">
                    <span className="color_text">Plazo</span>{" "}
                    <span className="gray">
                      - {infoGrupo?.GrupoPlazo} meses
                    </span>
                  </p>
                </div>
              </section>
            </div>

            <h3 className="step4_title">
              <span className="color_text">Aceptación </span>de{" "}
              <span className="gray">condiciones</span>
            </h3>

            <div className="step4_labelContainer">
              <label className="step4_label">
                <input
                  type="checkbox"
                  checked={validatePdf[0]}
                  onChange={() => handleValidationsPdf(0)}
                />
              </label>

              <p
                className="step4_link"
                onClick={() =>
                  downloadPdf(
                    `${import.meta.env.VITE_PDF_1}${contratoId}.pdf`,
                    "CondicionesParticulares"
                  )
                }
              >
                Condiciones particulares, Anexos y Condiciones generales
              </p>
            </div>

            <div className="step4_labelContainer">
              <label className="step4_label">
                <input
                  type="checkbox"
                  checked={validatePdf[1]}
                  onChange={() => handleValidationsPdf(1)}
                />
              </label>
              <p
                className="step4_link"
                onClick={() =>
                  downloadPdf(
                    `${import.meta.env.VITE_PDF_2}${contratoId}.pdf`,
                    "ServiciosElectronicosYPoliticaDePrivacidad"
                  )
                }
              >
                Servicios Electrónicos y Política de Privacidad
              </p>
            </div>

            <h3 className="step4_title">
              <span className="color_text">Validación </span>del{" "}
              <span className="gray">celular</span>
            </h3>
            <SmsContainer
              setConfirmContract={setConfirmContract}
              validatePdf={validatePdf}
            />

            {infoGrupo.InfoGrupoProducto?.Observaciones != "" && (
              <>
                <h3 className="step4_title">
                  <span className="color_text">Observaciones </span>del{" "}
                  <span className="gray">contrato</span>
                </h3>
                <p className="step4_finalText">
                  {infoGrupo.InfoGrupoProducto?.Observaciones}
                </p>
              </>
            )}

            <div className="step4_buttonContainer">
              <div className="buttonContainer_steps">
                <p className="mobileOnly">Paso 4 de 4</p>
                <Button
                  text="Confirmar contrato"
                  click={() => ConfirmarRechazarContrato()}
                  disabled={confirmContract}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Step4;
