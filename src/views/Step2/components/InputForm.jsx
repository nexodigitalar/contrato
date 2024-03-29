import "./InputForm.scss";

/* Hooks */
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAmountUser } from "@/store/userSlice/userSlice";
import useValidate from "@/hooks/useValidate";
import useValidateContact from "@/hooks/useValidateContact";

/* Components */
import Input from "../../../components/Input/Input";
import InputFile from "../../../components/InputFile/InputFile";
import InputDate from "../../../components/InputDate/InputDate";
import SelectPhone from "../../../components/SelectPhone/SelectPhone";
import InputPhone from "../../../components/InputPhone/InputPhone";

const InputForm = ({
  initialValues,
  setInitialValues,
  amountValidations,
  setAmountValidations,
  setImages,
  images,
}) => {
  const [amountUsers, setAmountUsers] = useState(1);
  const [messageFile, setMessageFile] = useState([
    {
      frente: "Campo obligatorio",
      dorso: "Campo obligatorio",
    },
  ]);
  const [ejecuteValidation, setEjecuteValidation] = useState(false);
  const [messagePhone, setMessagePhone] = useState(["Campo obligatorio"]);
  const [messageCedula, setMessageCedula] = useState(["Campo obligatorio"]);
  const usuarios = useSelector((state) => state.user.usuarios);
  const defaultAmount = useSelector((state) => state.user.cantidadUsuarios);
  const savedValidations = useSelector((state) => state.validation.step2);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const [titles] = useState([
    "primer",
    "segundo",
    "tercer",
    "cuarto",
    "quinto",
  ]);

  useEffect(() => {
    handleInitialValidations();
    handleInitialValues();
    if (defaultAmount != 1) {
      setAmountUsers(defaultAmount);
    }
    setEjecuteValidation(true);
  }, [amountUsers]);

  useEffect(() => {
    if (ejecuteValidation) onLoadCheckPhone();
  }, [ejecuteValidation]);

  const handleInput = (e, i) => {
    const updatedAreas = [...initialValues];
    updatedAreas[i] = {
      ...updatedAreas[i],
      [e.target.name]: e.target.value,
    };
    setInitialValues(updatedAreas);
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

      const updatedAreas = [...initialValues];
      updatedAreas[i] = {
        ...updatedAreas[i],
        [e.target.name]: editNumber,
      };
      setInitialValues(updatedAreas);
    }
  };

  const handleFiles = (e, i) => {
    const updatedAreas = [...initialValues];
    updatedAreas[i] = {
      ...updatedAreas[i],
      [e.target.name]: e.target.files[0],
    };

    const updatedImg = [...images];
    updatedImg[i] = {
      ...updatedImg[i],
      [e.target.name]: e.target.files[0],
    };

    setImages(updatedImg);
    setInitialValues(updatedAreas);
  };

  const handleDate = (value, i) => {
    const event = new Date(value);
    /* Hay que comentarlo para webtest */
    event.setUTCHours(0, 0, 0, 0);
    const newDate = new Date(event).toISOString().replace("Z", "");

    const updatedAreas = [...initialValues];
    updatedAreas[i] = {
      ...updatedAreas[i],
      fechaNacimiento: newDate,
    };

    setInitialValues(updatedAreas);
  };

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
      telefonoCod: 598,
      telefono: "",
      sexo: "",
      nacionalidad: "Uruguayo",
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
      pep: false,
      cedulaConyuge: "",
      fechaNacimientoConyuge: "",
      primerNombreConyuge: "",
      segundoNombreConyue: "",
      primerApellidoConyuge: "",
      segundoApellidoConyuge: "",
      actividadPrincipalConyuge: "",
    };

    let imgValue = {
      ciFrente: "",
      ciDorso: "",
    };

    let fileMessages = {
      frente: "Campo obligatorio",
      dorso: "Campo obligatorio",
    };

    let phoneMessages = "Ingrese un número válido";
    let cedulaMessages = "Campo obligatorio";

    if (!initialValues) {
      if (usuarios.length >= 1) {
        setAmountUsers(usuarios.length);
        setInitialValues(usuarios);

        let arrayFilesMessages = [];
        let arrayPhoneMessages = [];
        let arrayCedulaMessages = [];

        let newNumber = new Array(Number(usuarios.length))
          .fill("")
          .map((_, i) => i + 1);

        newNumber.map((page) => {
          arrayFilesMessages.push(fileMessages);
          arrayPhoneMessages.push(phoneMessages);
          arrayCedulaMessages.push(cedulaMessages);
        });

        setMessagePhone(arrayPhoneMessages);
        setMessageCedula(arrayCedulaMessages);
        setMessageFile(arrayFilesMessages);
      } else {
        let newNumber = new Array(Number(amountUsers))
          .fill("")
          .map((_, i) => i + 1);

        let arrayValues = [];
        let imgValues = [];

        newNumber.map((page) => {
          arrayValues.push(originalValues);
        });

        newNumber.map((page) => {
          imgValues.push(imgValue);
        });

        arrayValues[0].primerNombre = data.nombre;
        arrayValues[0].primerApellido = data.apellido;
        arrayValues[0].email = data.email;
        arrayValues[0].telefono = data.telefono;

        setAmountValidations([
          {
            cedula: "",
            ciFrente: "",
            ciDorso: "",
            primerNombre: true,
            primerApellido: true,
            fechaNacimiento: "",
            telefono: true,
          },
        ]);

        setImages(imgValues);
        setInitialValues(arrayValues);
      }
    } else {
      let newNumber = new Array(Number(amountUsers))
        .fill("")
        .map((_, i) => i + 1);

      let arrayValues = [...initialValues];
      let imgValues = [...images];
      let arrayFilesMessages = [...messageFile];
      let arrayPhoneMessages = [...messagePhone];
      let arrayCedulaMessages = [...messageCedula];

      /* Cut or add to the array depens of amount of users */
      if (newNumber.length > arrayValues.length) {
        newNumber.map((page) => {
          if (page > arrayValues.length) {
            arrayValues.push(originalValues);
            imgValues.push(imgValue);
            arrayFilesMessages.push(fileMessages);
            arrayPhoneMessages.push(phoneMessages);
            arrayCedulaMessages.push(cedulaMessages);
          }
        });
      } else if (newNumber.length < arrayValues.length) {
        arrayValues = arrayValues.slice(0, newNumber.length);
        imgValues = imgValues.slice(0, newNumber.length);
        arrayFilesMessages = arrayFilesMessages.slice(0, newNumber.length);
        arrayPhoneMessages = arrayPhoneMessages.slice(0, newNumber.length);
        arrayCedulaMessages = arrayCedulaMessages.slice(0, newNumber.length);
      }

      setImages(imgValues);
      setInitialValues(arrayValues);
      setMessageFile(arrayFilesMessages);
      setMessagePhone(arrayPhoneMessages);
      setMessageCedula(arrayCedulaMessages);
    }
  };

  const handleInitialValidations = () => {
    let values = {
      cedula: "",
      ciFrente: "",
      ciDorso: "",
      primerNombre: "",
      primerApellido: "",
      fechaNacimiento: "",
      telefono: "",
    };

    if (amountValidations.length === 0) {
      if (savedValidations.length != 0) {
        let reduxCopy = JSON.parse(JSON.stringify(savedValidations));
        setAmountValidations(reduxCopy);
      } else {
        setAmountValidations([values]);
      }
    } else {
      let copyAmountValidations = [...amountValidations];

      if (amountUsers > amountValidations.length) {
        let sum = amountUsers - amountValidations.length;

        let arraySum = new Array(sum).fill("").map((_, i) => i + 1);
        arraySum.forEach((n) => copyAmountValidations.push(values));

        setAmountValidations(copyAmountValidations);
      } else {
        let newArr = copyAmountValidations.slice(0, amountUsers);
        setAmountValidations(newArr);
      }
    }
  };

  const onChangeTelCod = (i, value) => {
    if (initialValues[i]?.telefono != "") {
      useValidate(
        initialValues[i].telefono,
        amountValidations,
        i,
        "telefono",
        setAmountValidations,
        setMessagePhone,
        messagePhone,
        value
      );
    }
  };

  const onLoadCheckPhone = () => {
    let telCod = initialValues[0].telefonoCod
      ? initialValues[0].telefonoCod
      : 598;
    useValidate(
      initialValues[0].telefono,
      amountValidations,
      0,
      "telefono",
      setAmountValidations,
      setMessagePhone,
      messagePhone,
      telCod
    );
  };

  return (
    <>
      {initialValues && amountValidations.length != 0 && (
        <section>
          <div className="inputForm_div">
            <select
              className="selectInput"
              id="inputAmountUsers"
              onChange={(e) => {
                setAmountUsers(e.target.value);
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
            <div key={index} className="inputForm_innerContainer">
              <h3 className="step2_title">
                <span className="color_text">Datos </span>del {titles[index]}{" "}
                <span className="gray">titular</span>
              </h3>

              <div className="inputForm2_div inputForm2_mobile">
                <Input
                  max={true}
                  placeholder="* Cédula"
                  name="cedula"
                  value={initialValues[index]?.cedula || ""}
                  error={amountValidations[index]?.cedula}
                  type="text"
                  message={messageCedula[index]}
                  click={(e) => {
                    handleCedula(e, index),
                      setTimeout(() => {
                        useValidate(
                          e.target.value,
                          amountValidations,
                          index,
                          "cedula",
                          setAmountValidations,
                          setMessageCedula,
                          messageCedula
                        ),
                          useValidateContact(
                            e.target.value,
                            amountValidations,
                            index,
                            "cedula",
                            setAmountValidations,
                            setMessageCedula,
                            messageCedula,
                            initialValues,
                            "La cédula no puede estar repetida"
                          );
                      }, 400);
                  }}
                  onfocusout={(e) => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "cedula",
                      setAmountValidations,
                      setMessageCedula,
                      messageCedula
                    ),
                      useValidateContact(
                        e.target.value,
                        amountValidations,
                        index,
                        "cedula",
                        setAmountValidations,
                        setMessageCedula,
                        messageCedula,
                        initialValues,
                        "La cédula no puede estar repetida"
                      );
                  }}
                />
              </div>
              <div className="inputForm2_div inputForm_mobile">
                <InputFile
                  placeholder="* Adjuntar frente de CI"
                  name="ciFrente"
                  selectedFile={initialValues[index]?.ciFrente}
                  error={amountValidations[index]?.ciFrente}
                  message={messageFile[index]?.frente}
                  click={(e) =>
                    setTimeout(() => {
                      useValidate(
                        e.target.files,
                        amountValidations,
                        index,
                        "ciFrente",
                        setAmountValidations,
                        setMessageFile,
                        messageFile
                      );
                    }, 2000)
                  }
                  change={(e) => {
                    handleFiles(e, index),
                      useValidate(
                        e.target.files,
                        amountValidations,
                        index,
                        "ciFrente",
                        setAmountValidations,
                        setMessageFile,
                        messageFile
                      );
                  }}
                />
                <InputFile
                  placeholder="* Adjuntar dorso de CI"
                  name="ciDorso"
                  selectedFile={initialValues[index]?.ciDorso}
                  error={amountValidations[index]?.ciDorso}
                  message={messageFile[index]?.dorso}
                  click={(e) =>
                    setTimeout(() => {
                      useValidate(
                        e.target.files,
                        amountValidations,
                        index,
                        "ciDorso",
                        setAmountValidations,
                        setMessageFile,
                        messageFile
                      );
                    }, 2000)
                  }
                  change={(e) => {
                    handleFiles(e, index),
                      useValidate(
                        e.target.files,
                        amountValidations,
                        index,
                        "ciDorso",
                        setAmountValidations,
                        setMessageFile,
                        messageFile
                      );
                  }}
                />
              </div>
              <div className="inputForm2_div">
                <Input
                  placeholder="* Primer Nombre"
                  name="primerNombre"
                  value={initialValues[index]?.primerNombre || ""}
                  error={amountValidations[index]?.primerNombre}
                  type="text"
                  click={(e) => {
                    handleInput(e, index),
                      setTimeout(() => {
                        useValidate(
                          e.target.value,
                          amountValidations,
                          index,
                          "primerNombre",
                          setAmountValidations
                        );
                      }, 400);
                  }}
                  onfocusout={(e) => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "primerNombre",
                      setAmountValidations
                    );
                  }}
                />
                <Input
                  placeholder="Segundo Nombre"
                  name="segundoNombre"
                  value={initialValues[index]?.segundoNombre || ""}
                  type="text"
                  click={(e) => handleInput(e, index)}
                />
              </div>
              <div className="inputForm2_div">
                <Input
                  placeholder="* Primer Apellido"
                  name="primerApellido"
                  value={initialValues[index]?.primerApellido || ""}
                  error={amountValidations[index]?.primerApellido}
                  type="text"
                  click={(e) => {
                    handleInput(e, index),
                      setTimeout(() => {
                        useValidate(
                          e.target.value,
                          amountValidations,
                          index,
                          "primerApellido",
                          setAmountValidations
                        );
                      }, 400);
                  }}
                  onfocusout={(e) => {
                    useValidate(
                      e.target.value,
                      amountValidations,
                      index,
                      "primerApellido",
                      setAmountValidations
                    );
                  }}
                />
                <Input
                  placeholder="Segundo Apellido"
                  name="segundoApellido"
                  value={initialValues[index]?.segundoApellido || ""}
                  type="text"
                  click={(e) => handleInput(e, index)}
                />
              </div>
              <div className="inputForm2_div inputForm_mobileColumn">
                <InputDate
                  placeholder="* Fecha de nacimiento"
                  name="fechaNacimiento"
                  valueFecha={initialValues[index]?.fechaNacimiento}
                  error={amountValidations[index]?.fechaNacimiento}
                  click={(value) => {
                    handleDate(value, index),
                      useValidate(
                        value,
                        amountValidations,
                        index,
                        "fechaNacimiento",
                        setAmountValidations
                      );
                  }}
                />

                <div className="inputForm2_divPhone">
                  <SelectPhone
                    name="telefonoCod"
                    value={initialValues[index]?.telefonoCod}
                    index={index}
                    click={(e) =>
                      useValidate(
                        e.target.value,
                        amountValidations,
                        index,
                        "telefonoCod",
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
                            "telefonoCod",
                            setAmountValidations
                          ),
                          onChangeTelCod(index, e.target.value);
                      }
                    }}
                    onfocusout={(e) => {
                      useValidate(
                        e.target.value,
                        amountValidations,
                        index,
                        "telefonoCod",
                        setAmountValidations
                      );
                    }}
                  />

                  <InputPhone
                    placeholder="* Teléfono / Celular"
                    name="telefono"
                    value={initialValues[index]?.telefono || ""}
                    error={amountValidations[index]?.telefono}
                    type="number"
                    message={messagePhone[index]}
                    click={(e) => {
                      handleInput(e, index),
                        useValidate(
                          e.target.value,
                          amountValidations,
                          index,
                          "telefono",
                          setAmountValidations,
                          setMessagePhone,
                          messagePhone,
                          initialValues[index].telefonoCod
                        ),
                        useValidateContact(
                          e.target.value,
                          amountValidations,
                          index,
                          "telefono",
                          setAmountValidations,
                          setMessagePhone,
                          messagePhone,
                          initialValues,
                          "El teléfono no puede estar repetido"
                        );
                    }}
                    onfocusout={(e) => {
                      useValidate(
                        e.target.value,
                        amountValidations,
                        index,
                        "telefono",
                        setAmountValidations,
                        setMessagePhone,
                        messagePhone,
                        initialValues[index].telefonoCod
                      ),
                        useValidateContact(
                          e.target.value,
                          amountValidations,
                          index,
                          "telefono",
                          setAmountValidations,
                          setMessagePhone,
                          messagePhone,
                          initialValues,
                          "El teléfono no puede estar repetido"
                        );
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default InputForm;
