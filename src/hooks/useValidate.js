const useValidateInput = (e) => {
  const timer = setTimeout(() => {
    var target = e.target;
    var error = target.parentElement.lastElementChild;
    if (!e.target.value) {
      error.classList.remove("input_error_hidden");
    }
  }, 1000);
  return () => clearTimeout(timer);
};

export default useValidateInput;
