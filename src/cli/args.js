const parseArgs = () => {
  const indicator = "--";

  const resultingArray = [];

  process.argv.forEach((item, index, array) => {
    if (item.includes(indicator)) {
      resultingArray.push(
        `${item.replace(indicator, "")} is ${array[index + 1]}`
      );
    }
  });

  console.log(resultingArray.join(", "));
};

parseArgs();
