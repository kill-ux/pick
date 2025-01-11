/**
 * @param {string} serverName
 * @param {string} q
 */
const queryServers = (serverName, q) => {
  return Promise.race([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`),
  ]).then((data) => data);
};

/**
 * @param {string} q
 */
const gougleSearch = (q) => {
  const time = new Promise((_, rej) => {
    setTimeout(() => {
      rej(Error("timeout"));
    }, 80);
  });
  const result = Promise.all([
    queryServers("web", q),
    queryServers("image", q),
    queryServers("video", q),
  ]).then((data) => ({ web: data[0], image: data[1], video: data[2] }));

  return Promise.race([time, result]);
};
