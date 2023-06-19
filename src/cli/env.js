const parseEnv = () => {
    const envVariablesArray = process.env;
    const rssPrefixedVariablesList = Object.keys(envVariablesArray).filter(item => item.includes("RSS_"))

    console.log(rssPrefixedVariablesList.map(item => `${item}=${process.env[item]}`).join("; "));
};

parseEnv();