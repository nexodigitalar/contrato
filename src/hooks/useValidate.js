let timer;

const useValidateInput = (
  e,
  amountValidations,
  index,
  position,
  setAmountValidations,
  setMessageFile
) => {
  clearTimeout(position);
  timer = setTimeout(() => {
    let newArr = [...amountValidations];
    let newObj = newArr[index];

    //validar teléfono
    if (position === "telefono") {
      let lengthValidation = e.length <= 12 && e.length >= 8;
      if (e === "" || e === "placeholder") {
        newObj = { ...newObj, [position]: false };
        newArr[index] = newObj;

        setAmountValidations(newArr);
      } else {
        if (lengthValidation) {
          newObj = { ...newObj, [position]: true };
          newArr[index] = newObj;

          setAmountValidations(newArr);
        } else {
          newObj = { ...newObj, [position]: false };
          newArr[index] = newObj;

          setAmountValidations(newArr);
        }
      }
    } else if (position === "email") {
      // Validar Email
      let validationEmail = e.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (e === "" || e === "placeholder") {
        newObj = { ...newObj, [position]: false };
        newArr[index] = newObj;

        setAmountValidations(newArr);
      } else {
        if (validationEmail) {
          newObj = { ...newObj, [position]: true };
          newArr[index] = newObj;

          setAmountValidations(newArr);
        } else {
          newObj = { ...newObj, [position]: false };
          newArr[index] = newObj;

          setAmountValidations(newArr);
        }
      }
    } else if (position === "ciFrente" || position === "ciDorso") {
      if (e.length == 0) {
        newObj = { ...newObj, [position]: false };
        newArr[index] = newObj;

        setMessageFile("Campo obligatorio");
        setAmountValidations(newArr);
      } else {
        if (e[0].size > 5000) {
          newObj = { ...newObj, [position]: false };
          newArr[index] = newObj;

          setMessageFile("El archvio debe pesar menos de 5mb");
          setAmountValidations(newArr);
        } else {
          newObj = { ...newObj, [position]: true };
          newArr[index] = newObj;

          setAmountValidations(newArr);
        }
      }
    } else {
      // Validar el resto
      if (e === "" || e === "placeholder") {
        newObj = { ...newObj, [position]: false };
        newArr[index] = newObj;
        setAmountValidations(newArr);
      } else if (e === false) {
        return;
      } else {
        newObj = { ...newObj, [position]: true };
        newArr[index] = newObj;

        setAmountValidations(newArr);
      }
    }
  }, 500);
};

export default useValidateInput;
