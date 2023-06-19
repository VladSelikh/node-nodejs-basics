import { fileURLToPath } from "node:url";
import { createUnzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import path from "path";

const decompress = async () => {
  const dirname = fileURLToPath(new URL("./files", import.meta.url));

  const pathToArchive = path.join(dirname, "archive.gz");
  const pathToDecompressedFile = path.join(dirname, "fileToCompress.txt");

  const readStream = createReadStream(pathToArchive);
  const writeStream = createWriteStream(pathToDecompressedFile);
  const unzip = createUnzip();

  pipeline(readStream, unzip, writeStream, (err) => {
    if (err) throw new Error(err.message);
  });
};

await decompress();
