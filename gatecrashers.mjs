import { writeFile } from "fs/promises";
import { createServer } from "http";
import path from "path";

const PORT = 5000;
const GUESTS_DIR = "guests";
const database = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"];
const pass = "abracadabra";
const tokens = database.map((name) =>
  Buffer.from(`${name}:${pass}`).toString("base64")
);
const server = createServer(async (req, res) => {
  const client = req.headers.authorization?.split("Basic ")?.join("");
  if (!tokens.includes(client)) {
    res.writeHead(401, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "Authorization Required" }));
    return;
  }
  if (req.method !== "POST") {
    console.error("methode not allowd");
    res.writeHead(405, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "methode not allowd" }));
    return;
  }
  const name = req.url.slice(1);
  let event;
  req.on("data", async (data) => {
    event = true;
    try {
      await writeFile(path.join(GUESTS_DIR, name + ".json"), data);
      res.writeHead(201, { "content-type": "application/json" });
      res.end(data);
    } catch (error) {
      res.writeHead(500, { "content-type": "application/json" });
      res.end(JSON.stringify({ error: "server failed" }));
    }
  },);
  if (req.headers["content-length"] == 0 || req.headers["content-length"] == undefined) {
    res.end();
  }
});

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
