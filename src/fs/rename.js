import * as fsPromises from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const rename = async () => {
  const fullDirectoryPath = fileURLToPath(new URL("./files", import.meta.url));
  const fullInitialFilePath = path.join(fullDirectoryPath, "wrongFileName.txt");
  const fullNewFilePath = path.join(fullDirectoryPath, "properFilename.md");
  const customErrorMessage = "FS operation failed";

  try {
    await fsPromises.access(fullInitialFilePath, fsPromises.constants.F_OK);
    try {
      await fsPromises.access(fullNewFilePath, fsPromises.constants.F_OK);
      throw new Error(customErrorMessage);
    } catch (error) {
      if (error.code === "ENOENT") {
        return await fsPromises.rename(fullInitialFilePath, fullNewFilePath)
      }
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error(error.code === "ENOENT" ? customErrorMessage : error.message);
  }
};

await rename();
