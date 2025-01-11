const arg = process.argv[2];
console.log(
  arg.split(" ").map((word) => {
    const len = word.length;
    return (
      word.slice(Math.ceil(len / 2), len) + word.slice(0, Math.ceil(len / 2))
    );
  }).join(" ")
);
