/**
 *
 * @param {URL} path
 * @param {string} params
 */
const getJSON = async (path, params) => {
  let query = path + "?" + new URLSearchParams(params).toString();
  return fetch(query)
    .then((data) => {
      if (!data.ok) {
        throw Error(data.statusText);
      }
      let read = data.json();
      return read;
    })
    .then((v) => {
      if (v.error) {
        throw new Error(v.error);
      }
      return v.data;
    });
};
