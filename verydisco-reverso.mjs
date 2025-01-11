import { readFile } from "fs/promises";
const fileName = process.argv[2];
try {
  const contents = await readFile(fileName, { encoding: "utf-8" });
  const res = contents
    .split(" ")
    .map((word) => {
      const len = word.length;
      return (
        word.slice(Math.floor(len / 2), len) +
        word.slice(0, Math.floor(len / 2))
      );
    })
    .join(" ");
  console.log(res);
} catch (err) {
  console.error(err.message);
}
