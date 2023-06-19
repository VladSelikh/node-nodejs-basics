import { writeFile, access, constants } from "node:fs/promises";
import { fileURLToPath } from 'node:url';

const create = async () => {
  const fullFilePath = fileURLToPath(new URL("./files/fresh.txt", import.meta.url));
  const errorMessage = "FS operation failed";

  try {
    await access(fullFilePath, constants.F_OK);
    throw new Error(errorMessage);
  } catch(error) {
    if(error.code === "ENOENT") {
        return await writeFile(fullFilePath, "I am fresh and young");
    }
    throw new Error(error.message);
  }
};

await create();
