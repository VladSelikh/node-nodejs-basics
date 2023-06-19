import { readFile, access, constants } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const read = async () => {
  const fullFilePath = fileURLToPath(
    new URL("./files/fileToRead.txt", import.meta.url)
  );

  try {
    await access(fullFilePath, constants.F_OK);
    const content = await readFile(fullFilePath, { encoding: "utf8" });

    console.log(content);
  } catch(error) {
    throw new Error(error.code === "ENOENT" ? "FS operation failed" : error.message);
  }
};

await read();
