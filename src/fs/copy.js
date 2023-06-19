import { cp, access, constants } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const copy = async () => {
  const fullSourcePath = fileURLToPath(new URL("./files", import.meta.url));
  const fullDestinationPath = fullSourcePath + "_copy";
  const customErrorMessage = "FS operation failed";
  const noSuchFileCode = "ENOENT";

  try {
    await access(fullSourcePath, constants.F_OK);
    try {
      await access(fullDestinationPath, constants.F_OK);
      throw new Error(customErrorMessage);
    } catch (error) {
      if (error.code === noSuchFileCode) {
        return await cp(fullSourcePath, fullDestinationPath, {
          recursive: true,
        });
      }
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error(error.code === noSuchFileCode ? customErrorMessage : error.message);
  }
};

await copy();
