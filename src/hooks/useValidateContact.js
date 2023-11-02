const useValidateContact = (
  e,
  amountValidations,
  index,
  position,
  setAmountValidations,
  setMessageError,
  messageError,
  initialValues,
  message
) => {
  let newArr = [...amountValidations];
  let newObj = newArr[index];

  initialValues.map((user, i) => {
    if (e != "" && user[position] == e && index != i) {
      const updatedFiles = [...messageError];
      updatedFiles[index] = message;
      setMessageError(updatedFiles);

      console.log();

      newObj = { ...newObj, [position]: false };
      newArr[index] = newObj;
      setAmountValidations(newArr);
    }
  });
};

export default useValidateContact;
