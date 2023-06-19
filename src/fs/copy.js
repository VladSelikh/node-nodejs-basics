import { cp } from "node:fs/promises";
import { existsSync } from "node:fs";

const copy = async () => {
  const fullSourcePath = process.cwd() + "/src/fs/files";
  const fullDestinationPath = fullSourcePath + "_copy";
  const errorMessage = "FS operation failed";

  if (!existsSync(fullSourcePath)) {
    throw Error(errorMessage);
  } else if (existsSync(fullDestinationPath)) {
    throw Error(errorMessage);
  } else {
    await cp(fullSourcePath, fullDestinationPath, {
      recursive: true,
    });
  }
};

await copy();
