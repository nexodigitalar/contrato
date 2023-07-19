import { useValidateCedula } from "@/hooks/useValidateCedula.js";
let timer;

const useValidateInput = (
  e,
  amountValidations,
  index,
  position,
  setAmountValidations,
  setMessageFile,
  messageFile
) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
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
          newObj = { ...newObj, [position]: true };
          newArr[index] = newObj;

          setAmountValidations(newArr);
        } else {
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
            const updatedFiles = [...messageFile];
            updatedFiles[index] = {
              ...updatedFiles[index],
              frente: "Campo obligatorio",
            };
            setMessageFile(updatedFiles);
          } else {
            const updatedFiles = [...messageFile];
            updatedFiles[index] = {
              ...updatedFiles[index],
              dorso: "Campo obligatorio",
            };
            setMessageFile(updatedFiles);
          }

          setAmountValidations(newArr);
        } else {
          if (e[0].size > 2000000) {
            newObj = { ...newObj, [position]: false };
            newArr[index] = newObj;

            if (position === "ciFrente") {
              const updatedFiles = [...messageFile];
              updatedFiles[index] = {
                ...updatedFiles[index],
                frente: "El archvio debe pesar menos de 2MB",
              };
              setMessageFile(updatedFiles);
            } else {
              const updatedFiles = [...messageFile];
              updatedFiles[index] = {
                ...updatedFiles[index],
                dorso: "El archvio debe pesar menos de 2MB",
              };
              setMessageFile(updatedFiles);
            }

            setAmountValidations(newArr);
          } else {
            newObj = { ...newObj, [position]: true };
            newArr[index] = newObj;

            setAmountValidations(newArr);
          }
        }
      } else if (position === "cedula") {
        let validate = useValidateCedula(e);

        if (validate) {
          newObj = { ...newObj, [position]: true };
          newArr[index] = newObj;
          setAmountValidations(newArr);
        } else {
          newObj = { ...newObj, [position]: false };
          newArr[index] = newObj;

          setAmountValidations(newArr);
        }
      } else if (position === "fechaNacimiento") {
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
  }, 400);
};

export default useValidateInput;
