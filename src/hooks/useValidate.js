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
    if (e.target.value === "") {
      let newArr = [...amountValidatios];
      let newObj = newArr[index];
      newObj[position] = false;
      setAmountValidations(newArr);
    } else if (e.target.value === false) {
      return;
    } else {
      let newArr = [...amountValidatios];
      let newObj = newArr[index];
      newObj[position] = true;
      setAmountValidations(newArr);
    }
  }, 2000);
};

export default useValidateInput;
