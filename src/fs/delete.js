import { unlink } from "node:fs/promises";
import { existsSync } from "node:fs";

const remove = async () => {
  const filePath = process.cwd() + "/src/fs/files/fileToRemove.txt";

  if (!existsSync(filePath)) {
    throw Error("FS operation failed");
  } else {
    await unlink(filePath);
  }
};

await remove();
