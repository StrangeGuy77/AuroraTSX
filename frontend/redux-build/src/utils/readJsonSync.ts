const { inspect } = require("util");
const { readFileSync } = require("fs");

const CODE = "ERR_INVALID_OPT_VALUE_ENCODING";
const ENCODING_ERROR =
  "read-json-sync expected the encoding option to be a <string> (defaulting to 'utf8' if nothing is specified) so as to convert file contents from <Buffer> to <string> before parsing it as JSON";

export const readJsonSync = (...args: any[]) => {
  const argLen = args.length;

  if (argLen === 2) {
    const options = args[1];
    const isObject = typeof options === "object";

    if (
      options === null ||
      (isObject &&
        options.encoding !== undefined &&
        typeof options.encoding !== "string")
    ) {
      const encoding = options === null ? null : options.encoding;
      const error: any = new TypeError(
        `${ENCODING_ERROR}, but a non-string value ${inspect(
          encoding
        )} was provided.`
      );
      error.code = CODE;

      throw error;
    }

    if (options === "" || (isObject && options.encoding === "")) {
      const error = new TypeError(
        `${ENCODING_ERROR.replace(
          "<",
          "non-empty <"
        )}, but '' (empty string) was provided.`
      );

      throw error;
    }

    if (isObject || options === undefined) {
      args[1] = { encoding: "utf8", ...options };
    }
  } else if (argLen === 1) {
    args.push("utf8");
  } else {
    throw new RangeError(
      `Expected 1 or 2 arguments (path[, options]), but got ${
        argLen === 0 ? "no" : argLen
      } arguments.`
    );
  }

  const str = readFileSync(...args);

  return JSON.parse(
    str.charCodeAt(0) === 65279 /* 0xFEFF */ ? str.slice(1) : str
  );
};
