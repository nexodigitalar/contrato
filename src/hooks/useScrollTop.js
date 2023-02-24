const useScrollTop = () => {
  document.documentElement.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
};

export default useScrollTop;
