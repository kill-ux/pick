const sendRequest = async (path) => {
  const response = await fetch(`http://localhost:5000${path}`, {
    method: "GET",
  });
  const { status } = response;
  const headers = Object.fromEntries(response.headers);
  let body = "";
  try {
    body = await response.json();
  } catch (err) {
    body = err;
  }
  return { status, body, headers };
};

const obj = await sendRequest("/Aaisha_Mcculloch");
console.log(obj);
