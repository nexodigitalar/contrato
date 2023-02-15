import "./InputForm.scss";

/* Hooks */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAmountUser } from "@/store/userSlice/userSlice";

/* Components */
import Input from "../../../components/Input/Input";
import InputFile from "../../../components/InputFile/InputFile";
import InputDate from "../../../components/InputDate/InputDate";

const InputForm = ({ initialValues, setInitialValues }) => {
  const [amountUsers, setAmountUsers] = useState(1);
  const usuarios = useSelector((state) => state.user.usuarios);
  const defaultAmount = useSelector((state) => state.user.cantidadUsuarios);
  const dispatch = useDispatch();

  useEffect(() => {
    handleInitialValues();
    if (defaultAmount != 1) {
      setAmountUsers(defaultAmount);
    }
  }, [amountUsers]);

  const handleInitialValues = () => {
    let originalValues = {
      cedula: "",
      ciFrente: "",
      ciDorso: "",
      primerNombre: "",
      segundoNombre: "",
      primerApellido: "",
      segundoApellido: "",
      fechaNacimiento: "",
      telefono: "",
      sexo: "",
      nacionalidad: "",
      email: "",
      pais: "",
      departamento: "",
      calle: "",
      puertaNumero: "",
      estadoCivil: "",
      residenteUruguayo: "",
      monedaIngreso: "",
      ingresosMensuales: "",
      empresaTrabaja: "",
      rubroEmpresa: "",
      actividadPrincipal: "",
      origenFondos: "",
    };

    if (!initialValues) {
      if (usuarios.length >= 1) {
        setAmountUsers(usuarios.length);
        setInitialValues(usuarios);
      } else {
        let newNumber = new Array(Number(amountUsers))
          .fill("")
          .map((_, i) => i + 1);

        let arrayValues = [];

        newNumber.map((page) => {
          arrayValues.push(originalValues);
        });

        setInitialValues(arrayValues);
      }
    } else {
      let newNumber = new Array(Number(amountUsers))
        .fill("")
        .map((_, i) => i + 1);

      let arrayValues = [...initialValues];

      /* Cut or add to the array depens of user */
      if (newNumber.length > arrayValues.length) {
        newNumber.map((page) => {
          if (page > arrayValues.length) {
            arrayValues.push(originalValues);
          }
        });
      } else if (newNumber.length < arrayValues.length) {
        arrayValues = arrayValues.slice(0, newNumber.length);
      }

      setInitialValues(arrayValues);
    }
  };

  const handleInput = (e, i) => {
    const updatedAreas = [...initialValues];
    updatedAreas[i] = {
      ...updatedAreas[i],
      [e.target.name]: e.target.value,
    };
    setInitialValues(updatedAreas);
  };

  const handleFiles = (e, i) => {
    const updatedAreas = [...initialValues];
    updatedAreas[i] = {
      ...updatedAreas[i],
      [e.target.name]: e.target.files[0],
    };
    setInitialValues(updatedAreas);
  };

  const handleDate = (value, i) => {
    const updatedAreas = [...initialValues];
    updatedAreas[i] = {
      ...updatedAreas[i],
      fechaNacimiento: value,
    };
    setInitialValues(updatedAreas);
  };

  return (
    <>
      {initialValues && (
        <section>
          <div className="inputForm_div">
            <select
              className="selectInput"
              onChange={(e) => {
                setAmountUsers(e.target.value),
                  dispatch(setAmountUser(e.target.value));
              }}
              defaultValue={defaultAmount != 1 ? defaultAmount : 1}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          {Array.from({ length: amountUsers }, (_, index) => (
            <div key={index}>
              <h3 className="step2_title">
                <span className="green">Datos </span>del{" "}
                <span className="gray">titular</span>
              </h3>

              <div className="inputForm2_div inputForm2_mobile">
                <Input
                  placeholder="* Cédula"
                  name="cedula"
                  value={initialValues[index]?.cedula || ""}
                  click={(e) => handleInput(e, index)}
                />
              </div>
              <div className="inputForm2_div inputForm_mobile">
                <InputFile
                  placeholder="Adjuntar frente de CI"
                  name="ciFrente"
                  selectedFile={initialValues[index]?.ciFrente.name}
                  click={(e) => handleFiles(e, index)}
                />
                <InputFile
                  placeholder="Adjuntar dorso de CI"
                  name="ciDorso"
                  selectedFile={initialValues[index]?.ciDorso.name}
                  click={(e) => handleFiles(e, index)}
                />
              </div>
              <div className="inputForm2_div">
                <Input
                  placeholder="* Primer Nombre"
                  name="primerNombre"
                  value={initialValues[index]?.primerNombre || ""}
                  click={(e) => handleInput(e, index)}
                />
                <Input
                  placeholder="Segundo Nombre"
                  name="segundoNombre"
                  value={initialValues[index]?.segundoNombre || ""}
                  click={(e) => handleInput(e, index)}
                />
              </div>
              <div className="inputForm2_div">
                <Input
                  placeholder="* Primer Apellido"
                  name="primerApellido"
                  value={initialValues[index]?.primerApellido || ""}
                  click={(e) => handleInput(e, index)}
                />
                <Input
                  placeholder="Segundo Apellido"
                  name="segundoApellido"
                  value={initialValues[index]?.segundoApellido || ""}
                  click={(e) => handleInput(e, index)}
                />
              </div>
              <div className="inputForm2_div inputForm_mobileColumn">
                <InputDate
                  placeholder="* Fecha de nacimiento"
                  name="fechaNacimiento"
                  value={initialValues[index]}
                  click={(value) => handleDate(value, index)}
                />
                <Input
                  placeholder="* Teléfono / Celular"
                  name="telefono"
                  value={initialValues[index]?.telefono || ""}
                  click={(e) => handleInput(e, index)}
                />
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default InputForm;
