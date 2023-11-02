const useBrowser = () => {
  var OSName;
  if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = true;
  else OSName = false;
  return OSName;
};

export default useBrowser;
