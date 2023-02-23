let timer;

const useValidateInput = (
  e,
  amountValidatios,
  index,
  position,
  setAmountValidations
) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (e === "") {
      let newArr = [...amountValidatios];
      let newObj = newArr[index];
      newObj[position] = false;
      setAmountValidations(newArr);
    } else if (e === false) {
      return;
    } else {
      let newArr = [...amountValidatios];
      let newObj = newArr[index];
      newObj[position] = true;
      setAmountValidations(newArr);
    }
  }, 1000);
};

export default useValidateInput;
