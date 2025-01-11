import { readdir } from "fs/promises";

try {
  let path = process.argv[2] || ".";
  const files = await readdir(path);
  console.log(files.length);
} catch (error) {
  console.log(error.message);
}
