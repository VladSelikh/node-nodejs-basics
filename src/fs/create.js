import { writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const create = async () => {
  const fullFilePath = process.cwd() + "/src/fs/files/fresh.txt";

  if (existsSync(fullFilePath)) {
    throw Error("FS operation failed");
  } else {
    await writeFile(fullFilePath, "I am fresh and young");
  }
};

await create();
