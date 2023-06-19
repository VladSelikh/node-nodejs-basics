import { fileURLToPath } from "node:url";
import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import path from "path";

const compress = async () => {
  const dirname = fileURLToPath(new URL("./files", import.meta.url));

  const pathToFileToCompress = path.join(dirname, "fileToCompress.txt");
  const pathToArchive = path.join(dirname, "archive.gz");

  const readStream = createReadStream(pathToFileToCompress, "utf8");
  const writeStream = createWriteStream(pathToArchive);
  const gzip = createGzip();

  pipeline(readStream, gzip, writeStream, (err) => {
    if (err) throw new Error(err.message);
  });
};

await compress();
