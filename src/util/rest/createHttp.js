
const get = (url, /* params = {} */ ) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const init = {
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default'
  };

  const request = new Request(url, init);

  return fetch(request).then(
    response => response.json()
  );
};


export default { get };
