import "./InputForm.scss";

/* Components */
import Input from "@/components/Input/Input";
import SelectInput from "@/components/SelectInput/SelectInput";
import InputCheck from "../../../components/InputCheck/InputCheck";

/* Hooks */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsers } from "@/store/userSlice/userSlice";

const InputForm = ({ index }) => {
  const [check, setCheck] = useState(false);
  const usuario = useSelector((state) => state.user.usuarios);
  const dispatch = useDispatch();

  useEffect(() => {
    handleSetInputs(index);
  }, []);

  const handleSetInputs = (i) => {
    if (usuario[i]?.residenteUruguayo != "") {
      setCheck(usuario[i].residenteUruguayo);
    }
  };

  const handleInput = (e, i) => {
    dispatch(
      updateUsers({ name: e.target.name, index: i, value: e.target.value })
    );
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
              click={(e) => handleInput(e, index)}
            />
            <Input
              placeholder="* Nacionalidad"
              name="nacionalidad"
              value={usuario[index]?.nacionalidad || ""}
              click={(e) => handleInput(e, index)}
            />
          </div>
          <div className="inputForm_div inputForm_div_mobile">
            <Input
              placeholder="* Email"
              name="email"
              value={usuario[index]?.email || ""}
              click={(e) => handleInput(e, index)}
            />
          </div>

          <div className="inputForm_div">
            <SelectInput
              placeholder="* País"
              name="pais"
              usuario={usuario}
              index={index}
              op1="Argentina"
              op2="Uruguay"
              click={(e) => handleInput(e, index)}
            />
            <Input
              placeholder="* Departamento"
              name="departamento"
              value={usuario[index]?.departamento || ""}
              click={(e) => handleInput(e, index)}
            />
          </div>
          <div className="inputForm_div">
            <Input
              placeholder="* Calle"
              name="calle"
              value={usuario[index]?.calle || ""}
              click={(e) => handleInput(e, index)}
            />
            <Input
              placeholder="* Puerta Número"
              name="puertaNumero"
              value={usuario[index]?.puertaNumero || ""}
              click={(e) => handleInput(e, index)}
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
              click={(e) => handleInput(e, index)}
            />
            <InputCheck check={check} click={() => handleCheckbox(index)} />
          </div>
          <div className="inputForm_div">
            <SelectInput
              placeholder="* Moneda Ingreso"
              name="monedaIngreso"
              usuario={usuario}
              index={index}
              op1="Pesos Uruguayos"
              op2="Dólares"
              click={(e) => handleInput(e, index)}
            />
            <Input
              placeholder="* Ingresos mensuales"
              name="ingresosMensuales"
              value={usuario[index]?.ingresosMensuales || ""}
              click={(e) => handleInput(e, index)}
            />
          </div>
          <div className="inputForm_div">
            <Input
              placeholder="* Empresa en la que trabaja"
              name="empresaTrabaja"
              value={usuario[index]?.empresaTrabaja || ""}
              click={(e) => handleInput(e, index)}
            />
            <Input
              placeholder="* Rubro de la Empresa"
              name="rubroEmpresa"
              value={usuario[index]?.rubroEmpresa || ""}
              click={(e) => handleInput(e, index)}
            />
          </div>
          <div className="inputForm_div">
            <SelectInput
              placeholder="* Actividad principal"
              name="actividadPrincipal"
              usuario={usuario}
              index={index}
              op1="Actividad 1"
              op2="Actividad 2"
              click={(e) => handleInput(e, index)}
            />
            <Input
              placeholder="* Origen de fondos"
              name="actividadPrincipal"
              value={usuario[index]?.actividadPrincipal || ""}
              click={(e) => handleInput(e, index)}
            />
          </div>
        </section>
      )}
    </>
  );
};

export default InputForm;
