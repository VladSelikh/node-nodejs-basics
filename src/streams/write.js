import { createWriteStream } from "node:fs";
import { fileURLToPath } from "url";

const write = async () => {
  const fileName = fileURLToPath(
    new URL("./files/fileToWrite.txt", import.meta.url)
  );
  const stream = createWriteStream(fileName);
  const { stdin } = process;
  
  stdin.pipe(stream);
  stdin.resume();
};

await write();
