import { useValidateCedula } from "@/hooks/useValidateCedula.js";

const useValidateInput = (
  e,
  amountValidations,
  index,
  position,
  setAmountValidations,
  setMessageError,
  messageError,
  initialValues
) => {
  let newArr = [...amountValidations];
  let newObj = newArr[index];

  if (e === "" || e === "placeholder") {
    newObj = { ...newObj, [position]: false };
    newArr[index] = newObj;
    setAmountValidations(newArr);
  } else {
    //Validar teléfono
    if (position === "telefono") {
      let lengthValidation = e.length <= 12 && e.length >= 8;

      if (lengthValidation) {
        if (initialValues == 598) {
          if (e[0] == 0 && e[1] == 9) {
            newObj = { ...newObj, [position]: true };
            newArr[index] = newObj;

            setAmountValidations(newArr);
          } else {
            const updatedFiles = [...messageError];
            updatedFiles[index] = "Ingrese una característica válida";
            setMessageError(updatedFiles);

            newObj = { ...newObj, [position]: false };
            newArr[index] = newObj;

            setAmountValidations(newArr);
          }
        } else {
          newObj = { ...newObj, [position]: true };
          newArr[index] = newObj;

          setAmountValidations(newArr);
        }
      } else {
        const updatedFiles = [...messageError];
        updatedFiles[index] = "Ingrese un número válido";
        setMessageError(updatedFiles);

        newObj = { ...newObj, [position]: false };
        newArr[index] = newObj;

        setAmountValidations(newArr);
      }
    } else if (position === "email") {
      // Validar Email
      let validationEmail = e.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      if (validationEmail) {
        newObj = { ...newObj, [position]: true };
        newArr[index] = newObj;

        setAmountValidations(newArr);
      } else {
        const updatedFiles = [...messageError];
        updatedFiles[index] = "Ingrese un email válido";
        setMessageError(updatedFiles);

        newObj = { ...newObj, [position]: false };
        newArr[index] = newObj;

        setAmountValidations(newArr);
      }
    } else if (position === "ciFrente" || position === "ciDorso") {
      // Validar archivos
      if (e.length == 0) {
        newObj = { ...newObj, [position]: false };
        newArr[index] = newObj;

        if (position === "ciFrente") {
          const updatedFiles = [...messageError];
          updatedFiles[index] = {
            ...updatedFiles[index],
            frente: "Campo obligatorio",
          };
          setMessageError(updatedFiles);
        } else {
          const updatedFiles = [...messageError];
          updatedFiles[index] = {
            ...updatedFiles[index],
            dorso: "Campo obligatorio",
          };
          setMessageError(updatedFiles);
        }

        setAmountValidations(newArr);
      } else {
        if (e[0].size > 5000000) {
          newObj = { ...newObj, [position]: false };
          newArr[index] = newObj;

          if (position === "ciFrente") {
            const updatedFiles = [...messageError];
            updatedFiles[index] = {
              ...updatedFiles[index],
              frente: "El archvio debe pesar menos de 5MB",
            };
            setMessageError(updatedFiles);
          } else {
            const updatedFiles = [...messageError];
            updatedFiles[index] = {
              ...updatedFiles[index],
              dorso: "El archvio debe pesar menos de 5MB",
            };
            setMessageError(updatedFiles);
          }

          setAmountValidations(newArr);
        } else {
          newObj = { ...newObj, [position]: true };
          newArr[index] = newObj;

          setAmountValidations(newArr);
        }
      }
    } else if (position === "cedula" || position === "cedulaConyuge") {
      let editNumber = e.replaceAll("-", "");
      let validate = useValidateCedula(editNumber);

      if (e === "" || e === "-") {
        const updatedFiles = [...messageError];
        updatedFiles[index] = "Campo obligatorio";
        setMessageError(updatedFiles);

        newObj = { ...newObj, [position]: false };
        newArr[index] = newObj;

        setAmountValidations(newArr);
      } else {
        if (validate) {
          if (position === "cedulaConyuge") {
            if (e == initialValues) {
              const updatedFiles = [...messageError];
              updatedFiles[index] = "La cédula no puede estar repetida";
              setMessageError(updatedFiles);

              newObj = { ...newObj, [position]: false };
              newArr[index] = newObj;

              setAmountValidations(newArr);
            } else {
              newObj = { ...newObj, [position]: true };
              newArr[index] = newObj;
              setAmountValidations(newArr);
            }
          } else {
            newObj = { ...newObj, [position]: true };
            newArr[index] = newObj;
            setAmountValidations(newArr);
          }
        } else {
          const updatedFiles = [...messageError];
          updatedFiles[index] = "Ingrese una cédula válida";
          setMessageError(updatedFiles);

          newObj = { ...newObj, [position]: false };
          newArr[index] = newObj;

          setAmountValidations(newArr);
        }
      }
    } else if (
      position === "fechaNacimiento" ||
      position === "fechaNacimientoConyuge"
    ) {
      const date = new Date();
      let minDate = date.setFullYear(date.getFullYear() - 18);
      if (e <= minDate) {
        newObj = { ...newObj, [position]: true };
        newArr[index] = newObj;

        setAmountValidations(newArr);
      } else {
        newObj = { ...newObj, [position]: false };
        newArr[index] = newObj;

        setAmountValidations(newArr);
      }
    } else {
      // Validar el resto
      if (e === false) {
        return;
      } else {
        newObj = { ...newObj, [position]: true };
        newArr[index] = newObj;

        setAmountValidations(newArr);
      }
    }
  }
};

export default useValidateInput;
