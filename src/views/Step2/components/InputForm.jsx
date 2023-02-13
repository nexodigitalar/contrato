import "./InputForm.scss";

/* Hooks */
import { useState, useEffect } from "react";

/* Components */
import Input from "../../../components/Input/Input";
import InputFile from "../../../components/InputFile/InputFile";
import SelectInput from "@/components/SelectInput/SelectInput";
import InputDate from "../../../components/InputDate/InputDate";

const InputForm = () => {
  const [initialValues, setInitialValues] = useState(undefined);
  const [amountUsers, setAmountUsers] = useState(1);

  useEffect(() => {
    handleInitialValues();
  }, [amountUsers]);

  const handleInitialValues = () => {
    if (!initialValues) {
      let newNumber = new Array(Number(amountUsers))
        .fill("")
        .map((_, i) => i + 1);

      let originalValues = {
        cedula: "",
        ciFrente: null,
        ciDorso: null,
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        fechaNacimiento: "",
        telefono: "",
      };
      let arrayValues = [];

      newNumber.map((page) => {
        arrayValues.push(originalValues);
      });

      setInitialValues(arrayValues);
    } else {
      let newNumber = new Array(Number(amountUsers))
        .fill("")
        .map((_, i) => i + 1);

      let originalValues = {
        cedula: "",
        ciFrente: null,
        ciDorso: null,
        primerNombre: "",
        segundoNombre: "",
        primerApellido: "",
        segundoApellido: "",
        fechaNacimiento: "",
        telefono: "",
      };
      let arrayValues = [...initialValues];

      /* Cut or add to the array depens of user */
      if (newNumber.length > arrayValues.length) {
        newNumber.map((page) => {
          if (page > arrayValues.length) {
            console.log(page);
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
    console.log(initialValues);
  };

  const handleFiles = (e, i) => {
    const updatedAreas = [...initialValues];
    updatedAreas[i] = {
      ...updatedAreas[i],
      [e.target.name]: e.target.files[0],
    };
    setInitialValues(updatedAreas);
    console.log(updatedAreas);
  };

  const handleDate = (value, i) => {
    const updatedAreas = [...initialValues];
    updatedAreas[i] = {
      ...updatedAreas[i],
      fechaNacimiento: value,
    };
    setInitialValues(updatedAreas);
    console.log(updatedAreas);
  };

  return (
    <>
      {initialValues && (
        <section>
          <div className="inputForm_div">
            <SelectInput click={(e) => setAmountUsers(e.target.value)} />
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
                  click={(e) => handleInput(e, index)}
                />
              </div>
              <div className="inputForm2_div inputForm_mobile">
                <InputFile
                  placeholder="Adjuntar frente de CI"
                  name="ciFrente"
                  selectedFile={initialValues[index]}
                  click={(e) => handleFiles(e, index)}
                />
                <InputFile
                  placeholder="Adjuntar dorso de CI"
                  name="ciDorso"
                  selectedFile={initialValues[index]}
                  click={(e) => handleFiles(e, index)}
                />
              </div>
              <div className="inputForm2_div">
                <Input
                  placeholder="* Primer Nombre"
                  name="primerNombre"
                  click={(e) => handleInput(e, index)}
                />
                <Input
                  placeholder="Segundo Nombre"
                  name="segundoNombre"
                  click={(e) => handleInput(e, index)}
                />
              </div>
              <div className="inputForm2_div">
                <Input
                  placeholder="* Primer Apellido"
                  name="primerApellido"
                  click={(e) => handleInput(e, index)}
                />
                <Input
                  placeholder="Segundo Apellido"
                  name="segundoApellido"
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
