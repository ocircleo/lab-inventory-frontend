const fetchWithTimeOut = (url, options = {}, time = 15000) => {
  const controller = new AbortController();
  const timeOut = setTimeout(() => controller.abort(), time);
  options.signal = controller.signal;
  return fetch(url, options).finally(() => clearTimeout(timeOut));
};

export default fetchWithTimeOut;
