import { writeFile } from "fs/promises";
import { createServer } from "http";
import path from "path";

const PORT = 5000;
const GUESTS_DIR = "guests";

const server = createServer(async (req, res) => {
  if (req.method !== "POST") {
    console.error("methode not allowd");
    res.writeHead(405, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "methode not allowd" }));
    return;
  }
  const name = req.url.slice(1);
  req.on("data", async (data) => {
    try {
      await writeFile(path.join(GUESTS_DIR, name + ".json"), data);
      res.writeHead(201, { "content-type": "application/json" });
      res.end(data);
    } catch (error) {
      res.writeHead(500, { "content-type": "application/json" });
      res.end(JSON.stringify({ error: "server failed" }));
    }
  });
});

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${5000}`)
);
