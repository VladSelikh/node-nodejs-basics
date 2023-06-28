import { readFile } from "node:fs/promises";
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const calculateHash = async () => {
  const fileName = fileURLToPath(
    new URL("./files/fileToCalculateHashFor.txt", import.meta.url)
  );
  const content = await readFile(fileName, { encoding: "utf8" });
  const hash = createHash("sha256").update(content).digest("hex");

  console.log(hash);
};

await calculateHash();
