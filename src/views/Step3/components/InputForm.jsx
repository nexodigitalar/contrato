import "./InputForm.scss";

/* Components */
import Input from "@/components/Input/Input";
import SelectInput from "@/components/SelectInput/SelectInput";
import SelectMap from "@/components/SelectMap/SelectMap";
import InputCheck from "../../../components/InputCheck/InputCheck";

/* Hooks */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsers } from "@/store/userSlice/userSlice";
import useValidate from "@/hooks/useValidate";

import countries from "@/utils/countries.json";
import departamentos from "@/utils/departamentos.json";

const InputForm = ({ index, setAmountValidations, amountValidations }) => {
  const [checkUruguayo, setCheckUruguayo] = useState(true);
  const [check, setCheck] = useState(false);
  const usuario = useSelector((state) => state.user.usuarios);
  const savedValidations = useSelector((state) => state.validation.step3);
  const dispatch = useDispatch();
  const defaultAmount = useSelector((state) => state.user.cantidadUsuarios);

  useEffect(() => {
    handleInitialValidations();
    handleSetInputs(index);
  }, []);

  const handleInitialValidations = () => {
    let values = {
      sexo: "",
      nacionalidad: "",
      email: true,
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

  const handleSetInputs = (i) => {
    usuario[i]?.residenteUruguayo === "No"
      ? setCheckUruguayo(false)
      : setCheckUruguayo(true);
    usuario[i]?.pep === "No" ? setCheck(false) : setCheck(true);
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
        newObj = { ...newObj, ["departamento"]: false };
        newArr[i] = newObj;
        setAmountValidations(newArr);
      }
    }
    if (usuario[i])
      dispatch(
        updateUsers({ name: e.target.name, index: i, value: e.target.value })
      );
  };

  const handleCheckboxUruguayo = (i) => {
    setCheckUruguayo(!checkUruguayo);
    dispatch(updateUsers({ name: "pep", index: i, value: checkUruguayo }));
  };

  const handleCheckbox = (i) => {
    setCheck(!check);
    let newValue = !check === false ? "No" : "Si";
    dispatch(
      updateUsers({ name: "residenteUruguayo", index: i, value: newValue })
    );
  };

  return (
    <>
      {usuario && (
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
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "sexo",
                  setAmountValidations
                )
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
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "nacionalidad",
                    setAmountValidations
                  );
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
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "email",
                    setAmountValidations
                  );
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
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "pais",
                  setAmountValidations
                )
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
                  handleInput(e, index),
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "departamento",
                      setAmountValidations
                    );
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
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "departamento",
                      setAmountValidations
                    );
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
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "calle",
                    setAmountValidations
                  );
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
              type="text"
              click={(e) => {
                handleInput(e, index),
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "puertaNumero",
                    setAmountValidations
                  );
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
            <SelectInput
              placeholder="* Estado Civíl"
              name="estadoCivil"
              usuario={usuario}
              index={index}
              op1="Soltero/a"
              op2="Casado/a"
              op3="Divorciado/a"
              op4="Viudo/a"
              error={amountValidations[index]?.estadoCivil}
              click={(e) =>
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "estadoCivil",
                  setAmountValidations
                )
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
              check={checkUruguayo}
              click={() => handleCheckboxUruguayo(index)}
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
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "monedaIngreso",
                  setAmountValidations
                )
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
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "ingresosMensuales",
                    setAmountValidations
                  );
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
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "empresaTrabaja",
                    setAmountValidations
                  );
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
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "rubroEmpresa",
                    setAmountValidations
                  );
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
              placeholder="* Actividad principal"
              name="actividadPrincipal"
              value={usuario[index]?.actividadPrincipal || ""}
              error={amountValidations[index]?.actividadPrincipal}
              click={(e) => {
                handleInput(e, index),
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "actividadPrincipal",
                    setAmountValidations
                  );
              }}
              onfocusout={(e) => {
                useValidate(
                  e.target.value,
                  amountValidations,
                  index,
                  "actvidadPrincipal",
                  setAmountValidations
                );
              }}
            />
            <Input
              placeholder="* Origen de fondos"
              name="origenFondos"
              value={usuario[index]?.origenFondos || ""}
              error={amountValidations[index]?.origenFondos}
              type="text"
              click={(e) => {
                handleInput(e, index),
                  useValidate(
                    e.target.value,
                    amountValidations,
                    index,
                    "origenFondos",
                    setAmountValidations
                  );
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
                checked={check}
                onChange={() => handleCheckbox(index)}
              />
              Marcar la opción en caso de que usted haya desempeñado o
              desempeña, o parientes suyos dentro del primer grado de
              consanguinidad, funciones públicas o cargos políticos.
            </label>
          </div>
          <p className="inputForm_mandatory">* Campos obligatorios</p>
        </section>
      )}
    </>
  );
};

export default InputForm;
