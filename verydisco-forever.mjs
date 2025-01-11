import { writeFile } from "fs/promises";
const arg = process.argv[2];
const data = arg
  .split(" ")
  .map((word) => {
    const len = word.length;
    return (
      word.slice(Math.ceil(len / 2), len) + word.slice(0, Math.ceil(len / 2))
    );
  })
  .join(" ");

writeFile("verydisco-forever.txt", data);
