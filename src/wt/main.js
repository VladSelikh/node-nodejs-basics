import os from "node:os";
import { fileURLToPath } from "node:url";
import { join, dirname } from "path";
import { Worker } from "node:worker_threads";

const cpusNumber = os.cpus().length;
const pathToFileWithWorker = join(
  dirname(fileURLToPath(import.meta.url)),
  "worker.js"
);

const performCalculations = async () => {
  const promisesArray = [];
  let increment = 10;

  for (let i = 0; i < cpusNumber; i++) {
    promisesArray.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(pathToFileWithWorker);
        worker.postMessage(increment);
        worker.on("message", (result) =>
          resolve({ status: "resolved", data: result })
        );
        worker.on("error", () => reject({ status: "error", data: null }));
        increment += 1;
      })
    );
  }

  console.log(
    (await Promise.allSettled(promisesArray)).map((result) => result.value)
  );
};

await performCalculations();
