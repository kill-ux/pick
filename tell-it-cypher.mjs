import { readFile, writeFile } from "fs/promises";
const main = async () => {
  const path = process.argv[2];
  const code = process.argv[3];
  const output = process.argv[4];
  if (code === "encode") {
    const res = await readFile(path);
    writeFile(`${output || "cypher.txt"}`, res.toString("base64"));
  } else if (code === "decode") {
    const res = await readFile(path, "utf-8");
    const data = Buffer.from(res, "base64");
    writeFile(`${output || "clear.txt"}`, data.toString("utf-8"));
  }
};

main();
