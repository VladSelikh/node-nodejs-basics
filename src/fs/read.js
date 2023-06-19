import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const read = async () => {
  const fullFilePath = process.cwd() + "/src/fs/files/fileToRead.txt";

  if (!existsSync(fullFilePath)) {
    throw Error("FS operation failed");
  } else {
    const content = await readFile(fullFilePath, { encoding: "utf8" });

    console.log(content);
  }
};

await read();
