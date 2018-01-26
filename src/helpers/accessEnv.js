// accesses a property in process.env; if it does not exist, throws an error

export default key => {
  if (!(key in process.env)) {
    throw new Error(`${key} not found in process.env!`);
  }

  return process.env[key];
};
