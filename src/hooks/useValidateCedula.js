const cleanIdNumber = (idNumber) => idNumber.replace(/\D/g, "");

const generateValidationDigit = (idNumber) => {
  let ci = typeof idNumber === "number" ? idNumber.toString() : idNumber;

  for (let i = 0; i < 7 - ci.length; i++) {
    ci = "0" + ci;
  }

  return safeGenerateValidationDigit(ci);
};

const safeGenerateValidationDigit = (idNumber) => {
  let ci = idNumber;
  let sum = 0;

  for (let i = 0; i < 7; i++) {
    sum += parseInt("2987634"[i]) * parseInt(ci[i]);
  }

  if (sum % 10 === 0) {
    return 0;
  }

  return 10 - (sum % 10);
};

export const useValidateCedula = (idNumber) => {
  const ci = typeof idNumber === "number" ? idNumber.toString() : idNumber;

  if (ci.length < 7 || ci.length > 8) {
    return false;
  }

  const cleanNumber = cleanIdNumber(ci);
  const possibleValidationDigit = parseInt(
    cleanNumber[cleanNumber.length - 1],
    10
  );

  const validableNumber = cleanNumber.replace(/[0-9]$/, "");
  const actualValidationDigit = generateValidationDigit(validableNumber);

  return possibleValidationDigit === actualValidationDigit;
};
