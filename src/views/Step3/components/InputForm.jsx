import "./InputForm.scss";

/* Components */
import Input from "@/components/Input/Input";
import SelectInput from "@/components/SelectInput/SelectInput";
import SelectMap from "@/components/SelectMap/SelectMap";
import InputCheck from "../../../components/InputCheck/InputCheck";

/* Hooks */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsers } from "@/store/userSlice/userSlice";
import useValidate from "@/hooks/useValidate";

import countries from "@/utils/countries.json";
import departamentos from "@/utils/departamentos.json";
import tipoIngreso from "@/utils/tipoIngreso.json";
import estadoCivil from "@/utils/estadoCivil.json";
import actividad from "@/utils/actividad.json";
import InputDate from "../../../components/InputDate/InputDate";

const InputForm = ({ index, setAmountValidations, amountValidations }) => {
  const usuario = useSelector((state) => state.user.usuarios);
  const savedValidations = useSelector((state) => state.validation.step3);
  const dispatch = useDispatch();
  const defaultAmount = useSelector((state) => state.user.cantidadUsuarios);

  useEffect(() => {
    handleInitialValidations();
  }, []);

  const handleInitialValidations = () => {
    let values = {
      sexo: "",
      nacionalidad: true,
      email: "",
      pais: "",
      departamento: "",
      calle: "",
      puertaNumero: "",
      estadoCivil: "",
      residenteUruguayo: true,
      monedaIngreso: "",
      ingresosMensuales: "",
      empresaTrabaja: "",
      rubroEmpresa: "",
      cargoEmpresa: "",
      actividadPrincipal: "",
      origenFondos: "",
      pep: true,
    };

    if (amountValidations.length === 0) {
      if (savedValidations.length != 0) {
        let reduxCopy = JSON.parse(JSON.stringify(savedValidations));
        if (defaultAmount === reduxCopy.length) {
          setAmountValidations(reduxCopy);
        } else {
          let copyAmountValidations = [...reduxCopy];

          if (defaultAmount > reduxCopy.length) {
            let sum = defaultAmount - reduxCopy.length;

            let arraySum = new Array(sum).fill("").map((_, i) => i + 1);
            arraySum.forEach((n) => copyAmountValidations.push(values));

            setAmountValidations(copyAmountValidations);
          } else {
            let newArr = copyAmountValidations.slice(0, defaultAmount);
            setAmountValidations(newArr);
          }
        }
      } else {
        let newArr = [];
        Array.from({ length: usuario.length }, (_, index) =>
          newArr.push(values)
        );

        newArr[0].email = true;

        setAmountValidations(newArr);
      }
    }
  };

  const handleInput = (e, i) => {
    dispatch(
      updateUsers({ name: e.target.name, index: i, value: e.target.value })
    );
  };

  const handleInputPais = (e, i) => {
    if (e.target.value === "Uruguay") {
      let findDepartamento = departamentos.find(
        (item) => item.name === usuario[i]["departamento"]
      );
      if (!findDepartamento) {
        dispatch(updateUsers({ name: e.target.name, index: i, value: "" }));
        let newArr = [...amountValidations];
        let newObj = newArr[i];
        newObj = { ...newObj, ["departamento"]: "" };
        newArr[i] = newObj;
        setAmountValidations(newArr);
      }
    }
    if (usuario[i])
      dispatch(
        updateUsers({ name: e.target.name, index: i, value: e.target.value })
      );
  };

  const handleCheckbox = (e, name, i) => {
    const { checked } = e.target;
    dispatch(updateUsers({ name: name, index: i, value: checked }));
  };

  const handleCedula = (e, i) => {
    let editNumber = e.target.value;
    let checkMark = editNumber.includes("-");
    if (checkMark) editNumber = editNumber.replaceAll("-", "");
    let validationCedula = editNumber.match(/^\d+$/);

    if (validationCedula || editNumber === "") {
      editNumber =
        editNumber.slice(0, editNumber.length - 1) +
        "-" +
        editNumber.slice(editNumber.length - 1);

      dispatch(
        updateUsers({ name: e.target.name, index: i, value: editNumber })
      );
    }
  };

  const handleDate = (value, i) => {
    const event = new Date(value);
    /* Hay que comentarlo para webtest */
    /*   event.setUTCHours(0, 0, 0, 0); */
    const newDate = new Date(event).toISOString().replace("Z", "");

    dispatch(
      updateUsers({ name: "fechaNacimientoConyuge", index: i, value: newDate })
    );
  };

  const checkEstadoCivil = (value, index) => {
    let newArr = [...amountValidations];

    if (value === "Casado/a" || value === "Concubino/a") {
      let newObj = newArr[index];
      newObj = {
        ...newObj,
        cedulaConyuge: "",
        fechaNacimientoConyuge: "",
        primerNombreConyuge: "",
        primerApellidoConyuge: "",
        actividadPrincipalConyuge: "",
      };
      newArr[index] = newObj;

      setAmountValidations(newArr);
    } else {
      delete newArr[index].cedulaConyuge;
      delete newArr[index].fechaNacimientoConyuge;
      delete newArr[index].primerNombreConyuge;
      delete newArr[index].primerApellidoConyuge;
      delete newArr[index].actividadPrincipalConyuge;

      setAmountValidations(newArr);
    }
  };

  return (
    <>
      {usuario && amountValidations && (
        <section>
          <h3 className="inputForm_title">
            <span className="color_text">Datos </span>de{" "}
            <span className="gray">{usuario[index]?.primerNombre}</span>
          </h3>

          <div className="inputForm_div">
            <SelectInput
              placeholder="* Sexo"
              name="sexo"
              usuario={usuario}
              index={index}
              op1="Femenino"
              op2="Masculino"
              error={amountValidations[index]?.sexo}
              click={(e) =>
                setTimeout(() => {
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "sexo",
                    setAmountValidations
                  );
                }, 800)
              }
              change={(e) => {
                {
                  handleInput(e, index),
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "sexo",
                      setAmountValidations
                    );
                }
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "sexo",
                  setAmountValidations
                );
              }}
            />
            <Input
              placeholder="* Nacionalidad"
              name="nacionalidad"
              value={usuario[index]?.nacionalidad || ""}
              error={amountValidations[index]?.nacionalidad}
              type="text"
              click={(e) => {
                handleInput(e, index),
                  setTimeout(() => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "nacionalidad",
                      setAmountValidations
                    );
                  }, 400);
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "nacionalidad",
                  setAmountValidations
                );
              }}
            />
          </div>
          <div className="inputForm_div inputForm_div_mobile">
            <Input
              placeholder="* Email"
              name="email"
              value={usuario[index]?.email || ""}
              error={amountValidations[index]?.email}
              type="email"
              click={(e) => {
                handleInput(e, index),
                  setTimeout(() => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "email",
                      setAmountValidations
                    );
                  }, 400);
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "email",
                  setAmountValidations
                );
              }}
            />
          </div>

          <div className="inputForm_div">
            <SelectMap
              placeholder="* País"
              toMap={countries}
              name="pais"
              usuario={usuario}
              index={index}
              error={amountValidations[index]?.pais}
              click={(e) =>
                setTimeout(() => {
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "pais",
                    setAmountValidations
                  );
                }, 800)
              }
              change={(e) => {
                {
                  handleInputPais(e, index),
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "pais",
                      setAmountValidations
                    );
                }
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "pais",
                  setAmountValidations
                );
              }}
            />
            {usuario[index]?.pais === "Uruguay" ? (
              <SelectMap
                toMap={departamentos}
                usuario={usuario}
                index={index}
                error={amountValidations[index]?.departamento}
                placeholder="* Departamento"
                name="departamento"
                change={(e) => {
                  {
                    handleInput(e, index),
                      useValidate(
                        e.target.value,
                        amountValidations,
                        index,
                        "departamento",
                        setAmountValidations
                      );
                  }
                }}
                click={(e) => {
                  setTimeout(() => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "departamento",
                      setAmountValidations
                    );
                  }, 800);
                }}
                onfocusout={(e) => {
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "departamento",
                    setAmountValidations
                  );
                }}
              />
            ) : (
              <Input
                placeholder="* Departamento"
                name="departamento"
                value={usuario[index]?.departamento || ""}
                error={amountValidations[index]?.departamento}
                type="text"
                click={(e) => {
                  handleInput(e, index),
                    setTimeout(() => {
                      useValidate(
                        e.target.value,
                        amountValidations,
                        index,
                        "departamento",
                        setAmountValidations
                      );
                    }, 400);
                }}
                onfocusout={(e) => {
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "departamento",
                    setAmountValidations
                  );
                }}
              />
            )}
          </div>
          <div className="inputForm_div">
            <Input
              placeholder="* Calle"
              name="calle"
              value={usuario[index]?.calle || ""}
              error={amountValidations[index]?.calle}
              type="text"
              click={(e) => {
                handleInput(e, index),
                  setTimeout(() => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "calle",
                      setAmountValidations
                    );
                  }, 400);
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "calle",
                  setAmountValidations
                );
              }}
            />
            <Input
              placeholder="* Puerta Número"
              name="puertaNumero"
              value={usuario[index]?.puertaNumero || ""}
              error={amountValidations[index]?.puertaNumero}
              type="number"
              click={(e) => {
                handleInput(e, index),
                  setTimeout(() => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "puertaNumero",
                      setAmountValidations
                    );
                  }, 400);
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "puertaNumero",
                  setAmountValidations
                );
              }}
            />
          </div>
          <div className="inputForm_div">
            <SelectMap
              placeholder="* Estado Civíl"
              toMap={estadoCivil}
              name="estadoCivil"
              usuario={usuario}
              index={index}
              error={amountValidations[index]?.estadoCivil}
              click={(e) =>
                setTimeout(() => {
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "estadoCivil",
                    setAmountValidations
                  );
                }, 800)
              }
              change={(e) => {
                {
                  handleInput(e, index),
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "estadoCivil",
                      setAmountValidations
                    );
                  checkEstadoCivil(e.target.value, index);
                }
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "estadoCivil",
                  setAmountValidations
                );
              }}
            />
            <InputCheck
              checked={usuario[index]?.residenteUruguayo}
              onChange={(e) => handleCheckbox(e, "residenteUruguayo", index)}
            />
          </div>
          <div className="inputForm_div">
            <SelectInput
              placeholder="* Moneda Ingreso"
              name="monedaIngreso"
              usuario={usuario}
              index={index}
              op1="Pesos Uruguayos"
              op2="Dólares Americanos"
              error={amountValidations[index]?.monedaIngreso}
              click={(e) =>
                setTimeout(() => {
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "monedaIngreso",
                    setAmountValidations
                  );
                }, 800)
              }
              change={(e) => {
                {
                  handleInput(e, index),
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "monedaIngreso",
                      setAmountValidations
                    );
                }
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "monedaIngreso",
                  setAmountValidations
                );
              }}
            />
            <Input
              placeholder="* Ingresos mensuales"
              name="ingresosMensuales"
              value={usuario[index]?.ingresosMensuales || ""}
              error={amountValidations[index]?.ingresosMensuales}
              type="number"
              click={(e) => {
                handleInput(e, index),
                  setTimeout(() => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "ingresosMensuales",
                      setAmountValidations
                    );
                  }, 400);
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "ingresosMensuales",
                  setAmountValidations
                );
              }}
            />
          </div>
          <div className="inputForm_div">
            <Input
              placeholder="* Empresa en la que trabaja"
              name="empresaTrabaja"
              value={usuario[index]?.empresaTrabaja || ""}
              error={amountValidations[index]?.empresaTrabaja}
              type="text"
              click={(e) => {
                handleInput(e, index),
                  setTimeout(() => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "empresaTrabaja",
                      setAmountValidations
                    );
                  }, 400);
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "empresaTrabaja",
                  setAmountValidations
                );
              }}
            />
            <Input
              placeholder="* Rubro de la Empresa"
              name="rubroEmpresa"
              value={usuario[index]?.rubroEmpresa || ""}
              error={amountValidations[index]?.rubroEmpresa}
              type="text"
              click={(e) => {
                handleInput(e, index),
                  setTimeout(() => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "rubroEmpresa",
                      setAmountValidations
                    );
                  }, 400);
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "rubroEmpresa",
                  setAmountValidations
                );
              }}
            />
          </div>
          <div className="inputForm_div">
            <Input
              placeholder="* Cargo en Empresa"
              name="cargoEmpresa"
              value={usuario[index]?.cargoEmpresa || ""}
              error={amountValidations[index]?.cargoEmpresa}
              type="text"
              click={(e) => {
                handleInput(e, index),
                  setTimeout(() => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "cargoEmpresa",
                      setAmountValidations
                    );
                  }, 400);
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "cargoEmpresa",
                  setAmountValidations
                );
              }}
            />
          </div>
          <div className="inputForm_div">
            <SelectMap
              placeholder="* Actividad principal"
              toMap={actividad}
              name="actividadPrincipal"
              usuario={usuario}
              index={index}
              error={amountValidations[index]?.actividadPrincipal}
              click={(e) =>
                setTimeout(() => {
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "actividadPrincipal",
                    setAmountValidations
                  );
                }, 800)
              }
              change={(e) => {
                {
                  handleInput(e, index),
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "actividadPrincipal",
                      setAmountValidations
                    );
                }
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "actividadPrincipal",
                  setAmountValidations
                );
              }}
            />

            <SelectMap
              placeholder="* Tipo de ingreso"
              toMap={tipoIngreso}
              name="origenFondos"
              usuario={usuario}
              index={index}
              error={amountValidations[index]?.origenFondos}
              click={(e) =>
                setTimeout(() => {
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "origenFondos",
                    setAmountValidations
                  );
                }, 800)
              }
              change={(e) => {
                {
                  handleInput(e, index),
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "origenFondos",
                      setAmountValidations
                    );
                }
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "origenFondos",
                  setAmountValidations
                );
              }}
            />
          </div>
          <div className="inputForm_labelContainer">
            <label className="step3_label">
              <input
                type="checkbox"
                value="second_checkbox"
                checked={usuario[index]?.pep}
                onChange={(e) => handleCheckbox(e, "pep", index)}
              />
              Marcar la opción en caso de que usted o parientes suyos dentro del
              primer grado de consanguinidad desempeñen o hayan desempeñado
              funciones públicas o cargos políticos.
            </label>
          </div>

          {/* Conyuge */}
          {(usuario[index].estadoCivil === "Casado/a" ||
            usuario[index].estadoCivil === "Concubino/a") && (
            <section>
              <h3 className="inputForm_title">
                <span className="color_text">Datos </span>del Conyuge de{" "}
                <span className="gray">{usuario[index]?.primerNombre}</span>
              </h3>

              <div className="inputForm_div">
                <Input
                  max={true}
                  placeholder="* Cédula"
                  name="cedulaConyuge"
                  value={usuario[index]?.cedulaConyuge || ""}
                  error={amountValidations[index]?.cedulaConyuge}
                  type="text"
                  click={(e) => {
                    handleCedula(e, index),
                      setTimeout(() => {
                        useValidate(
                          e.target.value,
                          amountValidations,
                          index,
                          "cedulaConyuge",
                          setAmountValidations,
                          null,
                          null,
                          usuario[index].cedula
                        );
                      }, 400);
                  }}
                  onfocusout={(e) => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "cedulaConyuge",
                      setAmountValidations,
                      null,
                      null,
                      usuario[index].cedula
                    );
                  }}
                />
                <InputDate
                  placeholder="* Fecha de nacimiento"
                  name="fechaNacimientoConyuge"
                  valueFecha={usuario[index]?.fechaNacimientoConyuge}
                  error={amountValidations[index]?.fechaNacimientoConyuge}
                  click={(value) => {
                    handleDate(value, index),
                      useValidate(
                        value,
                        amountValidations,
                        index,
                        "fechaNacimientoConyuge",
                        setAmountValidations
                      );
                  }}
                />
              </div>
              <div className="inputForm_div">
                <Input
                  placeholder="* Primer Nombre"
                  name="primerNombreConyuge"
                  value={usuario[index]?.primerNombreConyuge || ""}
                  error={amountValidations[index]?.primerNombreConyuge}
                  type="text"
                  click={(e) => {
                    handleInput(e, index),
                      setTimeout(() => {
                        useValidate(
                          e.target.value,
                          amountValidations,
                          index,
                          "primerNombreConyuge",
                          setAmountValidations
                        );
                      }, 400);
                  }}
                  onfocusout={(e) => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "primerNombreConyuge",
                      setAmountValidations
                    );
                  }}
                />
                <Input
                  placeholder="Segundo Nombre"
                  name="segundoNombreConyuge"
                  value={usuario[index]?.segundoNombreConyuge || ""}
                  type="text"
                  click={(e) => handleInput(e, index)}
                />
              </div>
              <div className="inputForm_div">
                <Input
                  placeholder="* Primer Apellido"
                  name="primerApellidoConyuge"
                  value={usuario[index]?.primerApellidoConyuge || ""}
                  error={amountValidations[index]?.primerApellidoConyuge}
                  type="text"
                  click={(e) => {
                    handleInput(e, index),
                      setTimeout(() => {
                        useValidate(
                          e.target.value,
                          amountValidations,
                          index,
                          "primerApellidoConyuge",
                          setAmountValidations
                        );
                      }, 400);
                  }}
                  onfocusout={(e) => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "primerApellidoConyuge",
                      setAmountValidations
                    );
                  }}
                />
                <Input
                  placeholder="Segundo Apellido"
                  name="segundoApellidoConyuge"
                  value={usuario[index]?.segundoApellidoConyuge || ""}
                  type="text"
                  click={(e) => handleInput(e, index)}
                />
              </div>
              <div className="inputForm_div">
                <SelectMap
                  placeholder="* Actividad principal"
                  toMap={actividad}
                  name="actividadPrincipalConyuge"
                  usuario={usuario}
                  index={index}
                  error={amountValidations[index]?.actividadPrincipalConyuge}
                  click={(e) =>
                    setTimeout(() => {
                      useValidate(
                        e.target.value,
                        amountValidations,
                        index,
                        "actividadPrincipalConyuge",
                        setAmountValidations
                      );
                    }, 800)
                  }
                  change={(e) => {
                    {
                      handleInput(e, index),
                        useValidate(
                          e.target.value,
                          amountValidations,
                          index,
                          "actividadPrincipalConyuge",
                          setAmountValidations
                        );
                    }
                  }}
                  onfocusout={(e) => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "actividadPrincipalConyuge",
                      setAmountValidations
                    );
                  }}
                />
              </div>
            </section>
          )}
        </section>
      )}
    </>
  );
};

export default InputForm;
