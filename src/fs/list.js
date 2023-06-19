import { readdir, access, constants } from "node:fs/promises";
import { fileURLToPath } from 'node:url';

const list = async () => {
  const fullDirectoryPath = fileURLToPath(new URL("./files", import.meta.url));

  try {
    await access(fullDirectoryPath, constants.F_OK);
    const filesList = await readdir(fullDirectoryPath);

    console.log(filesList);
  } catch(error) {
    throw new Error(error.code === "ENOENT" ? "FS operation failed" : error.message);
  }
};

await list();
