const interpolation = ({ step, start, end, callback, duration }) => {
  let count = 0;
  let path = start;
  let c = 0
  let interval = setInterval(() => {
    c++
    count += +(duration / step);
    callback([+path.toFixed(2), +count.toFixed(2)]);
    if (c == step) {
      clearInterval(interval);
    }
    path += (end - start) / step;
  }, duration / step);
};

