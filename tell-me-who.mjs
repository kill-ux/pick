import { readdir } from "fs/promises";

try {
  let path = process.argv[2] || ".";
  let files = await readdir(path);
  let res = files.map((file) => {
    const Name = file.split("_");
    return `${Name[1] ? Name[1].split(".")[0] : ""} ${
      Name[0] ? Name[0].split(".")[0] : ""
    }`;
  });
  res.sort().forEach((value, index) => {
    console.log(`${index + 1}. ${value}`)
  });
} catch (error) {
  console.log(error.message);
}
