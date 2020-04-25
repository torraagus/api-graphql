const errorCode = {
  E11000: "Duplicate key",
};

export function formatError(obj) {
  const error = errorCode[`E${obj["code"]}`];
  const field = Object.getOwnPropertyNames(obj["keyValue"]).sort()[0];
  return `${error} in field ${field}`;
}
