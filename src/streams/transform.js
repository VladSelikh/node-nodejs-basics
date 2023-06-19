import { Transform, pipeline } from "node:stream";

const transform = async () => {
  const { stdin, stdout } = process;
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedData = chunk.toString().split("").reverse().join("");
      this.push(reversedData);
      callback();
    },
  });

  pipeline(stdin, transformStream, stdout, (err) => {
    if (err) throw new Error(err.message);
  });
};

await transform();
