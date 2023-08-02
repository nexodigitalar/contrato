const useBrowser = () => {
  var test = function (regexp) {
    return regexp.test(window.navigator.userAgent);
  };
  let answer;
  switch (true) {
    case test(/safari/i):
      answer = true;
    default:
      answer = false;
  }
  return answer;
};

export default useBrowser;
