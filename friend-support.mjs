import { readdir, readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";

const GUESTS_DIR = "guests";
const PORT = 5000;

const server = createServer(async (req, res) => {
  try {
    const nameFile = req.url.slice(1);
    const guests = await readdir(GUESTS_DIR);
    const exactName = guests.find(
      (file) => file.toLowerCase() === `${nameFile.toLowerCase()}.json`
    );

    if (!exactName) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(JSON.stringify({ error: "guest not found" }));
      return;
    }

    const filePath = path.join(GUESTS_DIR, exactName);
    const data = await readFile(filePath, "utf-8");
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } catch (error) {
    console.error("Failed to read guests directory:", error.message);
    res.writeHead(500, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "server failed" }));
  }
});

server.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
