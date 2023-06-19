import { createReadStream } from "node:fs";
import { fileURLToPath } from "node:url";

const read = async () => {
  const fileName = fileURLToPath(
    new URL("./files/fileToRead.txt", import.meta.url)
  );
  createReadStream(fileName, { encoding: "utf8" }).on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
