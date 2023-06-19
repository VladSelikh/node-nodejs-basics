import * as fsPromises from "node:fs/promises";
import { existsSync } from "node:fs";

const rename = async () => {
  const fullDirectoryPath = process.cwd() + "/src/fs/files/";
  const fullInitialFilePath = fullDirectoryPath + "wrongFileName.txt";
  const fullNewFilePath = fullDirectoryPath + "properFilename.md";
  const errorMessage = "FS operation failed";

  if (!existsSync(fullInitialFilePath)) {
    throw Error(errorMessage);
  } else if (existsSync(fullNewFilePath)) {
    throw Error(errorMessage);
  } else {
    await fsPromises.rename(fullInitialFilePath, fullNewFilePath);
  }
};

await rename();
