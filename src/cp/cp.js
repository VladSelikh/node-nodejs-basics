import { fork } from 'node:child_process';
import { fileURLToPath } from "node:url";
import { join, dirname } from "path";

const filePath = join(
    dirname(fileURLToPath(import.meta.url)),
    "files",
    "script.js"
  );

const spawnChildProcess = async (args) => {
    fork(filePath, args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
