import morgan from "morgan";

const logger = morgan((tokens, req, res) => {
  const status = tokens.status(req, res);
  const color =
    status && +status >= 500
      ? "\x1b[31m" // red
      : status && +status >= 400
      ? "\x1b[33m" // yellow
      : "\x1b[32m"; // green

  return [
    `[\x1b[90m${new Date().toLocaleTimeString()}\x1b[0m]`,  // Time
    `\t${tokens["response-time"](req, res)} ms`,               // Response Time
    `\t${color}${status}\x1b[0m`,                           // Status Code
    `\t${tokens.method(req, res)} ${tokens.url(req, res)}`, // Method + Route
  ].join(" ");
});

export default logger;
