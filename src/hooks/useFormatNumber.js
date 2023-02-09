const useFormatNumber = (price) => {
  const roundPrice = Math.round(price);
  const formatNumber = roundPrice
    .toString()
    .split("")
    .reverse()
    .map((e, i) => (i % 3 === 0 && i !== 0 ? `${e}.` : e))
    .reverse()
    .join("");

  return formatNumber;
};

export default useFormatNumber;
