import { readdir, readFile, writeFile } from "fs/promises";
import path from "path";

try {
  let p = process.argv[2] || ".";
  let files = await readdir(p);
  let result = [];
  writeFile("vip.txt", "");
  let res = files.map(async (file) => {
    let data = await readFile(path.join(p, file), { encoding: "utf-8" });
    const answer = JSON.parse(data).answer.toLowerCase();
    if (answer == "yes") {
      const Name = file.split("_");
      const content = `${Name[1] ? Name[1].split(".")[0] : ""} ${
        Name[0] ? Name[0].split(".")[0] : ""
      }`;
      result.push(content);
      let data = [];
      result.sort().forEach((value, index) => {
        data.push(`${index + 1}. ${value}`);
      });
      data = data.join("\n");
      writeFile("vip.txt", data);
    }
  });
} catch (error) {
  console.log(error.message);
}
