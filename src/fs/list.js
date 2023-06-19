import { readdir } from "node:fs/promises";
import { existsSync } from "node:fs";

const list = async () => {
  const fullDirectoryPath = process.cwd() + "/src/fs/files";

  if (!existsSync(fullDirectoryPath)) {
    throw Error("FS operation failed");
  } else {
    const filesList = await readdir(fullDirectoryPath);

    console.log(filesList);
  }
};

await list();
