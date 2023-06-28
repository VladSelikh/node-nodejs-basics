import { unlink, access, constants } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const remove = async () => {
  const filePath = fileURLToPath(new URL("./files/fileToRemove.txt", import.meta.url));

  try {
    await access(filePath, constants.F_OK);
    await unlink(filePath);
  } catch(error) {
    throw new Error(error.code === "ENOENT" ? "FS operation failed" : error.message);
  }
};

await remove();
