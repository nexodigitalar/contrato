import "./InputForm.scss";

/* Components */
import Input from "@/components/Input/Input";
import SelectInput from "@/components/SelectInput/SelectInput";
import InputCheck from "../../../components/InputCheck/InputCheck";

/* Hooks */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsers } from "@/store/userSlice/userSlice";
import useValidate from "@/hooks/useValidate";

const InputForm = ({ index, setAmountValidations, amountValidatios }) => {
  const [checkUruguayo, setCheckUruguayo] = useState(true);
  const [check, setCheck] = useState(false);
  const usuario = useSelector((state) => state.user.usuarios);
  const dispatch = useDispatch();

  useEffect(() => {
    handleSetInputs(index);
  }, []);

  const handleSetInputs = (i) => {
    usuario[i]?.residenteUruguayo === "No"
      ? setCheckUruguayo(false)
      : setCheckUruguayo(true);
    usuario[i]?.politicos === "No" ? setCheck(false) : setCheck(true);
  };

  const handleInput = (e, i) => {
    dispatch(
      updateUsers({ name: e.target.name, index: i, value: e.target.value })
    );
  };

  const handleCheckboxUruguayo = (i) => {
    setCheckUruguayo(!checkUruguayo);
    let newValue = !checkUruguayo === false ? "No" : "Si";
    dispatch(updateUsers({ name: "politicos", index: i, value: newValue }));
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
            <span className="green">Datos </span>de{" "}
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
              error={amountValidatios[index]?.sexo}
              click={(e) =>
                setTimeout(() => {
                  useValidate(
                    e.target.value,
                    amountValidatios,
                    index,
                    "sexo",
                    setAmountValidations
                  );
                }, 500)
              }
              change={(e) => {
                {
                  handleInput(e, index),
                    useValidate(
                      e.target.value,
                      amountValidatios,
                      index,
                      "sexo",
                      setAmountValidations
                    );
                }
              }}
            />
            <Input
              placeholder="* Nacionalidad"
              name="nacionalidad"
              value={usuario[index]?.nacionalidad || ""}
              error={amountValidatios[index]?.nacionalidad}
              type="text"
              click={(e) => {
                handleInput(e, index),
                  useValidate(
                    e.target.value,
                    amountValidatios,
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
              error={amountValidatios[index]?.email}
              type="email"
              click={(e) => {
                handleInput(e, index),
                  useValidate(
                    e.target.value,
                    amountValidatios,
                    index,
                    "email",
                    setAmountValidations
                  );
              }}
            />
          </div>

          <div className="inputForm_div">
            <SelectInput
              placeholder="* País"
              name="pais"
              usuario={usuario}
              index={index}
              op1="Uruguay"
              op2="Argentina"
              error={amountValidatios[index]?.pais}
              click={(e) =>
                setTimeout(() => {
                  useValidate(
                    e.target.value,
                    amountValidatios,
                    index,
                    "pais",
                    setAmountValidations
                  );
                }, 1000)
              }
              change={(e) => {
                {
                  handleInput(e, index),
                    useValidate(
                      e.target.value,
                      amountValidatios,
                      index,
                      "pais",
                      setAmountValidations
                    );
                }
              }}
            />
            <Input
              placeholder="* Departamento"
              name="departamento"
              value={usuario[index]?.departamento || ""}
              error={amountValidatios[index]?.departamento}
              type="text"
              click={(e) => {
                handleInput(e, index),
                  useValidate(
                    e.target.value,
                    amountValidatios,
                    index,
                    "departamento",
                    setAmountValidations
                  );
              }}
            />
          </div>
          <div className="inputForm_div">
            <Input
              placeholder="* Calle"
              name="calle"
              value={usuario[index]?.calle || ""}
              error={amountValidatios[index]?.calle}
              type="text"
              click={(e) => {
                handleInput(e, index),
                  useValidate(
                    e.target.value,
                    amountValidatios,
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
              error={amountValidatios[index]?.puertaNumero}
              type="text"
              click={(e) => {
                handleInput(e, index),
                  useValidate(
                    e.target.value,
                    amountValidatios,
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
              error={amountValidatios[index]?.estadoCivil}
              click={(e) =>
                setTimeout(() => {
                  useValidate(
                    e.target.value,
                    amountValidatios,
                    index,
                    "estadoCivil",
                    setAmountValidations
                  );
                }, 1000)
              }
              change={(e) => {
                {
                  handleInput(e, index),
                    useValidate(
                      e.target.value,
                      amountValidatios,
                      index,
                      "estadoCivil",
                      setAmountValidations
                    );
                }
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
              error={amountValidatios[index]?.monedaIngreso}
              click={(e) =>
                setTimeout(() => {
                  useValidate(
                    e.target.value,
                    amountValidatios,
                    index,
                    "monedaIngreso",
                    setAmountValidations
                  );
                }, 1000)
              }
              change={(e) => {
                {
                  handleInput(e, index),
                    useValidate(
                      e.target.value,
                      amountValidatios,
                      index,
                      "monedaIngreso",
                      setAmountValidations
                    );
                }
              }}
            />
            <Input
              placeholder="* Ingresos mensuales"
              name="ingresosMensuales"
              value={usuario[index]?.ingresosMensuales || ""}
              error={amountValidatios[index]?.ingresosMensuales}
              type="number"
              click={(e) => {
                handleInput(e, index),
                  useValidate(
                    e.target.value,
                    amountValidatios,
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
              error={amountValidatios[index]?.empresaTrabaja}
              type="text"
              click={(e) => {
                handleInput(e, index),
                  useValidate(
                    e.target.value,
                    amountValidatios,
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
              error={amountValidatios[index]?.rubroEmpresa}
              type="text"
              click={(e) => {
                handleInput(e, index),
                  useValidate(
                    e.target.value,
                    amountValidatios,
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
              error={amountValidatios[index]?.actividadPrincipal}
              click={(e) => {
                handleInput(e, index),
                  useValidate(
                    e.target.value,
                    amountValidatios,
                    index,
                    "actividadPrincipal",
                    setAmountValidations
                  );
              }}
            />
            <Input
              placeholder="* Origen de fondos"
              name="origenFondos"
              value={usuario[index]?.origenFondos || ""}
              error={amountValidatios[index]?.origenFondos}
              type="text"
              click={(e) => {
                handleInput(e, index),
                  useValidate(
                    e.target.value,
                    amountValidatios,
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
        </section>
      )}
    </>
  );
};

export default InputForm;
